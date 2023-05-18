/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const AssetDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetDetails",
    modelProperties: {
      numberType: {
        serializedName: "NumberType",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resourceAcquiredCount: {
        serializedName: "ResourceAcquiredCount",
        type: {
          name: "Number"
        }
      },
      subscriptionAcquiredCount: {
        serializedName: "SubscriptionAcquiredCount",
        type: {
          name: "Number"
        }
      },
      aadTenantAcquiredCount: {
        serializedName: "AadTenantAcquiredCount",
        type: {
          name: "Number"
        }
      },
      tierInfo: {
        serializedName: "TierInfo",
        type: {
          name: "Composite",
          className: "AssetDetailsTierInfo"
        }
      }
    }
  }
};

export const AssetDetailsTierInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssetDetailsTierInfo",
    modelProperties: {
      scope: {
        serializedName: "Scope",
        type: {
          name: "String"
        }
      },
      allowed: {
        serializedName: "Allowed",
        type: {
          name: "Number"
        }
      },
      acquired: {
        serializedName: "Acquired",
        type: {
          name: "Number"
        }
      },
      balance: {
        serializedName: "Balance",
        type: {
          name: "Number"
        }
      },
      limit: {
        serializedName: "Limit",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CommunicationErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};

export const CommunicationError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CommunicationError",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CommunicationError"
            }
          }
        }
      },
      innerError: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "CommunicationError"
        }
      }
    }
  }
};
