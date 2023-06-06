/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GenerateDetailedCostReportOperationStatus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CostManagementClient } from "../costManagementClient";
import {
  GenerateDetailedCostReportOperationStatusGetOptionalParams,
  GenerateDetailedCostReportOperationStatusGetResponse
} from "../models";

/** Class containing GenerateDetailedCostReportOperationStatus operations. */
export class GenerateDetailedCostReportOperationStatusImpl
  implements GenerateDetailedCostReportOperationStatus {
  private readonly client: CostManagementClient;

  /**
   * Initialize a new instance of the class GenerateDetailedCostReportOperationStatus class.
   * @param client Reference to the service client
   */
  constructor(client: CostManagementClient) {
    this.client = client;
  }

  /**
   * Get the status of the specified operation. This link is provided in the GenerateDetailedCostReport
   * creation request response header.
   * @param operationId The target operation Id.
   * @param scope The ARM Resource ID for subscription, resource group, billing account, or other billing
   *              scopes. For details, see https://aka.ms/costmgmt/scopes.
   * @param options The options parameters.
   */
  get(
    operationId: string,
    scope: string,
    options?: GenerateDetailedCostReportOperationStatusGetOptionalParams
  ): Promise<GenerateDetailedCostReportOperationStatusGetResponse> {
    return this.client.sendOperationRequest(
      { operationId, scope, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.CostManagement/operationStatus/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GenerateDetailedCostReportOperationStatuses
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope1, Parameters.operationId],
  headerParameters: [Parameters.accept],
  serializer
};
