export interface Card {
  id: string | number;
  title: string;
  subtitle: string,
  company: string;
  location: string;
  salary: number;
  category: string;
  thumbnail: string;
  isactive?: boolean;
}

// export enum Brand {
//   APPLE = 'Apple',
//   SAMSUNG = 'Samsung',
//   OPPO = 'Oppo',
//   HUAWEI = 'Huawei'
// }

export enum Category {
  FRONT_END = 'front end',
  BACK_END = 'back end',
  FULL_STACK = 'full stack end',
  ALL='All'
}
