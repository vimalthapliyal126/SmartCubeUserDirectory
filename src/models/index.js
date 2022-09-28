// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PasEmployees } = initSchema(schema);

export {
  PasEmployees
};