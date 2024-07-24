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
  required?: boolean;
  defaultValue?: any;
  placeholder?: string;
  error?: string;
  classname: string;
}

export default function InputField({
  label,
  register,
  name,
  value,
  defaultValue,
  disabled = false,
  required = false,
  type = 'text',
  placeholder,
  error,
  classname,
}: Props) {
  const [eye, setEye] = useState(true);
  return (
    <div className="w-full">
      {type !== 'password' && label && (
        <label className="mb-2 block text-sm text-black font-medium dark:text-white">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      {type === 'password' && label && (
        <div className="flex items-center justify-between">
          <label className="mb-2 block text-sm text-black font-medium dark:text-white">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <div
            className="text-sm cursor-pointer mr-1 font-medium"
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
        id={name}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`${classname} w-full disabled:cursor-not-allowed rounded border-[1.5px] text-sm border-stroke bg-transparent py-3 px-4 text-black outline-none h-10 transition focus:border-primary active:border-primary  disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
