import { api } from "../api"

export async function findAllProducts() {
  const response = await api.get('/products');

  return response.data;
}