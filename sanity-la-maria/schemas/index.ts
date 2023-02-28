import product from './product';
import banner from './banner';
import { createSchema } from 'sanity';

export const schemaTypes = [product, banner];

export default createSchema({
  name: 'default',
  types: schemaTypes,
})
