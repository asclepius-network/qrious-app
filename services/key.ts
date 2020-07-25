import * as SecureStore from "expo-secure-store";

export const setAccount = async (account) => {
  const result = await SecureStore.setItemAsync("account", account);
  return result;
};

export const getAccount = async (account) => {
  const result = await SecureStore.getItemAsync("account", account);
  return result;
};
