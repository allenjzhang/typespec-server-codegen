// Licensed under the MIT License.

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

const responseMap: Record<string, string[]> = {
  "GET /pets/{petId}": ["200"],
  "PATCH /pets/{petId}": ["200"],
  "DELETE /pets/{petId}": ["200"],
  "POST /pets": ["200", "201"],
  "GET /pets": ["200"],
  "PATCH /pets/{petId}/checkups/{checkupId}": ["200", "201"],
  "GET /pets/{petId}/checkups": ["200"],
  "GET /pets/{petId}/insurance": ["200"],
  "PATCH /pets/{petId}/insurance": ["200"],
  "GET /pets/{petId}/toys/{toyId}": ["200"],
  "GET /pets/{petId}/toys": ["200"],
  "GET /pets/{petId}/toys/{toyId}/insurance": ["200"],
  "PATCH /pets/{petId}/toys/{toyId}/insurance": ["200"],
  "PATCH /checkups/{checkupId}": ["200", "201"],
  "GET /checkups": ["200"],
  "GET /owners/{ownerId}": ["200"],
  "PATCH /owners/{ownerId}": ["200"],
  "DELETE /owners/{ownerId}": ["200"],
  "POST /owners": ["200", "201"],
  "GET /owners": ["200"],
  "PATCH /owners/{ownerId}/checkups/{checkupId}": ["200", "201"],
  "GET /owners/{ownerId}/checkups": ["200"],
  "GET /owners/{ownerId}/insurance": ["200"],
  "PATCH /owners/{ownerId}/insurance": ["200"],
};

