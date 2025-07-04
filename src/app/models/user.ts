export interface User {
  id: number
  name: string
  email: string
  phone: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
