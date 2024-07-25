import { useForm } from 'react-hook-form';
import InputField from '../../components/UI/InputField';
import Button from '../../components/UI/Button';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import BarCodeModal from '../../components/UI/BarCodeModal';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  useCategoryData,
  useProductDataByBarCode,
} from '../../hooks/useQueryData';
import { convertToSelectOptions } from '../../utils/convertToSelectOptions';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useProductMutation } from '../../hooks/useMutateData';
import ChooseImage from '../../components/UI/ChooseImage';
import CustomSelect from '../../components/Forms/SelectGroup/CustomSelect';
import {
  capitalizeFirstLetter,
  smallFirstLetter,
} from '../../utils/capitalizeFirstLetter';
import toast from 'react-hot-toast';

export default function AddProduct() {
  const [barCodeDisplay, setBarCodeDisplay] = useState('');
  const location = useLocation();
  const editData = location?.state;
  const { data } = useCategoryData();
  const { data: productDataByBarcode } =
    useProductDataByBarCode(barCodeDisplay);
  const [open, setOpen] = useState(editData ? false : true);
  const formValue =
    productDataByBarcode?.data?.[productDataByBarcode?.data?.length - 1] ??
    editData;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uploadedProductList, setUploadedProductList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(editData?.images?.[0]);
  const categoryOptions = convertToSelectOptions(data?.data);
  const navigate = useNavigate();
  const fieldSchema = Yup.object().shape({});
  const [selectedBrand, setSelectedBrand] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(fieldSchema),
    defaultValues: { ...formValue },
  });

  const productMutation = useProductMutation();
  const categoryField = data?.data?.filter(
    (item) => item?.title === selectedCategory,
  );

  const handleClear = () => {
    setSelectedImage();
    // setSelectedCategory([]);
    // setSelectedBrand([]);
    reset({
      quantity: formValue?.quantity ?? '',
      cost_price: formValue?.cost_price ?? '',
      selling_price: formValue?.selling_price ?? '',
      name: formValue?.name ?? '',
    });
  };

  const onSubmitHandler = async (data) => {
    const filteredKeys = Object.keys(data).filter(
      (key) => categoryField?.[0]?.tags?.includes(key),
    );

    const categoryValues = filteredKeys.map((key) => ({
      name: key,
      description: data[key],
    }));
    const postData = {
      quantity: data?.quantity,
      cost_price: data?.cost_price,
      selling_price: data?.selling_price,
      name: data?.name,
      brand: selectedBrand,
      barcode_number: barCodeDisplay,
      image: selectedImage,
      category: selectedCategory,
      categoryField: categoryValues,
    };

    try {
      await productMutation.mutateAsync([
        editData ? 'patch' : 'post',
        editData ? `update/${editData?._id}` : 'create/',
        postData,
      ]);
      setUploadedProductList([...uploadedProductList, data]);
      toast.success(`Product ${editData ? 'edited' : 'added'} successfully`);
      editData && navigate('/product');
      setOpen(true);
      setBarCodeDisplay('');
      handleClear();
    } catch (err) {
      console.log('err', err);
    }
  };

  useEffect(() => {
    if (!editData) {
      handleClear();
      setOpen(true);
    }
  }, [editData]);

  useEffect(() => {
    reset({
      quantity: formValue?.quantity ?? '',
      cost_price: formValue?.cost_price ?? '',
      selling_price: formValue?.selling_price ?? '',
      name: formValue?.name ?? '',
    });
    setSelectedCategory(formValue?.category);
  }, [productDataByBarcode]);

  return (
    <div>
      <BarCodeModal
        asChild
        setOpen={setOpen}
        open={open}
        barCodeDisplay={barCodeDisplay}
        setBarCodeDisplay={setBarCodeDisplay}
      >
        <div></div>
      </BarCodeModal>
      <div>
        <Breadcrumb
          pageName={`${editData ? 'Edit' : 'Add'} Product || Barcode : ${
            formValue?.barcode_number ?? '-'
          }`}
        />
        <div className="flex justify-between gap-6 items-start">
          <form
            className="w-3/5 bg-white p-6 rounded-md"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-2">
                <InputField
                  register={register}
                  name="name"
                  placeholder="Enter product name"
                  className="w-full text-sm "
                  defaultValue={formValue?.name}
                  // value={formValue?.name}
                  required
                  error={errors?.name?.message}
                  label="Product Name"
                />
                <ChooseImage
                  setSelectedImage={setSelectedImage}
                  selectedImage={selectedImage}
                  defaultUrl={formValue?.images?.[0]?.url}
                />
                <InputField
                  register={register}
                  name="cost_price"
                  placeholder="Enter cost price"
                  className="w-full text-sm "
                  defaultValue=""
                  required
                  type="number"
                  label="Cost Price"
                />
                <InputField
                  register={register}
                  name="selling_price"
                  placeholder="Enter selling price"
                  className="w-full text-sm "
                  defaultValue=""
                  required
                  type="number"
                  label="Selling Price"
                />
                <InputField
                  register={register}
                  name="quantity"
                  placeholder="Enter quantity"
                  className="w-full text-sm "
                  defaultValue=""
                  required
                  type="number"
                  label="Quantity"
                />
                <InputField
                  register={register}
                  name="barcode_number"
                  placeholder="Enter barcode number"
                  className="w-full text-sm "
                  defaultValue=""
                  // required
                  value={barCodeDisplay}
                  disabled
                  label="Barcode Number"
                />
                <CustomSelect
                  selectedOption={selectedCategory}
                  disabled={formValue}
                  setSelectedOption={setSelectedCategory}
                  label="Select Category"
                  options={categoryOptions}
                />
                {categoryField?.[0]?.brands && (
                  <CustomSelect
                    selectedOption={selectedBrand}
                    setSelectedOption={setSelectedBrand}
                    label="Select Brand"
                    options={convertToSelectOptions(categoryField?.[0]?.brands)}
                  />
                )}

                {!formValue &&
                  categoryField?.[0]?.tags?.map((item) => {
                    return (
                      <InputField
                        register={register}
                        name={item}
                        placeholder={`Enter ${smallFirstLetter(item)}`}
                        label={capitalizeFirstLetter(item)}
                      />
                    );
                  })}
                {formValue &&
                  formValue?.categoryField?.map((item) => {
                    return (
                      <InputField
                        register={register}
                        name={item?.name}
                        defaultValue={item?.description}
                        placeholder={`Enter ${smallFirstLetter(item?.name)}`}
                        label={capitalizeFirstLetter(item?.name)}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="flex justify-end mt-10">
              <div className="w-1/4">
                <Button buttonName={`${editData ? 'Edit' : 'Add'} Product`} />
              </div>
            </div>
          </form>
          <div className="w-2/5 flex flex-col gap-2 h-[70vh] overflow-auto ">
            {uploadedProductList?.map((item: any, index: number) => {
              const statusList = [
                {
                  title: 'Cost Price',
                  value: item?.cost_price,
                },
                {
                  title: 'Selling Price',
                  value: item?.selling_price,
                },
                {
                  title: 'Quantity',
                  value: item?.quantity,
                },
              ];

              return (
                <div className="bg-white rounded-md py-4 px-6">
                  <div className="flex justify-between mb-2">
                    <p className=" text-black font-medium line-clamp-2">
                      {index + 1} . {item?.name}
                    </p>
                    <IoClose
                      size={24}
                      className="text-red-500 cursor-pointer"
                    />
                  </div>
                  <div className="flex gap-4 items-center">
                    {statusList?.map((status) => {
                      return (
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <p>{status?.title} : </p>
                          <p>{status?.value}</p>
                        </div>
                      );
                    })}
                  </div>
                  <p></p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
