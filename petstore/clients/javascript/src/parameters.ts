// Licensed under the MIT License.

import { RequestParameters } from "@typespec/ts-http-runtime";
import {
  PetUpdate,
  PetCreate,
  CheckupUpdate,
  InsuranceUpdate,
  OwnerUpdate,
  OwnerCreate,
} from "./models.js";

export type PetsGetParameters = RequestParameters;

export interface PetsUpdateBodyParam {
  body: PetUpdate;
}

export type PetsUpdateParameters = PetsUpdateBodyParam & RequestParameters;
export type PetsDeleteParameters = RequestParameters;

export interface PetsCreateBodyParam {
  body: PetCreate;
}

export type PetsCreateParameters = PetsCreateBodyParam & RequestParameters;
export type PetsListParameters = RequestParameters;

export interface PetCheckupsCreateOrUpdateBodyParam {
  body: CheckupUpdate;
}

export type PetCheckupsCreateOrUpdateParameters =
  PetCheckupsCreateOrUpdateBodyParam & RequestParameters;
export type PetCheckupsListParameters = RequestParameters;
export type PetInsuranceGetParameters = RequestParameters;

export interface PetInsuranceUpdateBodyParam {
  body: InsuranceUpdate;
}

export type PetInsuranceUpdateParameters = PetInsuranceUpdateBodyParam &
  RequestParameters;
export type ToysGetParameters = RequestParameters;

export interface ToysListQueryParamProperties {
  nameFilter: string;
}

export interface ToysListQueryParam {
  queryParameters: ToysListQueryParamProperties;
}

export type ToysListParameters = ToysListQueryParam & RequestParameters;
export type ToyInsuranceGetParameters = RequestParameters;

export interface ToyInsuranceUpdateBodyParam {
  body: InsuranceUpdate;
}

export type ToyInsuranceUpdateParameters = ToyInsuranceUpdateBodyParam &
  RequestParameters;

export interface CheckupsCreateOrUpdateBodyParam {
  body: CheckupUpdate;
}

export type CheckupsCreateOrUpdateParameters = CheckupsCreateOrUpdateBodyParam &
  RequestParameters;
export type CheckupsListParameters = RequestParameters;
export type OwnersGetParameters = RequestParameters;

export interface OwnersUpdateBodyParam {
  body: OwnerUpdate;
}

export type OwnersUpdateParameters = OwnersUpdateBodyParam & RequestParameters;
export type OwnersDeleteParameters = RequestParameters;

export interface OwnersCreateBodyParam {
  body: OwnerCreate;
}

export type OwnersCreateParameters = OwnersCreateBodyParam & RequestParameters;
export type OwnersListParameters = RequestParameters;

export interface OwnerCheckupsCreateOrUpdateBodyParam {
  body: CheckupUpdate;
}

export type OwnerCheckupsCreateOrUpdateParameters =
  OwnerCheckupsCreateOrUpdateBodyParam & RequestParameters;
export type OwnerCheckupsListParameters = RequestParameters;
export type OwnerInsuranceGetParameters = RequestParameters;

export interface OwnerInsuranceUpdateBodyParam {
  body: InsuranceUpdate;
}

export type OwnerInsuranceUpdateParameters = OwnerInsuranceUpdateBodyParam &
  RequestParameters;
