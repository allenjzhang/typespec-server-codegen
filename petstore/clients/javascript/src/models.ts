// Licensed under the MIT License.

/** Resource create or update operation model. */
export interface PetUpdate {
  name?: string;
  tag?: string;
  age?: number;
  ownerId?: number;
}

/** Resource create operation model. */
export interface PetCreate {
  name: string;
  tag?: string;
  age: number;
  ownerId: number;
}

/** Resource create or update operation model. */
export interface CheckupUpdate {
  vetName?: string;
  notes?: string;
}

/** Resource create or update operation model. */
export interface InsuranceUpdate {
  provider?: string;
  premium?: number;
  deductible?: number;
}

/** Resource create or update operation model. */
export interface OwnerUpdate {
  name?: string;
  age?: number;
}

/** Resource create operation model. */
export interface OwnerCreate {
  name: string;
  age: number;
}
