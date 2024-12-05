// Licensed under the MIT License.

import { HttpResponse } from "@typespec/ts-http-runtime";
import {
  PetOutput,
  PetStoreErrorOutput,
  PetCollectionWithNextLinkOutput,
  CheckupOutput,
  CheckupCollectionWithNextLinkOutput,
  InsuranceOutput,
  ToyOutput,
  ToyCollectionWithNextLinkOutput,
  OwnerOutput,
  OwnerCollectionWithNextLinkOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface PetsGet200Response extends HttpResponse {
  status: "200";
  body: PetOutput;
}

export interface PetsGetDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface PetsUpdate200Response extends HttpResponse {
  status: "200";
  body: PetOutput;
}

export interface PetsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** Resource deleted successfully. */
export interface PetsDelete200Response extends HttpResponse {
  status: "200";
}

export interface PetsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface PetsCreate200Response extends HttpResponse {
  status: "200";
  body: PetOutput;
}

/** Resource create operation completed successfully. */
export interface PetsCreate201Response extends HttpResponse {
  status: "201";
  body: PetOutput;
}

export interface PetsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface PetsList200Response extends HttpResponse {
  status: "200";
  body: PetCollectionWithNextLinkOutput;
}

export interface PetsListDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface PetCheckupsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CheckupOutput;
}

/** Resource create operation completed successfully. */
export interface PetCheckupsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CheckupOutput;
}

export interface PetCheckupsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface PetCheckupsList200Response extends HttpResponse {
  status: "200";
  body: CheckupCollectionWithNextLinkOutput;
}

export interface PetCheckupsListDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface PetInsuranceGet200Response extends HttpResponse {
  status: "200";
  body: InsuranceOutput;
}

export interface PetInsuranceGetDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface PetInsuranceUpdate200Response extends HttpResponse {
  status: "200";
  body: InsuranceOutput;
}

export interface PetInsuranceUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface ToysGet200Response extends HttpResponse {
  status: "200";
  body: ToyOutput;
}

export interface ToysGetDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface ToysList200Response extends HttpResponse {
  status: "200";
  body: ToyCollectionWithNextLinkOutput;
}

export interface ToysListDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface ToyInsuranceGet200Response extends HttpResponse {
  status: "200";
  body: InsuranceOutput;
}

export interface ToyInsuranceGetDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface ToyInsuranceUpdate200Response extends HttpResponse {
  status: "200";
  body: InsuranceOutput;
}

export interface ToyInsuranceUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface CheckupsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CheckupOutput;
}

/** Resource create operation completed successfully. */
export interface CheckupsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CheckupOutput;
}

export interface CheckupsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface CheckupsList200Response extends HttpResponse {
  status: "200";
  body: CheckupCollectionWithNextLinkOutput;
}

export interface CheckupsListDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnersGet200Response extends HttpResponse {
  status: "200";
  body: OwnerOutput;
}

export interface OwnersGetDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnersUpdate200Response extends HttpResponse {
  status: "200";
  body: OwnerOutput;
}

export interface OwnersUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** Resource deleted successfully. */
export interface OwnersDelete200Response extends HttpResponse {
  status: "200";
}

export interface OwnersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnersCreate200Response extends HttpResponse {
  status: "200";
  body: OwnerOutput;
}

/** Resource create operation completed successfully. */
export interface OwnersCreate201Response extends HttpResponse {
  status: "201";
  body: OwnerOutput;
}

export interface OwnersCreateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnersList200Response extends HttpResponse {
  status: "200";
  body: OwnerCollectionWithNextLinkOutput;
}

export interface OwnersListDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnerCheckupsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CheckupOutput;
}

/** Resource create operation completed successfully. */
export interface OwnerCheckupsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CheckupOutput;
}

export interface OwnerCheckupsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnerCheckupsList200Response extends HttpResponse {
  status: "200";
  body: CheckupCollectionWithNextLinkOutput;
}

export interface OwnerCheckupsListDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnerInsuranceGet200Response extends HttpResponse {
  status: "200";
  body: InsuranceOutput;
}

export interface OwnerInsuranceGetDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}

/** The request has succeeded. */
export interface OwnerInsuranceUpdate200Response extends HttpResponse {
  status: "200";
  body: InsuranceOutput;
}

export interface OwnerInsuranceUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: PetStoreErrorOutput;
}
