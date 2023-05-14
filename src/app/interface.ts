export interface Detail {
  img: string;
  title: string;
  subtitle: string;
}

export interface Card {
  img: string;
  name: string;
  price: number;
  id: number;
  quantity: number;
}

export interface faq {
  title: string;
  detail: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  total: number;
}
