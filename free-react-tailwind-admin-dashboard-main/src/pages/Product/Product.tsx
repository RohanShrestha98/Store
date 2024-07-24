import { useEffect, useMemo, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { useSearchParams } from 'react-router-dom';
import Table from '../../components/Tables/Table';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const columnHelper = createColumnHelper();

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = searchParams.get('page') ?? 1;
  const [pageSize, setPageSize] = useState(10);
  const data = [
    {
      title: 'Hello',
      value: 'world',
    },
  ];

  const [CommunicationLogsData, setCommunicationLogsData] = useState(data);

  const totalEntries = 120;

  const columns = useMemo(
    () => [
      columnHelper.accessor('create_date', {
        header: 'Date',
      }),
      columnHelper.accessor('create_by', {
        header: 'Created By',
      }),
      columnHelper.accessor('content_type', {
        header: 'Content Type',
      }),
      columnHelper.accessor('description', {
        header: 'Description',
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => <div></div>,
      }),
    ],
    [data],
  );

  return (
    <>
      <Breadcrumb pageName="Product" />

      <Table
        data={CommunicationLogsData}
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
