export interface Product {
  _id: string;
  title: string;
  price: number;
  images: [{}];
  description: string;
  content: string;
  sold: number;
  inStock: number;
  checked: boolean;
}

export interface Banner {
  title: string;
  discount: string;
  description: string;
  midText: string;
  discount: number;
  textButton: string;
  time: string;
}

export interface ProductProps {
  products: Array<Product>
}

export interface BannerProps {
  banner: Array<Banner[], number>
}

export interface FooterProps {
  footerBanner: Array<Banner[], number>
}

export interface ServerSide {
  products: Array<Product>;
  banners: Array<Banner>;
}