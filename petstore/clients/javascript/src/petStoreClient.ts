// Licensed under the MIT License.

import { getClient, ClientOptions } from "@typespec/ts-http-runtime";
import { PetStoreClient } from "./clientDefinitions.js";

/** The optional parameters for the client */
export interface PetStoreClientOptions extends ClientOptions {}

/**
 * Initialize a new instance of `PetStoreClient`
 * @param endpointParam - The parameter endpointParam
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpointParam: string,
  options: PetStoreClientOptions = {},
): PetStoreClient {
  const endpointUrl = options.endpoint ?? options.baseUrl ?? `${endpointParam}`;
  const userAgentInfo = `azsdk-js-PetStoreService-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };
  const client = getClient(endpointUrl, options) as PetStoreClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
