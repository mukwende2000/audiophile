export interface Images {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Accessories {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: Images;
  second: Images;
  third: Images;
}

export interface Other {
  slug: string;
  name: string;
  image: Images;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  short: string;
  price: number;
  image: Images;
  category: string;
  categoryImage: Images;
  cartImage: string;
  new: boolean;
  description: string;
  features: string;
  includes: Accessories[];
  gallery: Gallery;
  others: Other[];
}
