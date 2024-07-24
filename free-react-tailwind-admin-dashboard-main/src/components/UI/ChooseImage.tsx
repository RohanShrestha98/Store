import { RxCross2 } from 'react-icons/rx';
import { useFileMutation } from '../../hooks/useMutateData';

export default function ChooseImage({
  setSelectedImage,
  selectedImage,
  defaultUrl,
}) {
  const fileMutation = useFileMutation();

  const handleFileUpload = async (e) => {
    console.log('e.target.files[0]', e.target.files[0]);
    const formData = await new FormData();
    formData.append('file', e.target.files[0]);
    try {
      const result = await fileMutation.mutateAsync(['post', '', formData]);
      setSelectedImage(result?.details);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[#344054] font-medium text-sm">Image</h1>
      <div className="flex items-center rounded-[4px]">
        <div className="w-full border-l justify-between border-t border-b border-stroke  h-10 rounded-l-[6px] flex items-center   px-4 text-sm text-gray-500 bg-white">
          {defaultUrl ?? selectedImage?.url ?? 'Select a image'}{' '}
          {(selectedImage?.url || defaultUrl) && (
            <RxCross2
              className="text-red-600"
              onClick={() => setSelectedImage()}
            />
          )}
        </div>
        <input
          id="chooseImg"
          onChange={(e) => handleFileUpload(e)}
          className="hidden"
          type="file"
        />
        <label
          htmlFor="chooseImg"
          className="whitespace-nowrap cursor-pointer text-sm text-white bg-blue-500 border-stroke border rounded-r-[6px]  h-10 flex items-center px-3 "
        >
          Browse File
        </label>
      </div>
    </div>
  );
}
