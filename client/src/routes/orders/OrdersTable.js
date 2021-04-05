import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import * as R from 'ramda';
import { TableBuilder, Dropdown, Icon, Menu, withModal } from '@8base/boost';
import { Query } from 'react-apollo';
import { DateTime } from 'luxon';

import { ORDERS_LIST_QUERY } from '../../shared/graphql';

import { OrderCreateDialog } from './OrderCreateDialog';
import { OrderDeleteDialog } from './OrderDeleteDialog';

const ORDERS_TABLE_COLUMNS = [
  { name: 'product', title: 'Product', sortEnable: false },
  { name: 'customer', title: 'Customer', sortEnable: false },
  { name: 'quantity', title: 'Quantity', sortEnable: false },
  { name: 'totalPrice', title: 'Total Price' },
  { name: 'createdAt', title: 'Purchase Date' },
  { name: 'actions', width: '60px', sortEnable: false },
];

class OrdersTable extends React.Component {
  onActionClick = () => {
    const { openModal } = this.props;
    openModal(OrderCreateDialog.id);
  };

  renderCell = (column, data) => {
    const { openModal } = this.props;
    let rendered = String(data[column.name]);

    switch (column.name) {
      case 'product': {
        rendered = R.pathOr('Unititled', ['product', 'title'], data);
        break;
      }
      case 'customer': {
        const g = path => R.pathOr('Unititled', [column.name, 'user', path], data);
        rendered = `${g('firstName')} ${g('lastName')}`;
        break;
      }
      case 'createdAt': {
        rendered = DateTime.fromISO(data[column.name]).toFormat('ff');
        break;
      }
      case 'actions': {
        rendered = (
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

        break;
      }
      default: {
        break;
      }
    }

    return rendered;
  };

  renderTable = ({ data, loading }) => {
    const { tableState, onChange } = this.props;

    const total = R.pathOr(null, ['ordersList', 'count'], data);
    const tableData = R.pathOr([], ['ordersList', 'items'], data);
    const finalTableState = R.assocPath(['pagination', 'total'], total, tableState);

    return (
      <TableBuilder
        columns={ORDERS_TABLE_COLUMNS}
        data={tableData}
        loading={loading}
        action="Create Order"
        onActionClick={this.onActionClick}
        tableState={finalTableState}
        onChange={onChange}
        renderCell={this.renderCell}
        withPagination
      />
    );
  };

  render() {
    const { tableState } = this.props;

    const skip = (tableState.pagination.page - 1) * tableState.pagination.pageSize;
    const first = tableState.pagination.pageSize;
    const orderBy = R.propOr([], 'sort', tableState).map(({ name, order }) => `${name}_${order}`);

    return (
      <Query query={ORDERS_LIST_QUERY} variables={{ orderBy, skip, first }}>
        {this.renderTable}
      </Query>
    );
  }
}

OrdersTable = compose(
  withModal,
  withStateHandlers({ tableState: { pagination: { page: 1, pageSize: 20 }}}, {
    onChange: ({ tableState }) => (value) => ({
      tableState: {
        ...tableState,
        ...value,
      },
    }),
  }),
)(OrdersTable);

export { OrdersTable };
