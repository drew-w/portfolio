import { Token } from './tokens'

export interface Project {
  id: string
  name: string
  rewardsDistributerAddress: string
  microTokenAddress: string
  nftAddress: string
  token: Token
  uiConfig: {
    logoUri: string
    bannerUri: string
    primaryColor: string
  }
  createdAt: Date
  updatedAt: Date
}

//this 'projects' type was for the airtable marketplace
//I still want this here in case we put this back in.

// export interface Project {
//   address: string
//   description: string
//   businessPlan: {
//     externalUrl: string
//     externalPreview: string
//   }
//   businessLogo: string
//   location: string
//   coverImage: string
//   timeOpen: 'New Start-up' | '1-3 Years' | '3-5 Years' | 'More than 5 Years'
//   industry:
//     | 'Beverage'
//     | 'Real Estate'
//     | 'Hospitality'
//     | 'Resaurants/Bars'
//     | 'Entertainment'
//     | 'Other'
//   owners: Owner[]
//   pAndL: string
//   tokenIcon: string
//   website: string
// }

// export interface Owner {
//   bio: string
//   email: string
//   instagram: string
//   linkedin: string
//   name: string
//   phone: string
//   twitter: string
// }
