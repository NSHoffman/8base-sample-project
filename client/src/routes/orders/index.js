import React from 'react';
import { Card, Heading } from '@8base/boost';

import { OrderCreateDialog } from './OrderCreateDialog';
import { OrderDeleteDialog } from './OrderDeleteDialog';
import { OrdersTable } from './OrdersTable';

export const Orders = () => (
  <Card padding="md" stretch>
    <Card.Header>
      <Heading type="h4" text="Orders" />
    </Card.Header>

    <OrderCreateDialog />
    <OrderDeleteDialog />

    <Card.Body padding="none" stretch scrollable>
      <OrdersTable />
    </Card.Body>
  </Card>
);
