import axios from "axios";
import { getErrorMessage } from "@/utils/get-error-msg";
import { Product } from "@/types/product";

const baseURL = process.env.NEXT_PUBLIC_HOST_API_PRODUCTS;

const instance = axios.create({
  baseURL,
});

export async function fetchProductInfo(slug: string): Promise<Product> {
  try {
    const response = await instance.get(`/${slug}`);
    if (!response.data?.data) {
      throw new Error("Product not found");
    }
    return response.data?.data;
  } catch (error) {
    const err = getErrorMessage(error);
    throw new Error(err);
  }
}
