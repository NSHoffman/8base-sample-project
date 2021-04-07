import React from 'react';
import { Table, Dropdown, Icon, Menu, useModal } from '@8base/boost';
import { useQuery } from 'react-apollo';

import { CUSTOMERS_LIST_QUERY } from '../../shared/graphql';

import { CustomerCreateDialog } from './CustomerCreateDialog';
import { CustomerDeleteDialog } from './CustomerDeleteDialog';
import { EMPTY_ARRAY } from '../../shared/constants';


export const CustomersTable = () => {
  const { openModal } = useModal();

  const { data, loading } = useQuery(CUSTOMERS_LIST_QUERY);
  const customers = data ? data.customersList.items : EMPTY_ARRAY;

  return (
    <Table>
      <Table.Header columns="repeat(4, 1fr) 60px">
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Orders</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Header>

      <Table.Body
        loading={ loading }
        data={ customers }
        action="Create Customer"
        onActionClick={() => openModal(CustomerCreateDialog.id)}
      >
        {
          (customer) => (
            <Table.BodyRow columns="repeat(4, 1fr) 60px" key={ customer.id }>
              <Table.BodyCell>
                { customer.user.firstName }
              </Table.BodyCell>
              <Table.BodyCell>
                { customer.user.lastName }
              </Table.BodyCell>
              <Table.BodyCell>
                { customer.user.email }
              </Table.BodyCell>
              <Table.BodyCell>
                { customer.orders.count }
              </Table.BodyCell>
              <Table.BodyCell>
                <Dropdown defaultOpen={ false }>
                  <Dropdown.Head>
                    <Icon name="More" color="LIGHT_GRAY2" />
                  </Dropdown.Head>
                  <Dropdown.Body pin="right">
                    {({ closeDropdown }) => (
                      <Menu>
                        <Menu.Item
                          onClick={() => {
                            openModal(CustomerDeleteDialog.id, { id: customer.id });
                            closeDropdown();
                          }}
                        >
                          Delete
                        </Menu.Item>
                      </Menu>
                    )}
                  </Dropdown.Body>
                </Dropdown>
              </Table.BodyCell>
            </Table.BodyRow>
          )
        }
      </Table.Body>
    </Table>
  );
};

