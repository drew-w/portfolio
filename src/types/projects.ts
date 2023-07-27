export interface Project {
  address: string
  description: string
  businessPlan: {
    externalUrl: string
    externalPreview: string
  }
  businessLogo: string
  location: string
  coverImage: string
  timeOpen: 'New Start-up' | '1-3 Years' | '3-5 Years' | 'More than 5 Years'
  industry:
    | 'Beverage'
    | 'Real Estate'
    | 'Hospitality'
    | 'Resaurants/Bars'
    | 'Entertainment'
    | 'Other'
  owners: Owner[]
  pAndL: string
  tokenIcon: string
  website: string
}

export interface Owner {
  bio: string
  email: string
  instagram: string
  linkedin: string
  name: string
  phone: string
  twitter: string
}
