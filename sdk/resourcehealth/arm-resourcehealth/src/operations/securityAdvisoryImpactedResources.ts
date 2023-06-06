/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SecurityAdvisoryImpactedResources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftResourceHealth } from "../microsoftResourceHealth";
import {
  EventImpactedResource,
  SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdNextOptionalParams,
  SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams,
  SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdResponse,
  SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdNextOptionalParams,
  SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOptionalParams,
  SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdResponse,
  SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdNextResponse,
  SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SecurityAdvisoryImpactedResources operations. */
export class SecurityAdvisoryImpactedResourcesImpl
  implements SecurityAdvisoryImpactedResources {
  private readonly client: MicrosoftResourceHealth;

  /**
   * Initialize a new instance of the class SecurityAdvisoryImpactedResources class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftResourceHealth) {
    this.client = client;
  }

  /**
   * Lists impacted resources in the subscription by an event (Security Advisory).
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param options The options parameters.
   */
  public listBySubscriptionIdAndEventId(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams
  ): PagedAsyncIterableIterator<EventImpactedResource> {
    const iter = this.listBySubscriptionIdAndEventIdPagingAll(
      eventTrackingId,
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
        return this.listBySubscriptionIdAndEventIdPagingPage(
          eventTrackingId,
          options,
          settings
        );
      }
    };
  }

  private async *listBySubscriptionIdAndEventIdPagingPage(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EventImpactedResource[]> {
    let result: SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscriptionIdAndEventId(
        eventTrackingId,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionIdAndEventIdNext(
        eventTrackingId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionIdAndEventIdPagingAll(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams
  ): AsyncIterableIterator<EventImpactedResource> {
    for await (const page of this.listBySubscriptionIdAndEventIdPagingPage(
      eventTrackingId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists impacted resources in the tenant by an event (Security Advisory).
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param options The options parameters.
   */
  public listByTenantIdAndEventId(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOptionalParams
  ): PagedAsyncIterableIterator<EventImpactedResource> {
    const iter = this.listByTenantIdAndEventIdPagingAll(
      eventTrackingId,
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
        return this.listByTenantIdAndEventIdPagingPage(
          eventTrackingId,
          options,
          settings
        );
      }
    };
  }

  private async *listByTenantIdAndEventIdPagingPage(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<EventImpactedResource[]> {
    let result: SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByTenantIdAndEventId(eventTrackingId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByTenantIdAndEventIdNext(
        eventTrackingId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByTenantIdAndEventIdPagingAll(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOptionalParams
  ): AsyncIterableIterator<EventImpactedResource> {
    for await (const page of this.listByTenantIdAndEventIdPagingPage(
      eventTrackingId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists impacted resources in the subscription by an event (Security Advisory).
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param options The options parameters.
   */
  private _listBySubscriptionIdAndEventId(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdOptionalParams
  ): Promise<
    SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdResponse
  > {
    return this.client.sendOperationRequest(
      { eventTrackingId, options },
      listBySubscriptionIdAndEventIdOperationSpec
    );
  }

  /**
   * Lists impacted resources in the tenant by an event (Security Advisory).
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param options The options parameters.
   */
  private _listByTenantIdAndEventId(
    eventTrackingId: string,
    options?: SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdOptionalParams
  ): Promise<
    SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdResponse
  > {
    return this.client.sendOperationRequest(
      { eventTrackingId, options },
      listByTenantIdAndEventIdOperationSpec
    );
  }

  /**
   * ListBySubscriptionIdAndEventIdNext
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param nextLink The nextLink from the previous successful call to the ListBySubscriptionIdAndEventId
   *                 method.
   * @param options The options parameters.
   */
  private _listBySubscriptionIdAndEventIdNext(
    eventTrackingId: string,
    nextLink: string,
    options?: SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdNextOptionalParams
  ): Promise<
    SecurityAdvisoryImpactedResourcesListBySubscriptionIdAndEventIdNextResponse
  > {
    return this.client.sendOperationRequest(
      { eventTrackingId, nextLink, options },
      listBySubscriptionIdAndEventIdNextOperationSpec
    );
  }

  /**
   * ListByTenantIdAndEventIdNext
   * @param eventTrackingId Event Id which uniquely identifies ServiceHealth event.
   * @param nextLink The nextLink from the previous successful call to the ListByTenantIdAndEventId
   *                 method.
   * @param options The options parameters.
   */
  private _listByTenantIdAndEventIdNext(
    eventTrackingId: string,
    nextLink: string,
    options?: SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdNextOptionalParams
  ): Promise<
    SecurityAdvisoryImpactedResourcesListByTenantIdAndEventIdNextResponse
  > {
    return this.client.sendOperationRequest(
      { eventTrackingId, nextLink, options },
      listByTenantIdAndEventIdNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionIdAndEventIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/listSecurityAdvisoryImpactedResources",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EventImpactedResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.eventTrackingId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTenantIdAndEventIdOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.ResourceHealth/events/{eventTrackingId}/listSecurityAdvisoryImpactedResources",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EventImpactedResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.eventTrackingId],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionIdAndEventIdNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventImpactedResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.eventTrackingId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTenantIdAndEventIdNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventImpactedResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.eventTrackingId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
