import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog';
// import Button from '@/ui/Button';
import { useCategoryMutation } from '../../hooks/useMutateData';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from './Button';

export default function DeleteModal({ asChild, children, title, desc, id }) {
  const [open, setOpen] = useState(false);
  const categoryMutation = useCategoryMutation();

  const location = useLocation();
  const deleteMutation =
    location?.pathname == '/category' ? categoryMutation : categoryMutation;

  const handleDelete = async () => {
    try {
      await deleteMutation.mutateAsync(['delete', `delete/${id}/`]);
      setOpen(false);
      location?.pathname == '/order-product'
        ? toast.success('Cancel order successfully')
        : location?.pathname == '/category'
        ? toast.success('Category deleted successfully')
        : toast.success('Product Deleted successfully');
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
      <DialogContent className="max-w-[325px]  min-w-[300px] bg-[#FAFAFA]">
        <DialogTitle className="text-[#22244D] font-medium text-base">
          {title}
        </DialogTitle>
        <div>
          <div>{desc}</div>
          <div className="grid grid-cols-2 w-full mt-10 gap-2">
            <Button buttonName={'Cancel'} />
            <Button
              buttonName="Confirm"
              handleButtonClick={() => {
                handleDelete();
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
