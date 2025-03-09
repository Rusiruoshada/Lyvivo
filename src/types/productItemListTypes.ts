import { Key, FixedType, CellEllipsisType, AlignType, RowScopeType } from 'rc-table/lib/interface';
import type * as React from 'react';

export interface DataType {
  key?: string;
  productName: string[];
  price: number;
  category: string;
  tags?: string[];
  description?: string;
  stock: number;
}

interface ColumnCommonProps {
  title?: React.ReactNode;
  key?: Key;
  className?: string;
  hidden?: boolean;
  fixed?: FixedType;
  ellipsis?: CellEllipsisType;
  align?: AlignType;
  rowScope?: RowScopeType;
  colSpan?: number;
  rowSpan?: number;
  dataIndex?: string | number | readonly (string | number)[];
  filterSearch?: any;
  width?: string;
  render?: any;
  filters?: { text: string, value: string }[];
  onFilter?: any;
  sorter?: any;
}

export interface ColumnDataTypes {
  productName: ColumnCommonProps;
  category: ColumnCommonProps;
  price: ColumnCommonProps;
  stock: ColumnCommonProps;
  status: ColumnCommonProps;
  edit: ColumnCommonProps;
  delete: ColumnCommonProps;
}