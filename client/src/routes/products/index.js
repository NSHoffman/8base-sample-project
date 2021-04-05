import React from 'react';
import { Card, Heading } from '@8base/boost';

import { ProductCreateDialog } from './ProductCreateDialog';
import { ProductUpdateDialog } from './ProductUpdateDialog';
import { ProductDeleteDialog } from './ProductDeleteDialog';
import { ProductsTable } from './ProductsTable';

const Products = () => (
  <Card padding="md" stretch>
    <Card.Header>
      <Heading type="h4" text="Products" />
    </Card.Header>

    <ProductCreateDialog />
    <ProductUpdateDialog />
    <ProductDeleteDialog />

    <Card.Body padding="none" stretch scrollable>
      <ProductsTable />
    </Card.Body>
  </Card>
);

export { Products };
