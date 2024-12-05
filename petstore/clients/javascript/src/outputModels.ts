// Licensed under the MIT License.

export interface PetOutput {
  id: number;
  name: string;
  tag?: string;
  age: number;
  ownerId: number;
}

export interface PetStoreErrorOutput {
  code: number;
  message: string;
}

/** Paged response of Pet items */
export interface PetCollectionWithNextLinkOutput {
  /** The items on this page */
  value: Array<PetOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface CheckupOutput {
  id: number;
  vetName: string;
  notes: string;
}

/** Paged response of Checkup items */
export interface CheckupCollectionWithNextLinkOutput {
  /** The items on this page */
  value: Array<CheckupOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface InsuranceOutput {
  provider: string;
  premium: number;
  deductible: number;
}

export interface ToyOutput {
  id: number;
  petId: number;
  name: string;
}

/** Paged response of Toy items */
export interface ToyCollectionWithNextLinkOutput {
  /** The items on this page */
  value: Array<ToyOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

export interface OwnerOutput {
  id: number;
  name: string;
  age: number;
}

/** Paged response of Owner items */
export interface OwnerCollectionWithNextLinkOutput {
  /** The items on this page */
  value: Array<OwnerOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}
