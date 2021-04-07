import React, { useReducer } from 'react';
import * as R from 'ramda';
import { TableBuilder, Dropdown, Icon, Menu, useModal } from '@8base/boost';
import { useQuery } from 'react-apollo';
import { DateTime } from 'luxon';

import { ORDERS_LIST_QUERY } from '../../shared/graphql';

import { OrderCreateDialog } from './OrderCreateDialog';
import { OrderDeleteDialog } from './OrderDeleteDialog';
import { EMPTY_ARRAY } from '../../shared/constants';


const INITIAL_TABLE_STATE = {
  pagination: {
    page: 1,
    pageSize: 20,
  },
};

const tableStateReducer = (state, action) => {
  switch (action.type) {
    case 'change': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const ORDERS_TABLE_COLUMNS = [
  { name: 'product', title: 'Product', sortEnable: false },
  { name: 'customer', title: 'Customer', sortEnable: false },
  { name: 'quantity', title: 'Quantity', sortEnable: false },
  { name: 'totalPrice', title: 'Total Price' },
  { name: 'createdAt', title: 'Purchase Date' },
  { name: 'actions', width: '60px', sortEnable: false },
];

export const OrdersTable = () => {
  const { openModal } = useModal(OrderCreateDialog.id);

  // Table state initialization
  const [tableState, dispatch] = useReducer(tableStateReducer, INITIAL_TABLE_STATE);
  const onChange = payload => dispatch({ type: 'change', payload });
  const onActionClick = () => openModal(OrderCreateDialog.id);

  // Query initialization and handling
  // Pagination settings
  const skip = (tableState.pagination.page - 1) * tableState.pagination.pageSize;
  const first = tableState.pagination.pageSize;
  const orderBy = R.propOr([], 'sort', tableState).map(({ name, order }) => `${name}_${order}`);

  const { data, loading } = useQuery(ORDERS_LIST_QUERY, {
    variables: { skip, first, orderBy },
  });
  const orders = data ? data.ordersList : EMPTY_ARRAY;

  // Query result management
  const tableData = orders.items || EMPTY_ARRAY;
  const totalOrders = orders.count;
  const finalTableState = R.assocPath(['pagination', 'total'], totalOrders, tableState);

  const renderCell = (column, data) => {
    switch (column.name) {
      case 'product': {
        return R.pathOr('Unititled', ['product', 'title'], data);
      }
      case 'customer': {
        const g = path => R.pathOr('Unititled', [column.name, 'user', path], data);
        return `${g('firstName')} ${g('lastName')}`;
      }
      case 'createdAt': {
        return DateTime.fromISO(data[column.name]).toFormat('ff');
      }
      case 'actions': {
        return (
          <Dropdown defaultOpen={false}>
            <Dropdown.Head>
              <Icon name="More" color="LIGHT_GRAY2" />
            </Dropdown.Head>
            <Dropdown.Body pin="right">
              {({ closeDropdown }) => (
                <Menu>
                  <Menu.Item
                    onClick={() => {
                      openModal(OrderDeleteDialog.id, { id: data.id });
                      closeDropdown();
                    }}
                  >
                    Delete
                  </Menu.Item>
                </Menu>
              )}
            </Dropdown.Body>
          </Dropdown>
        );
      }
      default:
        return String(data[column.name]);
    }
  };

  return (
    <TableBuilder
      columns={ORDERS_TABLE_COLUMNS}
      data={tableData}
      loading={loading}
      action="Create Order"
      onActionClick={onActionClick}
      tableState={finalTableState}
      onChange={onChange}
      renderCell={renderCell}
      withPagination
    />
  );
};
