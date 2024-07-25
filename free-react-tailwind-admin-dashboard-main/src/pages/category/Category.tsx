import { useMemo, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';
import { useCategoryData } from '../../hooks/useQueryData';
import { ConvertHtmlToPlainText } from '../../utils/convertHtmlToPlainText';
import Table from '../../components/Tables/Table';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DeleteModal from '../../components/UI/DeleteModal';

export default function Category() {
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedField, setSelectedField] = useState('');
  const activePage = searchParams.get('page') ?? 1;
  const [pageSize, setPageSize] = useState('10');
  const { data, isLoading, isError } = useCategoryData();
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        accessorFn: (row) => row?.courseID,
        id: 'id',
        cell: (info) => {
          return <p>{info?.row?.index + 1 + ' .'}</p>;
        },
        header: () => <span>SN.</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.name,
        id: 'category',
        cell: (info) => {
          console.log('info', info);
          return (
            <div className="flex items-center gap-1">
              {info?.row?.original?.thumbnail?.url ? (
                <img
                  className="h-8 w-8 object-cover rounded-full"
                  src={info?.row?.original?.thumbnail?.url}
                  alt=""
                />
              ) : (
                <div className="min-h-8 min-w-8 rounded-full bg-gray-100"></div>
              )}
              <p className="flex items-center gap-1 line-clamp-1">
                {info?.row?.original?.title ?? '-'}
              </p>
            </div>
          );
        },
        header: () => <span>Category Name</span>,
        footer: (props) => props.column.id,
      },

      {
        accessorFn: (row) => row?.description,
        id: 'duration',
        cell: (info) => {
          return (
            <p className="flex items-center gap-1 min-w-[260px]">
              {ConvertHtmlToPlainText(
                info?.row?.original?.description?.slice(0, 50),
              )}
            </p>
          );
        },
        header: () => <span>Description</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.tags,
        id: 'noOfFields',
        cell: (info) => {
          return (
            <p className="flex items-center gap-1">
              {info?.row?.original?.tags?.length}
            </p>
          );
        },
        header: () => <span>No of Fields</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.brands,
        id: 'noOfFields',
        cell: (info) => {
          return (
            <p className="flex items-center gap-1">
              {info?.row?.original?.brands?.length}
            </p>
          );
        },
        header: () => <span>No of brands</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row,
        id: 'action',
        cell: (info) => {
          return (
            <div className="flex gap-2 text-base justify-center">
              <FiEdit2
                className="text-blue-600 cursor-pointer"
                onClick={() =>
                  navigate('/add-category', { state: info?.row?.original })
                }
              />
              <DeleteModal
                asChild
                desc={'Are you sure you wanna delete this category'}
                title={'Delete Category'}
                id={info?.row?.original?._id}
              >
                <FaRegTrashCan className="text-red-600 cursor-pointer" />
              </DeleteModal>
            </div>
          );
        },
        header: () => <span className="flex justify-center">Action</span>,
        footer: (props) => props.column.id,
      },
    ],
    [],
  );

  return (
    <div>
      <Breadcrumb pageName="Category" />
      <Table
        data={data?.data ?? []}
        columns={columns}
        isLoading={false}
        isError={false}
        totalEntries={122}
        showFooter
        containsActions
        containsCheckbox
        className="h-[calc(100vh-232px)]"
        pageSizeChangeHandler={(size) => setPageSize(size)}
        pageChangeHandler={(page) => {
          setSearchParams((searchParams) => {
            searchParams.set('page', page.toString());
            return searchParams;
          });
        }}
        pageSize={pageSize}
        currentPage={activePage as number}
      />
    </div>
  );
}
