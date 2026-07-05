export type ProductType = {
  id: string;
  name: string;
  categories: { name: string; slug: string };
  price: number;
  description: string;
  image_url: string;
  status:string;
  tags: string[];
  featured: boolean;
};
export type StatsType = {
  activeCategories: number;
  featuredItems: number;
  totalItems: number;
};

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
};

export type ImageAsset={
    name: string;
    url: string;
    public_id: string;
    type: string;
}