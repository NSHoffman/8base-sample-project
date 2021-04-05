import React from 'react';
import { compose } from 'recompose';
import { Table, Dropdown, Icon, Menu, withModal } from '@8base/boost';
import { graphql } from 'react-apollo';

import { PRODUCTS_LIST_QUERY } from '../../shared/graphql';

import { ProductThumbnail } from './ProductThumbnail';
import { ProductCreateDialog } from './ProductCreateDialog';
import { ProductDeleteDialog } from './ProductDeleteDialog';
import { ProductUpdateDialog } from './ProductUpdateDialog';

let ProductsTable = ({ products, openModal, closeModal }) => (
  <Table>
    <Table.Header columns="repeat(5, 1fr) 60px">
      <Table.HeaderCell>Image</Table.HeaderCell>
      <Table.HeaderCell>Product Title</Table.HeaderCell>
      <Table.HeaderCell>Price</Table.HeaderCell>
      <Table.HeaderCell>Available Quantity</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell />
    </Table.Header>

    <Table.Body
      loading={products.loading}
      data={products}
      action="Create Product"
      onActionClick={() => openModal(ProductCreateDialog.id)}
    >
      {product => (
        <Table.BodyRow columns="repeat(5, 1fr) 60px" key={product.id}>
          <Table.BodyCell>
            <ProductThumbnail src={product.image && product.image.downloadUrl} query={product.title} />
          </Table.BodyCell>
          <Table.BodyCell>{product.title}</Table.BodyCell>
          <Table.BodyCell>{product.price}</Table.BodyCell>
          <Table.BodyCell>{product.quantity}</Table.BodyCell>
          <Table.BodyCell>{product.status}</Table.BodyCell>
          <Table.BodyCell>
            <Dropdown defaultOpen={false}>
              <Dropdown.Head>
                <Icon name="More" color="LIGHT_GRAY2" />
              </Dropdown.Head>

              <Dropdown.Body pin="right">
                {({ closeDropdown }) => (
                  <Menu>
                    <Menu.Item
                      onClick={() => {
                        openModal(ProductUpdateDialog.id, { initialValues: product });
                        closeDropdown();
                      }}
                    >
                      Update
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => {
                        openModal(ProductDeleteDialog.id, { id: product.id });
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
      )}
    </Table.Body>
  </Table>
);

ProductsTable = compose(
  withModal,
  graphql(PRODUCTS_LIST_QUERY, {
    props: ({ data: { productsList: { items } = {}}}) => {
      return {
        products: items || [],
      };
    },
  })
)(ProductsTable);

export { ProductsTable };
