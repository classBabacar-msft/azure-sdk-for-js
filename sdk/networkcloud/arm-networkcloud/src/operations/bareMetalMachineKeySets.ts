/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { BareMetalMachineKeySets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkCloud } from "../networkCloud";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  BareMetalMachineKeySet,
  BareMetalMachineKeySetsListByResourceGroupNextOptionalParams,
  BareMetalMachineKeySetsListByResourceGroupOptionalParams,
  BareMetalMachineKeySetsListByResourceGroupResponse,
  BareMetalMachineKeySetsGetOptionalParams,
  BareMetalMachineKeySetsGetResponse,
  BareMetalMachineKeySetsCreateOrUpdateOptionalParams,
  BareMetalMachineKeySetsCreateOrUpdateResponse,
  BareMetalMachineKeySetsDeleteOptionalParams,
  BareMetalMachineKeySetsUpdateOptionalParams,
  BareMetalMachineKeySetsUpdateResponse,
  BareMetalMachineKeySetsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BareMetalMachineKeySets operations. */
export class BareMetalMachineKeySetsImpl implements BareMetalMachineKeySets {
  private readonly client: NetworkCloud;

  /**
   * Initialize a new instance of the class BareMetalMachineKeySets class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkCloud) {
    this.client = client;
  }

  /**
   * Get a list of bare metal machine key sets of the cluster in the provided resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    clusterName: string,
    options?: BareMetalMachineKeySetsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<BareMetalMachineKeySet> {
    const iter = this.listByResourceGroupPagingAll(
      resourceGroupName,
      clusterName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: BareMetalMachineKeySetsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<BareMetalMachineKeySet[]> {
    let result: BareMetalMachineKeySetsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(
        resourceGroupName,
        clusterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        clusterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: BareMetalMachineKeySetsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<BareMetalMachineKeySet> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of bare metal machine key sets of the cluster in the provided resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    clusterName: string,
    options?: BareMetalMachineKeySetsListByResourceGroupOptionalParams
  ): Promise<BareMetalMachineKeySetsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Get bare metal machine key set of the provided cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param bareMetalMachineKeySetName The name of the bare metal machine key set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    bareMetalMachineKeySetName: string,
    options?: BareMetalMachineKeySetsGetOptionalParams
  ): Promise<BareMetalMachineKeySetsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, bareMetalMachineKeySetName, options },
      getOperationSpec
    );
  }

  /**
   * Create a new bare metal machine key set or update the existing one for the provided cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param bareMetalMachineKeySetName The name of the bare metal machine key set.
   * @param bareMetalMachineKeySetParameters The request body.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    bareMetalMachineKeySetName: string,
    bareMetalMachineKeySetParameters: BareMetalMachineKeySet,
    options?: BareMetalMachineKeySetsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachineKeySetsCreateOrUpdateResponse>,
      BareMetalMachineKeySetsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BareMetalMachineKeySetsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        clusterName,
        bareMetalMachineKeySetName,
        bareMetalMachineKeySetParameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      BareMetalMachineKeySetsCreateOrUpdateResponse,
      OperationState<BareMetalMachineKeySetsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a new bare metal machine key set or update the existing one for the provided cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param bareMetalMachineKeySetName The name of the bare metal machine key set.
   * @param bareMetalMachineKeySetParameters The request body.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    bareMetalMachineKeySetName: string,
    bareMetalMachineKeySetParameters: BareMetalMachineKeySet,
    options?: BareMetalMachineKeySetsCreateOrUpdateOptionalParams
  ): Promise<BareMetalMachineKeySetsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      bareMetalMachineKeySetName,
      bareMetalMachineKeySetParameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the bare metal machine key set of the provided cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param bareMetalMachineKeySetName The name of the bare metal machine key set.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    bareMetalMachineKeySetName: string,
    options?: BareMetalMachineKeySetsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        clusterName,
        bareMetalMachineKeySetName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the bare metal machine key set of the provided cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param bareMetalMachineKeySetName The name of the bare metal machine key set.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    bareMetalMachineKeySetName: string,
    options?: BareMetalMachineKeySetsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      bareMetalMachineKeySetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch properties of bare metal machine key set for the provided cluster, or update the tags
   * associated with it. Properties and tag updates can be done independently.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param bareMetalMachineKeySetName The name of the bare metal machine key set.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    bareMetalMachineKeySetName: string,
    options?: BareMetalMachineKeySetsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<BareMetalMachineKeySetsUpdateResponse>,
      BareMetalMachineKeySetsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<BareMetalMachineKeySetsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        clusterName,
        bareMetalMachineKeySetName,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      BareMetalMachineKeySetsUpdateResponse,
      OperationState<BareMetalMachineKeySetsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch properties of bare metal machine key set for the provided cluster, or update the tags
   * associated with it. Properties and tag updates can be done independently.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param bareMetalMachineKeySetName The name of the bare metal machine key set.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    bareMetalMachineKeySetName: string,
    options?: BareMetalMachineKeySetsUpdateOptionalParams
  ): Promise<BareMetalMachineKeySetsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      clusterName,
      bareMetalMachineKeySetName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    clusterName: string,
    nextLink: string,
    options?: BareMetalMachineKeySetsListByResourceGroupNextOptionalParams
  ): Promise<BareMetalMachineKeySetsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BareMetalMachineKeySetList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.bareMetalMachineKeySetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    201: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    202: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    204: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.bareMetalMachineKeySetParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.bareMetalMachineKeySetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.bareMetalMachineKeySetName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetworkCloud/clusters/{clusterName}/bareMetalMachineKeySets/{bareMetalMachineKeySetName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    201: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    202: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    204: {
      bodyMapper: Mappers.BareMetalMachineKeySet
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.bareMetalMachineKeySetUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.bareMetalMachineKeySetName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BareMetalMachineKeySetList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
