import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PasEmployeesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PasEmployees {
  readonly id: string;
  readonly name: string;
  readonly employeecode?: string | null;
  readonly designation?: string | null;
  readonly sector?: string | null;
  readonly reportingmanager?: string | null;
  readonly functionhead?: string | null;
  readonly teamhead?: string | null;
  readonly hrbp?: string | null;
  readonly ext?: number | null;
  readonly mobile?: string | null;
  readonly image?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PasEmployees, PasEmployeesMetaData>);
  static copyOf(source: PasEmployees, mutator: (draft: MutableModel<PasEmployees, PasEmployeesMetaData>) => MutableModel<PasEmployees, PasEmployeesMetaData> | void): PasEmployees;
}