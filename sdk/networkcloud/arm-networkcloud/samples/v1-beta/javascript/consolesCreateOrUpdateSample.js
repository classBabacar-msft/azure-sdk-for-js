/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkCloud } = require("@azure/arm-networkcloud");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create a new virtual machine console or update the properties of the existing virtual machine console.
 *
 * @summary Create a new virtual machine console or update the properties of the existing virtual machine console.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/Consoles_Create.json
 */
async function createOrUpdateVirtualMachineConsole() {
  const subscriptionId = process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const virtualMachineName = "virtualMachineName";
  const consoleName = "default";
  const consoleParameters = {
    enabled: "True",
    expiration: new Date("2022-06-01T01:27:03.008Z"),
    extendedLocation: {
      name: "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterManagerExtendedLocationName",
      type: "CustomLocation",
    },
    location: "location",
    sshPublicKey: {
      keyData:
        "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm",
    },
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.consoles.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualMachineName,
    consoleName,
    consoleParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateVirtualMachineConsole();
}

main().catch(console.error);