export function isUnexpected(
  response: PetsGet200Response | PetsGetDefaultResponse,
): response is PetsGetDefaultResponse;
export function isUnexpected(
  response: PetsUpdate200Response | PetsUpdateDefaultResponse,
): response is PetsUpdateDefaultResponse;
export function isUnexpected(
  response: PetsDelete200Response | PetsDeleteDefaultResponse,
): response is PetsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | PetsCreate200Response
    | PetsCreate201Response
    | PetsCreateDefaultResponse,
): response is PetsCreateDefaultResponse;
export function isUnexpected(
  response: PetsList200Response | PetsListDefaultResponse,
): response is PetsListDefaultResponse;
export function isUnexpected(
  response:
    | PetCheckupsCreateOrUpdate200Response
    | PetCheckupsCreateOrUpdate201Response
    | PetCheckupsCreateOrUpdateDefaultResponse,
): response is PetCheckupsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: PetCheckupsList200Response | PetCheckupsListDefaultResponse,
): response is PetCheckupsListDefaultResponse;
export function isUnexpected(
  response: PetInsuranceGet200Response | PetInsuranceGetDefaultResponse,
): response is PetInsuranceGetDefaultResponse;
export function isUnexpected(
  response: PetInsuranceUpdate200Response | PetInsuranceUpdateDefaultResponse,
): response is PetInsuranceUpdateDefaultResponse;
export function isUnexpected(
  response: ToysGet200Response | ToysGetDefaultResponse,
): response is ToysGetDefaultResponse;
export function isUnexpected(
  response: ToysList200Response | ToysListDefaultResponse,
): response is ToysListDefaultResponse;
export function isUnexpected(
  response: ToyInsuranceGet200Response | ToyInsuranceGetDefaultResponse,
): response is ToyInsuranceGetDefaultResponse;
export function isUnexpected(
  response: ToyInsuranceUpdate200Response | ToyInsuranceUpdateDefaultResponse,
): response is ToyInsuranceUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CheckupsCreateOrUpdate200Response
    | CheckupsCreateOrUpdate201Response
    | CheckupsCreateOrUpdateDefaultResponse,
): response is CheckupsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: CheckupsList200Response | CheckupsListDefaultResponse,
): response is CheckupsListDefaultResponse;
export function isUnexpected(
  response: OwnersGet200Response | OwnersGetDefaultResponse,
): response is OwnersGetDefaultResponse;
export function isUnexpected(
  response: OwnersUpdate200Response | OwnersUpdateDefaultResponse,
): response is OwnersUpdateDefaultResponse;
export function isUnexpected(
  response: OwnersDelete200Response | OwnersDeleteDefaultResponse,
): response is OwnersDeleteDefaultResponse;
export function isUnexpected(
  response:
    | OwnersCreate200Response
    | OwnersCreate201Response
    | OwnersCreateDefaultResponse,
): response is OwnersCreateDefaultResponse;
export function isUnexpected(
  response: OwnersList200Response | OwnersListDefaultResponse,
): response is OwnersListDefaultResponse;
export function isUnexpected(
  response:
    | OwnerCheckupsCreateOrUpdate200Response
    | OwnerCheckupsCreateOrUpdate201Response
    | OwnerCheckupsCreateOrUpdateDefaultResponse,
): response is OwnerCheckupsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: OwnerCheckupsList200Response | OwnerCheckupsListDefaultResponse,
): response is OwnerCheckupsListDefaultResponse;
export function isUnexpected(
  response: OwnerInsuranceGet200Response | OwnerInsuranceGetDefaultResponse,
): response is OwnerInsuranceGetDefaultResponse;
export function isUnexpected(
  response:
    | OwnerInsuranceUpdate200Response
    | OwnerInsuranceUpdateDefaultResponse,
): response is OwnerInsuranceUpdateDefaultResponse;
export function isUnexpected(
  response:
    | PetsGet200Response
    | PetsGetDefaultResponse
    | PetsUpdate200Response
    | PetsUpdateDefaultResponse
    | PetsDelete200Response
    | PetsDeleteDefaultResponse
    | PetsCreate200Response
    | PetsCreate201Response
    | PetsCreateDefaultResponse
    | PetsList200Response
    | PetsListDefaultResponse
    | PetCheckupsCreateOrUpdate200Response
    | PetCheckupsCreateOrUpdate201Response
    | PetCheckupsCreateOrUpdateDefaultResponse
    | PetCheckupsList200Response
    | PetCheckupsListDefaultResponse
    | PetInsuranceGet200Response
    | PetInsuranceGetDefaultResponse
    | PetInsuranceUpdate200Response
    | PetInsuranceUpdateDefaultResponse
    | ToysGet200Response
    | ToysGetDefaultResponse
    | ToysList200Response
    | ToysListDefaultResponse
    | ToyInsuranceGet200Response
    | ToyInsuranceGetDefaultResponse
    | ToyInsuranceUpdate200Response
    | ToyInsuranceUpdateDefaultResponse
    | CheckupsCreateOrUpdate200Response
    | CheckupsCreateOrUpdate201Response
    | CheckupsCreateOrUpdateDefaultResponse
    | CheckupsList200Response
    | CheckupsListDefaultResponse
    | OwnersGet200Response
    | OwnersGetDefaultResponse
    | OwnersUpdate200Response
    | OwnersUpdateDefaultResponse
    | OwnersDelete200Response
    | OwnersDeleteDefaultResponse
    | OwnersCreate200Response
    | OwnersCreate201Response
    | OwnersCreateDefaultResponse
    | OwnersList200Response
    | OwnersListDefaultResponse
    | OwnerCheckupsCreateOrUpdate200Response
    | OwnerCheckupsCreateOrUpdate201Response
    | OwnerCheckupsCreateOrUpdateDefaultResponse
    | OwnerCheckupsList200Response
    | OwnerCheckupsListDefaultResponse
    | OwnerInsuranceGet200Response
    | OwnerInsuranceGetDefaultResponse
    | OwnerInsuranceUpdate200Response
    | OwnerInsuranceUpdateDefaultResponse,
): response is
  | PetsGetDefaultResponse
  | PetsUpdateDefaultResponse
  | PetsDeleteDefaultResponse
  | PetsCreateDefaultResponse
  | PetsListDefaultResponse
  | PetCheckupsCreateOrUpdateDefaultResponse
  | PetCheckupsListDefaultResponse
  | PetInsuranceGetDefaultResponse
  | PetInsuranceUpdateDefaultResponse
  | ToysGetDefaultResponse
  | ToysListDefaultResponse
  | ToyInsuranceGetDefaultResponse
  | ToyInsuranceUpdateDefaultResponse
  | CheckupsCreateOrUpdateDefaultResponse
  | CheckupsListDefaultResponse
  | OwnersGetDefaultResponse
  | OwnersUpdateDefaultResponse
  | OwnersDeleteDefaultResponse
  | OwnersCreateDefaultResponse
  | OwnersListDefaultResponse
  | OwnerCheckupsCreateOrUpdateDefaultResponse
  | OwnerCheckupsListDefaultResponse
  | OwnerInsuranceGetDefaultResponse
  | OwnerInsuranceUpdateDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
