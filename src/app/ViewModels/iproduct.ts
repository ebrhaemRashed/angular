import {IRating} from "./irating";

export interface IProduct {
  id:number,
  title:string,
  price:number,
  category:string,
  description:string,
  image:string,
  rating:IRating
}
