import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from 'src/components/ui/button';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from 'src/components/ui/table';

const data: ICartItem[] = [
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 13,
    image: '/bowl-cashew.png'
  },
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 14,
    image: '/bowl-cashew.png'
  },
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 15,
    image: '/bowl-cashew.png'
  },
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 16,
    image: '/bowl-cashew.png'
  }
];

export type ICartItem = {
  id: string;
  image: string;
  name: string;
  quantity: number;
  price: number;
};

export const columns: ColumnDef<ICartItem>[] = [
  {
    accessorKey: 'image',
    header: 'Sản phẩm',
    cell: ({ row }) => {
      return (
        <div className='capitalize flex flex-row items-center gap-2'>
          <img className='w-24 h-24' src={row.getValue('image')} alt='product-image' />
          <p>{row.original.name}</p>
        </div>
      );
    }
  },
  {
    accessorKey: 'price',
    header: 'Giá',
    cell: ({ row }) => <div className='capitalize text-center'>{row.getValue('price')}</div>
  },
  {
    accessorKey: 'quantity',
    header: 'Số lượng',
    cell: ({ row }) => <div className='capitalize text-center'>{row.getValue('quantity')}</div>
  },
  {
    accessorKey: 'subtotal',
    header: () => <div className='text-right'>Tổng giá trị</div>,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('price'));
      const quantity = parseFloat(row.getValue('quantity'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price * quantity);

      return <div className='text-right font-medium'>{formatted}</div>;
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Button variant='ghost' className='py-0 px-2 rounded-full'>
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 23.5C18.0748 23.5 23 18.5748 23 12.5C23 6.42525 18.0748 1.5 12 1.5C5.92525 1.5 1 6.42525 1 12.5C1 18.5748 5.92525 23.5 12 23.5Z'
              stroke='#CCCCCC'
              strokeMiterlimit='10'
            />
            <path
              d='M16 8.5L8 16.5'
              stroke='#666666'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 16.5L8 8.5'
              stroke='#666666'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Button>
      );
    }
  }
];

const CartDataTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });

  return (
    <div className='w-full'>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CartDataTable;
