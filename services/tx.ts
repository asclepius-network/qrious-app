import { ApiPromise, WsProvider } from "@polkadot/api";

import { createType } from "@polkadot/types";

// get api from the network
export const getApi = async (ws) => {
  const wsProvider = new WsProvider(ws);
  const api = await ApiPromise.create({
    provider: wsProvider,
    types: {
      Location: {
        id: "Hash",
        visitors: "Vec<AccountId>",
      },
      Identifier: {
        visited: "Vec<Hash>",
      },
    },
  });
  return api;
};

// Subscribe visited location of a user
export const queryVisited = async (api, addr) => {
  await api.query.covi.visited(addr, ({ visited }) => {
    console.log(visited);
  });
};

// Send tx to the network and subscribe
export const submitAttendance = async (api, addr) => {
  const unsub = await api.covi.visit(addr, (result) => {
    console.log(`Current status is ${result.status}`);

    if (result.status.isInBlock) {
      console.log(
        `Transaction included at blockHash ${result.status.asInBlock}`
      );
    } else if (result.status.isFinalized) {
      console.log(
        `Transaction finalized at blockHash ${result.status.asFinalized}`
      );
      unsub();
    }
  });
};
