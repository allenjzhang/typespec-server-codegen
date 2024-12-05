// Licensed under the MIT License.

import {
  PetsGetParameters,
  PetsUpdateParameters,
  PetsDeleteParameters,
  PetsCreateParameters,
  PetsListParameters,
  PetCheckupsCreateOrUpdateParameters,
  PetCheckupsListParameters,
  PetInsuranceGetParameters,
  PetInsuranceUpdateParameters,
  ToysGetParameters,
  ToysListParameters,
  ToyInsuranceGetParameters,
  ToyInsuranceUpdateParameters,
  CheckupsCreateOrUpdateParameters,
  CheckupsListParameters,
  OwnersGetParameters,
  OwnersUpdateParameters,
  OwnersDeleteParameters,
  OwnersCreateParameters,
  OwnersListParameters,
  OwnerCheckupsCreateOrUpdateParameters,
  OwnerCheckupsListParameters,
  OwnerInsuranceGetParameters,
  OwnerInsuranceUpdateParameters,
} from "./parameters.js";
import {
  PetsGet200Response,
  PetsGetDefaultResponse,
  PetsUpdate200Response,
  PetsUpdateDefaultResponse,
  PetsDelete200Response,
  PetsDeleteDefaultResponse,
  PetsCreate200Response,
  PetsCreate201Response,
  PetsCreateDefaultResponse,
  PetsList200Response,
  PetsListDefaultResponse,
  PetCheckupsCreateOrUpdate200Response,
  PetCheckupsCreateOrUpdate201Response,
  PetCheckupsCreateOrUpdateDefaultResponse,
  PetCheckupsList200Response,
  PetCheckupsListDefaultResponse,
  PetInsuranceGet200Response,
  PetInsuranceGetDefaultResponse,
  PetInsuranceUpdate200Response,
  PetInsuranceUpdateDefaultResponse,
  ToysGet200Response,
  ToysGetDefaultResponse,
  ToysList200Response,
  ToysListDefaultResponse,
  ToyInsuranceGet200Response,
  ToyInsuranceGetDefaultResponse,
  ToyInsuranceUpdate200Response,
  ToyInsuranceUpdateDefaultResponse,
  CheckupsCreateOrUpdate200Response,
  CheckupsCreateOrUpdate201Response,
  CheckupsCreateOrUpdateDefaultResponse,
  CheckupsList200Response,
  CheckupsListDefaultResponse,
  OwnersGet200Response,
  OwnersGetDefaultResponse,
  OwnersUpdate200Response,
  OwnersUpdateDefaultResponse,
  OwnersDelete200Response,
  OwnersDeleteDefaultResponse,
  OwnersCreate200Response,
  OwnersCreate201Response,
  OwnersCreateDefaultResponse,
  OwnersList200Response,
  OwnersListDefaultResponse,
  OwnerCheckupsCreateOrUpdate200Response,
  OwnerCheckupsCreateOrUpdate201Response,
  OwnerCheckupsCreateOrUpdateDefaultResponse,
  OwnerCheckupsList200Response,
  OwnerCheckupsListDefaultResponse,
  OwnerInsuranceGet200Response,
  OwnerInsuranceGetDefaultResponse,
  OwnerInsuranceUpdate200Response,
  OwnerInsuranceUpdateDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@typespec/ts-http-runtime";

export interface PetsGet {
  /** Gets an instance of the resource. */
  get(
    options?: PetsGetParameters,
  ): StreamableMethod<PetsGet200Response | PetsGetDefaultResponse>;
  /** Updates an existing instance of the resource. */
  patch(
    options: PetsUpdateParameters,
  ): StreamableMethod<PetsUpdate200Response | PetsUpdateDefaultResponse>;
  /** Deletes an existing instance of the resource. */
  delete(
    options?: PetsDeleteParameters,
  ): StreamableMethod<PetsDelete200Response | PetsDeleteDefaultResponse>;
}

export interface PetsCreate {
  /** Creates a new instance of the resource. */
  post(
    options: PetsCreateParameters,
  ): StreamableMethod<
    PetsCreate200Response | PetsCreate201Response | PetsCreateDefaultResponse
  >;
  /** Lists all instances of the resource. */
  get(
    options?: PetsListParameters,
  ): StreamableMethod<PetsList200Response | PetsListDefaultResponse>;
}

export interface PetCheckupsCreateOrUpdate {
  /** Creates or update an instance of the extension resource. */
  patch(
    options: PetCheckupsCreateOrUpdateParameters,
  ): StreamableMethod<
    | PetCheckupsCreateOrUpdate200Response
    | PetCheckupsCreateOrUpdate201Response
    | PetCheckupsCreateOrUpdateDefaultResponse
  >;
}

export interface PetCheckupsList {
  /** Lists all instances of the extension resource. */
  get(
    options?: PetCheckupsListParameters,
  ): StreamableMethod<
    PetCheckupsList200Response | PetCheckupsListDefaultResponse
  >;
}

export interface PetInsuranceGet {
  /** Gets the singleton resource. */
  get(
    options?: PetInsuranceGetParameters,
  ): StreamableMethod<
    PetInsuranceGet200Response | PetInsuranceGetDefaultResponse
  >;
  /** Updates the singleton resource. */
  patch(
    options: PetInsuranceUpdateParameters,
  ): StreamableMethod<
    PetInsuranceUpdate200Response | PetInsuranceUpdateDefaultResponse
  >;
}

export interface ToysGet {
  /** Gets an instance of the resource. */
  get(
    options?: ToysGetParameters,
  ): StreamableMethod<ToysGet200Response | ToysGetDefaultResponse>;
}

export interface ToysList {
  get(
    options: ToysListParameters,
  ): StreamableMethod<ToysList200Response | ToysListDefaultResponse>;
}

export interface ToyInsuranceGet {
  /** Gets the singleton resource. */
  get(
    options?: ToyInsuranceGetParameters,
  ): StreamableMethod<
    ToyInsuranceGet200Response | ToyInsuranceGetDefaultResponse
  >;
  /** Updates the singleton resource. */
  patch(
    options: ToyInsuranceUpdateParameters,
  ): StreamableMethod<
    ToyInsuranceUpdate200Response | ToyInsuranceUpdateDefaultResponse
  >;
}

export interface CheckupsCreateOrUpdate {
  /** Creates or update an instance of the resource. */
  patch(
    options: CheckupsCreateOrUpdateParameters,
  ): StreamableMethod<
    | CheckupsCreateOrUpdate200Response
    | CheckupsCreateOrUpdate201Response
    | CheckupsCreateOrUpdateDefaultResponse
  >;
}

export interface CheckupsList {
  /** Lists all instances of the resource. */
  get(
    options?: CheckupsListParameters,
  ): StreamableMethod<CheckupsList200Response | CheckupsListDefaultResponse>;
}

export interface OwnersGet {
  /** Gets an instance of the resource. */
  get(
    options?: OwnersGetParameters,
  ): StreamableMethod<OwnersGet200Response | OwnersGetDefaultResponse>;
  /** Updates an existing instance of the resource. */
  patch(
    options: OwnersUpdateParameters,
  ): StreamableMethod<OwnersUpdate200Response | OwnersUpdateDefaultResponse>;
  /** Deletes an existing instance of the resource. */
  delete(
    options?: OwnersDeleteParameters,
  ): StreamableMethod<OwnersDelete200Response | OwnersDeleteDefaultResponse>;
}

export interface OwnersCreate {
  /** Creates a new instance of the resource. */
  post(
    options: OwnersCreateParameters,
  ): StreamableMethod<
    | OwnersCreate200Response
    | OwnersCreate201Response
    | OwnersCreateDefaultResponse
  >;
  /** Lists all instances of the resource. */
  get(
    options?: OwnersListParameters,
  ): StreamableMethod<OwnersList200Response | OwnersListDefaultResponse>;
}

export interface OwnerCheckupsCreateOrUpdate {
  /** Creates or update an instance of the extension resource. */
  patch(
    options: OwnerCheckupsCreateOrUpdateParameters,
  ): StreamableMethod<
    | OwnerCheckupsCreateOrUpdate200Response
    | OwnerCheckupsCreateOrUpdate201Response
    | OwnerCheckupsCreateOrUpdateDefaultResponse
  >;
}

export interface OwnerCheckupsList {
  /** Lists all instances of the extension resource. */
  get(
    options?: OwnerCheckupsListParameters,
  ): StreamableMethod<
    OwnerCheckupsList200Response | OwnerCheckupsListDefaultResponse
  >;
}

export interface OwnerInsuranceGet {
  /** Gets the singleton resource. */
  get(
    options?: OwnerInsuranceGetParameters,
  ): StreamableMethod<
    OwnerInsuranceGet200Response | OwnerInsuranceGetDefaultResponse
  >;
  /** Updates the singleton resource. */
  patch(
    options: OwnerInsuranceUpdateParameters,
  ): StreamableMethod<
    OwnerInsuranceUpdate200Response | OwnerInsuranceUpdateDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/pets/\{petId\}' has methods for the following verbs: get, patch, delete */
  (path: "/pets/{petId}", petId: number): PetsGet;
  /** Resource for '/pets' has methods for the following verbs: post, get */
  (path: "/pets"): PetsCreate;
  /** Resource for '/pets/\{petId\}/checkups/\{checkupId\}' has methods for the following verbs: patch */
  (
    path: "/pets/{petId}/checkups/{checkupId}",
    petId: number,
    checkupId: number,
  ): PetCheckupsCreateOrUpdate;
  /** Resource for '/pets/\{petId\}/checkups' has methods for the following verbs: get */
  (path: "/pets/{petId}/checkups", petId: number): PetCheckupsList;
  /** Resource for '/pets/\{petId\}/insurance' has methods for the following verbs: get, patch */
  (path: "/pets/{petId}/insurance", petId: number): PetInsuranceGet;
  /** Resource for '/pets/\{petId\}/toys/\{toyId\}' has methods for the following verbs: get */
  (path: "/pets/{petId}/toys/{toyId}", petId: number, toyId: number): ToysGet;
  /** Resource for '/pets/\{petId\}/toys' has methods for the following verbs: get */
  (path: "/pets/{petId}/toys", petId: number): ToysList;
  /** Resource for '/pets/\{petId\}/toys/\{toyId\}/insurance' has methods for the following verbs: get, patch */
  (
    path: "/pets/{petId}/toys/{toyId}/insurance",
    petId: number,
    toyId: number,
  ): ToyInsuranceGet;
  /** Resource for '/checkups/\{checkupId\}' has methods for the following verbs: patch */
  (path: "/checkups/{checkupId}", checkupId: number): CheckupsCreateOrUpdate;
  /** Resource for '/checkups' has methods for the following verbs: get */
  (path: "/checkups"): CheckupsList;
  /** Resource for '/owners/\{ownerId\}' has methods for the following verbs: get, patch, delete */
  (path: "/owners/{ownerId}", ownerId: number): OwnersGet;
  /** Resource for '/owners' has methods for the following verbs: post, get */
  (path: "/owners"): OwnersCreate;
  /** Resource for '/owners/\{ownerId\}/checkups/\{checkupId\}' has methods for the following verbs: patch */
  (
    path: "/owners/{ownerId}/checkups/{checkupId}",
    ownerId: number,
    checkupId: number,
  ): OwnerCheckupsCreateOrUpdate;
  /** Resource for '/owners/\{ownerId\}/checkups' has methods for the following verbs: get */
  (path: "/owners/{ownerId}/checkups", ownerId: number): OwnerCheckupsList;
  /** Resource for '/owners/\{ownerId\}/insurance' has methods for the following verbs: get, patch */
  (path: "/owners/{ownerId}/insurance", ownerId: number): OwnerInsuranceGet;
}

export type PetStoreClient = Client & {
  path: Routes;
};
