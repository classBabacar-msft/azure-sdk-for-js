const JobRouter = require("../src").default;
require("dotenv").config();
const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// Get a router worker

async function getRouterWorker() {
  // Create the Router Client
  const routerClient = JobRouter(connectionString);

  const entityId = "router-worker-123";

  const result = await routerClient.path("/routing/workers/{workerId}", entityId).get();

  console.log("router worker: " + result);
}

getRouterWorker().catch(console.error);
