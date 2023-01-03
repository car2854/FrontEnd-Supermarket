import { CategoryModel } from "./category";
import { UserModel } from "./user.model";

export class ProductModel{
  constructor(
    public id:number,
    public description:string,
    public name:string,
    public user_table: UserModel,
    public category: CategoryModel,
    public price: number
  ){}
}