import { useState } from 'react';
import { IoEyeOffOutline } from 'react-icons/io5';
import { IoEyeOutline } from 'react-icons/io5';

interface Props {
  label: string;
  register: (e: any) => {};
  name: string;
  type?: string;
  value?: any;
  disabled?: boolean;
  defaultValue?: any;
  placeholder?: string;
  classname: string;
}

export default function InputField({
  label,
  register,
  name,
  value,
  defaultValue,
  disabled = false,
  type = 'text',
  placeholder,
  classname,
}: Props) {
  const [eye, setEye] = useState(false);
  return (
    <div className="w-full">
      {type !== 'password' && label && (
        <label className="mb-2 block text-black font-medium dark:text-white">
          {label}
        </label>
      )}
      {type === 'password' && label && (
        <div className="flex items-center justify-between">
          <label className="mb-2 block text-black font-medium dark:text-white">
            {label}
          </label>
          <div
            className="text-xl cursor-pointer mr-1 font-medium"
            onClick={() => setEye(!eye)}
          >
            {eye ? <IoEyeOutline /> : <IoEyeOffOutline />}
          </div>
        </div>
      )}
      <input
        {...register(name)}
        type={
          type === 'password' && eye
            ? 'password'
            : type === 'password' && !eye
            ? 'text'
            : type
        }
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${classname} w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
      />
    </div>
  );
}
