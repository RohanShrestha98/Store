import { useEffect, useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Table from '../../components/Tables/Table';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DeleteModal from '../../components/UI/DeleteModal';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FiEdit2 } from 'react-icons/fi';
import { useProductData } from '../../hooks/useQueryData';

const columnHelper = createColumnHelper();

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = searchParams.get('page') ?? 1;
  const [pageSize, setPageSize] = useState(10);

  const totalEntries = 120;

  const { data, isLoading, isError } = useProductData();
  const navigate = useNavigate();

  console.log('data', data);
  const columns = useMemo(
    () => [
      // {
      //   accessorFn: (row) => row?.courseID,
      //   id: 'id',
      //   cell: (info) => {
      //     return <p>{info?.row?.index + 1 + ' .'}</p>;
      //   },
      //   header: () => <span>SN.</span>,
      //   footer: (props) => props.column.id,
      // },
      {
        accessorFn: (row) => row?.name,
        id: 'name',
        cell: (info, index) => {
          console.log('info', info);
          return (
            <div className="flex items-center gap-1">
              {/* {info?.row?.original?.thumbnail?.url ? (
                <img
                  className="h-8 w-8 object-cover rounded-full"
                  src={info?.row?.original?.thumbnail?.url}
                  alt=""
                />
              ) : (
                <div className="min-h-8 min-w-8 rounded-full bg-gray-100"></div>
              )} */}
              <p className="flex items-center gap-1 line-clamp-1">
                {info?.row?.index + 1 + '.'} {info?.row?.original?.name ?? '-'}
              </p>
            </div>
          );
        },
        header: () => <span>Product Name</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.tags,
        id: 'category',
        cell: (info) => {
          return (
            <p className="flex items-center gap-1">
              {info?.row?.original?.category}
            </p>
          );
        },
        header: () => <span>Category</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.brand,
        id: 'brand',
        header: () => <span>Brand</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.barcode_number,
        id: 'barcode_number',
        header: () => <span>Barcode</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.quantity,
        id: 'quantity',
        header: () => <span>Quantity</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.cost_price,
        id: 'cost_price',
        cell: (info) => {
          return (
            <p className="flex items-center gap-1">
              $ {info?.row?.original?.cost_price}
            </p>
          );
        },
        header: () => <span>Cost price</span>,
        footer: (props) => props.column.id,
      },
      {
        accessorFn: (row) => row?.selling_price,
        id: 'selling_price',
        cell: (info) => {
          return (
            <p className="flex items-center gap-1">
              $ {info?.row?.original?.selling_price}
            </p>
          );
        },
        header: () => <span>Selling price</span>,
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
                  navigate('/add-product', { state: info?.row?.original })
                }
              />
              <DeleteModal
                asChild
                desc={'Are you sure you wanna delete this product'}
                title={'Delete product'}
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
    <>
      <Breadcrumb pageName="Product" />

      <Table
        data={data?.data ?? []}
        columns={columns}
        isLoading={false}
        isError={false}
        totalEntries={totalEntries}
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
    </>
  );
}
