import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { ComponentConfig } from "@measured/puck";
import ProductCardBlock from "./product-card";
import { Product } from "@/types/product";

export type ProductCardProps = {
  slug: string;
  resolvedProductData: object;
};

export const ProductCard: ComponentConfig<ProductCardProps> = {
  label: "Product Card",
  fields: {
    slug: {
      type: "text",
      label: "Product Slug",
    },
    resolvedProductData: {
      type: "object",
      label: "Product Data",
      objectFields: {
        name: { type: "text" },
        price: { type: "number" },
        thumbnail: { type: "text" },
        shared_url: { type: "text" },
      },
    },
  },
  defaultProps: {
    slug: "IP-14PM-IB-CO",
    resolvedProductData: {
      name: "iPhone 14 Pro Max",
      price: 1,
      thumbnail: `${process.env.NEXT_PUBLIC_HOST_CDN}/pub/media/catalog/product/i/p/iphone_14_pro_max_deep_purple_1_6.jpg`,
      shared_url: "https://eraspace.com/eraspace/iphone-14-pro-max-ibox",
    },
  },
  resolveData: async ({ props }: { props: ProductCardProps }): Promise<object> => {
    // Check if the slug is present in the props; if not, return an empty resolvedProductData object.
    if (!props?.slug) return { props: { resolvedProductData: {} } };
    try {
      const url = `${process.env.NEXT_PUBLIC_HOST_API_PRODUCTS}/${props?.slug}`;
      try {
        const response = await axios.get(url);
        const productData = response.data?.data;
        return {
          props: {
            resolvedProductData: productData ?? {},
          },
          readOnly: {
            resolvedProductData: false,
          },
        };
      } catch (error) {
        return {
          props: {
            resolvedProductData: {},
          },
        };
      }
    } catch (error) {
      return {
        props: {
          resolvedProductData: {},
        },
      };
    }
  },
  render: ({ resolvedProductData }) => {
    if (!resolvedProductData) return <Skeleton className="h-[400px] w-full" />;

    const { name, price, thumbnail, shared_url: productURL } = resolvedProductData as Product;
    return (
      <ProductCardBlock name={name} price={price} thumbnail={thumbnail} productURL={productURL} />
    );
  },
};
