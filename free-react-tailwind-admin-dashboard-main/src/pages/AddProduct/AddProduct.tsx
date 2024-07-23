import { useForm } from 'react-hook-form';
import InputField from '../../components/UI/InputField';
import BarCodeReader from '../../components/UI/BarCodeReader';
import Button from '../../components/UI/Button';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function AddProduct() {
  const { register, handleSubmit } = useForm();
  const currentDate = new Date();
  const [uploadedProductList, setUploadedProductList] = useState([]);
  const handleAddProduct = (data: object) => {
    console.log('data : ', data);
    setUploadedProductList([...uploadedProductList, data]);
  };

  return (
    <div>
      <Breadcrumb pageName="Add Product" />
      <div className="flex justify-between gap-6 items-start">
        <form
          className="w-3/5 bg-white p-6 rounded-md"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <div className="grid grid-cols-2 gap-4">
            <InputField
              register={register}
              label={'Product Name'}
              name={'name'}
              classname={''}
            />
            <BarCodeReader register={register} name={'barcode'} />

            <InputField
              register={register}
              label={'Cost Price'}
              name={'cost_price'}
              type="number"
              classname={''}
            />
            <InputField
              register={register}
              label={'Selling Price'}
              name={'selling_price'}
              type="number"
              classname={''}
            />
            <InputField
              register={register}
              label={'Quantity'}
              name={'quantity'}
              type="number"
              classname={''}
            />
            <InputField
              register={register}
              type="date"
              label={'Uploaded date'}
              name={'uploaded_date'}
              classname={''}
            />
          </div>
          <div className="flex justify-end mt-10">
            <Button buttonName="Add Product" />
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
                <div className="flex justify-between">
                  <p className="text-lg text-black font-medium line-clamp-2">
                    {index + 1} . {item?.name}
                  </p>
                  <IoClose size={24} className="text-red-500 cursor-pointer" />
                </div>
                <div className="flex gap-4 items-center">
                  {statusList?.map((status) => {
                    return (
                      <div className="flex items-center gap-2 text-base font-medium">
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
  );
}
