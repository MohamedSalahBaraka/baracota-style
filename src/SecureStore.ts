import * as SecureStore from "expo-secure-store";
export async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}
export async function deleteItem(key: string) {
  await SecureStore.deleteItemAsync(key);
}
