export interface User {
  username: string,
  id: number,
  email: string,
  name: {
    lastname: string,
    firstname: string,
  }
  password: string,
}
export interface Cart {
  date: string
  id: number
  userId: number
  products: {
    quantity: number
    productId: number
  }[]
}
