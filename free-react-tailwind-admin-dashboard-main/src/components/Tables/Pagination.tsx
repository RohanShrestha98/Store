import ReactPaginate from 'react-paginate';
import { ChevronLeftSvg, ChevronRightSvg } from '../../icons/AllSvgs';

interface Props {
  totalPageCount: number;
  pageChangeHandler: (selected: number) => void;
  currentPage?: number;
  isVariant?: boolean;
  isHospital?: boolean;
}

export default function Pagination({
  totalPageCount,
  pageChangeHandler,
  currentPage = 1,
  isHospital = false,
}: Props) {
  return (
    <ReactPaginate
      pageCount={totalPageCount}
      forcePage={currentPage - 1}
      onPageChange={({ selected }) => pageChangeHandler(selected + 1)}
      previousLabel={<ChevronLeftSvg className="h-4" />}
      nextLabel={<ChevronRightSvg className="h-4" />}
      containerClassName="flex gap-1 text-[15px] font-medium"
      pageLinkClassName="rounded w-6 h-6 flex items-center justify-center hover:bg-primaryHover"
      activeLinkClassName={`${
        isHospital ? 'btn-subdomain' : 'btn-primary'
      } hover:bg-primaryLight`}
      breakLinkClassName="rounded w-6 h-6 flex justify-center hover:bg-primaryHover"
      nextLinkClassName="rounded w-6 h-6 flex items-center justify-center hover:bg-primaryHover"
      previousLinkClassName="rounded w-6 h-6 flex items-center justify-center hover:bg-primaryHover"
      disabledLinkClassName="pointer-events-none text-grayDisabled"
    />
  );
}
