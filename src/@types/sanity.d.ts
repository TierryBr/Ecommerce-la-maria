export interface Product {
  name: string;
  price: number;
  image: [];
  details: string;
  slug: {
    _type: string;
    current: string;
  }
}

export interface Banner {
  buttonText: string;
  desc: string;
  discount: string;
  details: string;
  image: {};
  largeText1: string;
  largeText2: string;
  midText: string;
  product: string;
  saleTIme: string;
  smallText: string;
}

export interface ProductProps {
  products: Array<Product>
}

export interface BannerProps {
  banner: Array<Banner[], number>
}

export interface ServerSide {
  products: Array<Product>;
  bannerData: Array<Banner>;
}