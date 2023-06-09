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
  FRONT_END = 'Front End',
  BACK_END = 'Back End',
  FULL_STACK = 'Full Stack',
  ALL='All'
}
