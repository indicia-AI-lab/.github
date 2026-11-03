// ci-node.yml with db-image must hand the tests a working DATABASE_URL.
import { connect } from "node:net";

const url = new URL(process.env.DATABASE_URL ?? "");
if (url.protocol !== "postgresql:") throw new Error(`DATABASE_URL not set by ci-node: ${url.protocol}`);
await new Promise((resolve, reject) => {
  const socket = connect(Number(url.port), url.hostname, () => { socket.end(); resolve(); });
  socket.on("error", reject);
});
console.log(`database reachable at ${url.hostname}:${url.port}`);
