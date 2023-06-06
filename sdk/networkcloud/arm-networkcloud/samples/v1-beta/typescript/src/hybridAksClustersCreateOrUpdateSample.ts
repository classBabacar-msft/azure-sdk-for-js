/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridAksCluster, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create new additional details related to the Hybrid AKS provisioned cluster or update the existing one.
All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 *
 * @summary Create new additional details related to the Hybrid AKS provisioned cluster or update the existing one.
All customer initiated requests will be rejected as the life cycle of this resource is managed by the system.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/HybridAksClusters_Create.json
 */
async function createOrUpdateHybridAksProvisionedClusterData() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const hybridAksClusterName = "hybridAksClusterName";
  const hybridAksClusterParameters: HybridAksCluster = {
    associatedNetworkIds: [
      "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName"
    ],
    controlPlaneCount: 4,
    extendedLocation: {
      name:
        "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation"
    },
    hybridAksProvisionedClusterId:
      "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.HybridContainerService/provisionedClusters/hybridAksClusterName",
    location: "location",
    tags: { key1: "myvalue1", key2: "myvalue2" },
    workerCount: 8
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.hybridAksClusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    hybridAksClusterName,
    hybridAksClusterParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateHybridAksProvisionedClusterData();
}

main().catch(console.error);
