import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useReactTable,
  flexRender,
  SortingState,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  ColumnResizeMode,
} from '@tanstack/react-table';
import Error from '../Shared/Error';
import EmptySvg from '../../assets/empty.svg';
import LoadingSvg from '../../assets/loading.svg';
import { SortSvg, ChevronDownSvg, ChevronUpSvg } from '../../icons/AllSvgs';
import TableFooter from './TableFooter';

interface Props<T extends { idx: string }> {
  data: T[];
  columns: ColumnDef<T, any>[];
  isLoading: boolean;
  isError: boolean;
  pageSizeChangeHandler?: (selected: number) => void;
  pageChangeHandler?: (selected: number) => void;
  className?: string;
  totalEntries: number | undefined;
  allowHover?: boolean;
  allowRow?: boolean;
  showFooter?: boolean;
  containsCheckbox?: boolean;
  containsActions?: boolean;
  pageSize?: number;
  currentPage?: number;
  background?: boolean;
  stateData?: {};
  setStateData?: (data: any) => void;
  clearSelection?: boolean;
  setClearSelection?: (data: boolean) => void;
}

export default function Table<T extends { idx: string }>({
  data,
  columns,
  isLoading,
  isError,
  totalEntries,
  pageSizeChangeHandler = () => {},
  pageChangeHandler = () => {},
  className = '',
  allowHover = false,
  allowRow = false,
  showFooter = false,
  containsActions = false,
  pageSize = 10,
  currentPage = 1,
  stateData = 'null',
  setStateData = () => {},
  clearSelection = false,
  setClearSelection,
  background = false,
}: Props<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});

  const [columnResizeMode, setColumnResizeMode] =
    useState<ColumnResizeMode>('onChange');

  const navigate = useNavigate();

  const table = useReactTable({
    data,
    columns,
    columnResizeMode,
    enableSorting: !isError,
    manualPagination: true,
    state: { sorting, rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  useEffect(() => {
    const selectedData = table
      .getSelectedRowModel()
      .flatRows.map((row) => row.original);
    setStateData && setStateData(selectedData);
  }, [table?.getSelectedRowModel().flatRows]);

  useEffect(() => {
    if (clearSelection) {
      table.resetRowSelection();
      setClearSelection && setClearSelection(false);
    }
  }, [clearSelection]);

  return (
    <div className="">
      {!isLoading && !isError && totalEntries && showFooter ? (
        <TableFooter
          totalEntries={totalEntries}
          pageSize={pageSize}
          pageSizeChangeHandler={pageSizeChangeHandler}
          pageChangeHandler={pageChangeHandler}
          currentPage={currentPage}
        />
      ) : null}
      <div className="w-full overflow-y-auto">
        <table className="w-full min-w-max mt-2">
          <thead
            className={`sticky top-0 z-10 border-b border-stroke ${
              background ? 'bg-gray-300' : 'bg-stroke'
            }`}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`group text-[14px] w-10 text-black py-2 px-4 text-start font-semibold last:pr-4 ${
                      header.column.getCanSort()
                        ? 'cursor-pointer select-none'
                        : ''
                    } ${containsActions ? 'last:w-1 ' : ''}`}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{
                      width: header.getSize(),
                    }}
                  >
                    <div className="flex items-center whitespace-nowrap justify-between">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      <div className="flex items-center gap-x-2">
                        {{
                          asc: <ChevronUpSvg className="h-5 text-primary" />,
                          desc: <ChevronDownSvg className="h-5 text-primary" />,
                        }[header.column.getIsSorted() as string] ??
                          (header.column.getCanSort() ? (
                            <SortSvg className="invisible h-5 group-hover:visible" />
                          ) : null)}
                        <div
                          {...{
                            onMouseDown: header.getResizeHandler(),
                            onTouchStart: header.getResizeHandler(),
                            className: `w-0.5 mr-2.5 bg-gray-500 cursor-col-resize select-none resizer touch-none invisible h-5 group-hover:visible ${
                              header.column.getIsResizing()
                                ? ' bg-black opacity-100'
                                : ''
                            }`,
                            style: {
                              transform:
                                columnResizeMode === 'onEnd' &&
                                header.column.getIsResizing()
                                  ? `translateX(${
                                      table.getState().columnSizingInfo
                                        .deltaOffset
                                    }px)`
                                  : '',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {isLoading || isError || totalEntries === 0 ? null : (
            <tbody className="text-[14px]">
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={`border-y border-stroke ${
                    row.getIsSelected()
                      ? 'bg-primarySelect'
                      : allowHover || allowRow
                      ? 'hover:bg-primaryHover'
                      : ''
                  } ${
                    allowHover || allowRow ? 'cursor-pointer' : 'cursor-default'
                  } ${
                    background && row.index % 2 !== 0
                      ? 'bg-cyan-100'
                      : 'bg-white'
                  }`}
                  onClick={() => {
                    allowHover &&
                      navigate(row?.original?.idx, { state: stateData });
                    allowRow &&
                      navigate(row?.original?.idx, { state: row?.original });
                  }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={`py-1 px-4 text-gray-600 font-normal last:pr-4`}
                    >
                      <span className="flex items-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {isLoading ? (
        <img
          src={LoadingSvg}
          className="mx-auto mt-4 h-28"
          alt="Loading Spinner"
        />
      ) : isError ? (
        <Error />
      ) : totalEntries === 0 ? (
        <div className="mt-12 flex flex-col items-center gap-4">
          <img src={EmptySvg} alt="Empty" className="h-56" />
          <span className="font-medium">No data available for this table</span>
        </div>
      ) : null}
    </div>
  );
}
