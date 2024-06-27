/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  id: number;
  sku: string;
  name: string;
  brand: string;
  description: string;
  short_description: string;
  attribute_set_id: number;
  status: number;
  visibility: number;
  price: number;
  special_price: number;
  special_price_as_cashback: number;
  type_id: string;
  meta_title: string;
  meta_keyword: string;
  meta_description: string;
  limited_product: number;
  preorder: number;
  badge_o2o: number;
  is_new_custom: number;
  has_options: number;
  enable_installment: number;
  new_ranking: number;
  required_options: number;
  required_image: string;
  stock_status: number;
  quantity_status: boolean;
  quantity_and_stock_status: number;
  created_at: string;
  updated_at: string;
  swatch_image: string;
  thumbnail: string;
  url_key: string;
  shared_url: string;
  category_id: number[];
  options: any[];
  children_options: any;
  children: Children[];
  tier_prices: any[];
  media_gallery_entries: MediaGalleryEntry[];
  custom_attributes: CustomAttribute[];
  max_sale_qty: number;
  qty: number;
  extension_attributes: ExtensionAttributes;
  site_code: string;
  site_code_stock: string;
  weight: number;
  ts_dimensions_length: number;
  ts_dimensions_width: number;
  ts_dimensions_height: number;
  news_from_date_custom: string;
  news_to_date_custom: string;
  custom_badge: string;
  custom_badge_from_date: string;
  custom_badge_to_date: string;
  category_name: string;
  preorder_nonstock: string;
  promo_store_o2o: number;
  wait_time: number;
  effective_date: string;
  expired_date: string;
  promo_service: number;
  promo_service_item: number;
  product_brand: string;
  delivery: string;
  return: string;
  jd_product_id: string;
  badge_only_at_jd: number;
  badge_exclusive_web: number;
  badge_wellings_choice: number;
  badge_best_seller: number;
  badge_sustainable_materials: number;
  gtin: string;
  mpn: string;
}

export interface Children {
  id: number;
  type: string;
  sku: string;
  url_key: string;
  name: string;
  price: number;
  special_price: number;
  visibility: number;
  type_id: string;
  stock_status: number;
  quantity_status: boolean;
  quantity_and_stock_status: number;
  image: string;
  color: string;
  option: string;
  super_attributes: SuperAttribute[];
  product_links: ProductLink[];
}

export interface SuperAttribute {
  type: string;
  attribute_code: string;
  attribute_label: string;
  value: string;
}

export interface ProductLink {
  link_type: string;
  linked_product_sku: string;
  linked_product_type: string;
  position: number;
  sku: string;
}

export interface MediaGalleryEntry {
  id: number;
  media_type: string;
  file: string;
}

export interface CustomAttribute {
  attribute_code: string;
  value: any;
}

export interface ExtensionAttributes {
  configurable_product_options: ConfigurableProductOption[];
  stock_item: StockItem;
}

export interface ConfigurableProductOption {
  id: number;
  attribute_id: string;
  label: string;
  position: number;
  values: Value[];
  product_id: number;
}

export interface Value {
  value_index: number;
}

export interface StockItem {
  item_id: number;
  product_id: number;
  stock_id: number;
  qty: number;
  is_in_stock: boolean;
  is_qty_decimal: boolean;
  show_default_notification_message: boolean;
  use_config_min_qty: boolean;
  min_qty: number;
  use_config_min_sale_qty: number;
  min_sale_qty: number;
  use_config_max_sale_qty: boolean;
  max_sale_qty: number;
  use_config_backorders: boolean;
  backorders: number;
  use_config_notify_stock_qty: boolean;
  notify_stock_qty: number;
  use_config_qty_increments: boolean;
  qty_increments: number;
  use_config_enable_qty_inc: boolean;
  enable_qty_increments: boolean;
  use_config_manage_stock: boolean;
  manage_stock: boolean;
  low_stock_date: string;
  is_decimal_divided: boolean;
  stock_status_changed_auto: number;
}
