export interface Button {
  img?: string | undefined
  text: string
  to: string
}

export interface Product {
  name?: string | undefined
  img?: string | undefined
  alt?: string | undefined
  title: string
  slogan?: string | undefined
  price?: string | string[] | undefined
  text: string[]
}

// export interface Action {
//   action: string
// }

export interface Content {
  nav: Button[]
  self: Product
  prod: Product[]
  extras: Product
  action: string
}
