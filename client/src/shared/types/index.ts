import { Product, ProductListResponse } from './generated/graphql';
import { Config } from 'final-form';

export type SubmitHandler = Config['onSubmit'];

export interface ProductsList {
  productsList: ProductListResponse;
};

export interface ProductDeleteArgs {
  id: string;
};

export interface ProductUpdateArgs {
  initialValues: Required<Partial<Product>>;
};

export interface ArgsWithProps<A = {}> {
  args: A;
  [key: string]: any;
};

export * from './generated/graphql';