export class UserModel{
  constructor(
    public id: number,
    public email: string,
    public name: string,
    public type: 'client' | 'company'
  ){}
}