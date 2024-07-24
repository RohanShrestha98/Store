import Pagination from './Pagination';

interface Props {
  totalEntries: number;
  pageSize: number;
  pageSizeChangeHandler: (selected: number) => void;
  pageChangeHandler: (selected: number) => void;
  currentPage?: number;
}

export default function TableFooter({
  totalEntries,
  pageSize,
  pageSizeChangeHandler,
  pageChangeHandler,
  currentPage = 1,
}: Props) {
  const totalPageCount = Math.ceil(totalEntries / pageSize);

  return (
    <div className="flex items-center justify-between text-sm font-medium">
      <span className="text-grayText text-xs">
        Showing {(currentPage - 1) * pageSize + 1} to{' '}
        {Math.min(pageSize * currentPage, totalEntries)} of {totalEntries}{' '}
        Entries
      </span>

      <div className="flex items-center gap-4">
        <span className="text-grayText text-xs">Items per page</span>
        {/* <Select
          options={["10", "20", "30", "40", "50"]}
          value={pageSize.toString()}
          onValueChange={(value) => pageSizeChangeHandler(Number(value))}
          triggerClassName=" text-xs "
        /> */}
        <Pagination
          totalPageCount={totalPageCount}
          pageChangeHandler={pageChangeHandler}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
