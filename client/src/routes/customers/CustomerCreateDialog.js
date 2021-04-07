import React from 'react';
import { Form, Field } from '@8base/forms';
import { Dialog, Grid, Button, SelectField, useModal } from '@8base/boost';
import { useQuery, useMutation } from 'react-apollo';

import { USERS_LIST_QUERY, CUSTOMER_CREATE_MUTATION } from '../../shared/graphql';
import { EMPTY_ARRAY, TOAST_SUCCESS_MESSAGE } from '../../shared/constants';


const getUserOptions = users => {
  return users.map(user => ({
    value: user.id,
    label: `${user.firstName} ${user.lastName}`,
  }));
};
const CUSTOMER_CREATE_DIALOG_ID = 'CUSTOMER_CREATE_DIALOG_ID';


export const CustomerCreateDialog = () => {
  const { closeModal } = useModal(CUSTOMER_CREATE_DIALOG_ID);

  const { data, loading } = useQuery(USERS_LIST_QUERY);
  const users = data ? data.usersList.items : EMPTY_ARRAY;

  const [customerCreate] = useMutation(CUSTOMER_CREATE_MUTATION, {
    context: {
      [TOAST_SUCCESS_MESSAGE]: 'Customer successfully created',
    },
  });

  const onSubmit = async (data) => {
    await customerCreate({
      variables: { data },
      refetchQueries: ['CustomersList'],
    });
    closeModal(CUSTOMER_CREATE_DIALOG_ID);
  };

  const onClose = () => closeModal(CUSTOMER_CREATE_DIALOG_ID);

  const renderFormContent = ({ handleSubmit, submitting }) => (
    <form onSubmit={ handleSubmit }>
      <Dialog.Header title="New Customer" onClose={ onClose } />
      <Dialog.Body scrollable>
        <Grid.Layout gap="sm" stretch>
          <Grid.Box>
            <Field
              name="user"
              label="User"
              placeholder="Select a user"
              component={ SelectField }
              loading={ loading }
              options={ getUserOptions(users) }
              stretch
            />
          </Grid.Box>
        </Grid.Layout>
      </Dialog.Body>
      <Dialog.Footer>
        <Button color="neutral" variant="outlined" disabled={ submitting } onClick={ onClose }>Cancel</Button>
        <Button color="primary" type="submit" loading={ submitting }>Create Customer</Button>
      </Dialog.Footer>
    </form>
  );

  return (
    <Dialog id={ CUSTOMER_CREATE_DIALOG_ID } size="sm">
      <Form type="CREATE" tableSchemaName="Customers" onSubmit={ onSubmit }>
        { renderFormContent }
      </Form>
    </Dialog>
  );
};

CustomerCreateDialog.id = CUSTOMER_CREATE_DIALOG_ID;


