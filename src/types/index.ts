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
  price?: string | string[]
  text: string[]
}

export interface Address {
  title: string
  street: string
  zip: string
  city: string
  country: string
}

export interface Contacts {
  title: string
  reg: string
  text: string[]
  email?: string
  phone?: string
  address: Address
  lat: number
  lng: number
}

export interface Social {
  icon: string
  name: string
  url: string
  tags: string[]
}

export interface Content {
  nav: Button[]
  self: Product
  prod: Product[]
  extras: Product
  action: string
  contacts: Contacts
  about: {
    title: string
    text: string[]
  }
}
