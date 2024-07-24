import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import toast from 'react-hot-toast';
import { useCategoryMutation } from '../../hooks/useMutateData';
import ChooseImage from '../../components/UI/ChooseImage';
import KeywordSelect from '../../components/UI/KeywordSelect';
import InputField from '../../components/UI/InputField';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { IoClose } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/UI/Button';
import { ConvertHtmlToPlainText } from '../../utils/convertHtmlToPlainText';
import {
  capitalizeFirstLetter,
  smallFirstLetter,
} from '../../utils/capitalizeFirstLetter';

export default function AddCategory() {
  const location = useLocation();
  const editData = location.state;
  const edit = location.state;
  const [selectedImage, setSelectedImage] = useState();
  const [value, setValue] = useState(edit ? editData?.description : '');
  const [tags, setTags] = useState(edit ? editData?.tags : []);

  const fieldSchema = Yup.object().shape({
    title: Yup.string()
      .required('Required')
      .max(36, 'Must be 36 characters or less'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(fieldSchema),
    defaultValues: {
      title: editData?.title,
    },
  });
  const formValue = watch();
  const navigate = useNavigate();
  const categoryMutation = useCategoryMutation();

  const onSubmitHandler = async (data) => {
    const postData = {
      ...data,
      description: value,
      thumbnail: selectedImage && selectedImage,
      tags: tags,
    };
    try {
      await categoryMutation.mutateAsync([
        edit ? 'patch' : 'post',
        edit ? `update/${editData?._id}` : 'create/',
        postData,
      ]);
      toast.success(`Category ${edit ? 'edited' : 'added'} successfully`);
      navigate('/category');
      reset();
    } catch (err) {
      console.log('err', err);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setValue(edit ? editData?.description : '');
    setSelectedImage();
    reset();
  };

  return (
    <div>
      <Breadcrumb pageName={edit ? 'Edit Category' : 'Add Category'} />
      <div className="flex justify-between gap-6 items-start">
        <form
          className="w-3/5 bg-white p-6 rounded-md"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <div className="flex flex-col gap-4">
            <ChooseImage
              setSelectedImage={setSelectedImage}
              selectedImage={selectedImage}
              defaultUrl={editData?.thumbnail?.url}
            />

            <InputField
              register={register}
              name="title"
              placeholder="Enter Category Name"
              className="w-full text-sm text-gray-500"
              defaultValue=""
              required
              error={errors?.title?.message}
              label="Category Name"
            />
            <div>
              <p className="text-[#344054] font-medium text-sm mb-1">
                Description{' '}
              </p>
              <ReactQuill
                theme="snow"
                className="h-[100px] mb-10 outline-none focus:border-primary"
                value={value}
                onChange={setValue}
              />
            </div>
            <KeywordSelect
              title={
                'Enter the field you want add as an feature in this category'
              }
              id="catagory_inputfield "
              tags={tags}
              setTags={setTags}
            />
          </div>
          <div className="flex items-center justify-end">
            <div className="grid grid-cols-2 w-full mt-10 gap-2 md:w-1/2">
              <Button
                buttonName={'Clear'}
                handleButtonClick={(e) => {
                  e.preventDefault();
                  handleClear(e);
                }}
              />
              <Button
                handleButtonClick={() => {}}
                buttonName={`${edit ? 'Edit' : 'Add'} Category`}
              />
            </div>
          </div>
        </form>
        <div className="w-2/5 flex flex-col items-center gap-2 h-[70vh] overflow-auto bg-white py-4 px-4">
          <p className="font-medium">Preview Category Form</p>
          <div className="flex flex-col items-center gap-1">
            <div className="rounded-full  bg-gray">
              <img
                className="h-14 w-14 rounded-full object-cover"
                src={selectedImage?.url ?? editData?.thumbnail?.url}
                alt=""
              />
            </div>
            <p className="font-medium">{formValue?.title}</p>
            <p className="text-sm text-center">
              {ConvertHtmlToPlainText(value)}
            </p>
          </div>
          <div className="gap-3 w-full grid grid-cols-2 mt-2">
            {tags?.map((item) => {
              return (
                <div key={item}>
                  <InputField
                    register={register}
                    name={item}
                    placeholder={`Enter ${smallFirstLetter(item)}`}
                    disabled
                    label={capitalizeFirstLetter(item)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
