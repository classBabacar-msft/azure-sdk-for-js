/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Image, ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_CreateFromABlobWithDiskEncryptionSet.json
 */
async function createAVirtualMachineImageFromABlobWithDiskEncryptionSetResource() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        blobUri:
          "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
        diskEncryptionSet: {
          id:
            "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}"
        },
        osState: "Generalized",
        osType: "Linux"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_CreateFromABlob.json
 */
async function createAVirtualMachineImageFromABlob() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        blobUri:
          "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
        osState: "Generalized",
        osType: "Linux"
      },
      zoneResilient: true
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_CreateFromAManagedDiskWithDiskEncryptionSet.json
 */
async function createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        diskEncryptionSet: {
          id:
            "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}"
        },
        osState: "Generalized",
        osType: "Linux",
        snapshot: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot"
        }
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_CreateFromAManagedDisk.json
 */
async function createAVirtualMachineImageFromAManagedDisk() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        managedDisk: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk"
        },
        osState: "Generalized",
        osType: "Linux"
      },
      zoneResilient: true
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_CreateFromASnapshotWithDiskEncryptionSet.json
 */
async function createAVirtualMachineImageFromASnapshotWithDiskEncryptionSetResource() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        diskEncryptionSet: {
          id:
            "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}"
        },
        managedDisk: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk"
        },
        osState: "Generalized",
        osType: "Linux"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_CreateFromASnapshot.json
 */
async function createAVirtualMachineImageFromASnapshot() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      osDisk: {
        osState: "Generalized",
        osType: "Linux",
        snapshot: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot"
        }
      },
      zoneResilient: false
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_CreateFromAVM.json
 */
async function createAVirtualMachineImageFromAnExistingVirtualMachine() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    sourceVirtualMachine: {
      id:
        "/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_Create_DataDiskFromABlobIncluded.json
 */
async function createAVirtualMachineImageThatIncludesADataDiskFromABlob() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      dataDisks: [
        {
          blobUri:
            "https://mystorageaccount.blob.core.windows.net/dataimages/dataimage.vhd",
          lun: 1
        }
      ],
      osDisk: {
        blobUri:
          "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
        osState: "Generalized",
        osType: "Linux"
      },
      zoneResilient: false
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_Create_DataDiskFromAManagedDiskIncluded.json
 */
async function createAVirtualMachineImageThatIncludesADataDiskFromAManagedDisk() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      dataDisks: [
        {
          lun: 1,
          managedDisk: {
            id:
              "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk2"
          }
        }
      ],
      osDisk: {
        managedDisk: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk"
        },
        osState: "Generalized",
        osType: "Linux"
      },
      zoneResilient: false
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an image.
 *
 * @summary Create or update an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/imageExamples/Image_Create_DataDiskFromASnapshotIncluded.json
 */
async function createAVirtualMachineImageThatIncludesADataDiskFromASnapshot() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const imageName = "myImage";
  const parameters: Image = {
    location: "West US",
    storageProfile: {
      dataDisks: [
        {
          lun: 1,
          snapshot: {
            id:
              "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot2"
          }
        }
      ],
      osDisk: {
        osState: "Generalized",
        osType: "Linux",
        snapshot: {
          id:
            "subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot"
        }
      },
      zoneResilient: true
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.images.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageName,
    parameters
  );
  console.log(result);
}

async function main() {
  createAVirtualMachineImageFromABlobWithDiskEncryptionSetResource();
  createAVirtualMachineImageFromABlob();
  createAVirtualMachineImageFromAManagedDiskWithDiskEncryptionSetResource();
  createAVirtualMachineImageFromAManagedDisk();
  createAVirtualMachineImageFromASnapshotWithDiskEncryptionSetResource();
  createAVirtualMachineImageFromASnapshot();
  createAVirtualMachineImageFromAnExistingVirtualMachine();
  createAVirtualMachineImageThatIncludesADataDiskFromABlob();
  createAVirtualMachineImageThatIncludesADataDiskFromAManagedDisk();
  createAVirtualMachineImageThatIncludesADataDiskFromASnapshot();
}

main().catch(console.error);
