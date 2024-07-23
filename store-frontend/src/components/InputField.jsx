/* eslint-disable react/prop-types */
export default function InputField({
  label,
  register,
  name,
  type = "text",
  placeholder,
  classname,
}) {
  return (
    <div className="w-full xl:w-1/2">
      {label && (
        <label className="mb-2.5 block text-black dark:text-white">
          {label}
        </label>
      )}
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`${classname} w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`}
      />
    </div>
  );
}
