import { NextResponse } from 'next/server'
import { RouteParams } from '@utils/constants'

export async function GET () {
  const res = await fetch(
    `${RouteParams.baseURL}${RouteParams.baseId}/${RouteParams.tableId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        // 'API-Key': process.env.AIRTABLE_API_TOKEN!,
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`
      },
      cache: 'no-cache'
    }
  )
  const data = await res.json()
  const records = data.records

  const formattedRecords = records.map((record: any) => {
    const formatted: any = {}
    const { fields } = record

    formatted.address = fields['Business Address']
    formatted.description = fields['Business Description']
    formatted.businessPlan = {
      externalUrl: fields['Business Plan']?.[0]?.url,
      externalPreview: fields['Business Plan']?.[0]?.thumbnails.large.url
    }
    formatted.businessLogo = fields['BusinessLogo']?.[0]?.url
    formatted.coverImage = fields['Cover Image']?.[0]?.url
    formatted.timeOpen = fields['How long has this business been open?']
    formatted.industry = fields['Industry']
    formatted.location = fields['Location of business registration']

    const ownerOne = {
      name: fields['Business Owner 1'],
      bio: fields['Owner1Bio'],
      email: fields['Owner 1: Email'],
      instagram: fields['Owner 1: Instagram'],
      linkedin: fields['Owner 1: LinkedIn'],
      phone: fields['Owner 1: Phone Number'],
      twitter: fields['Owner 1: Twitter']
    }
    const ownerTwo = fields['Business Owner 2'] && {
      name: fields['Business Owner 2'],
      bio: fields['Owner2Bio'],
      email: fields['Owner 2: Email'],
      instagram: fields['Owner 2: Instagram'],
      linkedin: fields['Owner 2: LinkedIn'],
      phone: fields['Owner 2: Phone Number'],
      twitter: fields['Owner 2: Twitter']
    }
    const ownerThree = fields['Business Owner 3'] && {
      name: fields['Business Owner 3'],
      bio: fields['Owner3Bio'],
      email: fields['Owner 3: Email'],
      instagram: fields['Owner 3: Instagram'],
      linkedin: fields['Owner 3: LinkedIn'],
      phone: fields['Owner 3: Phone Number'],
      twitter: fields['Owner 3: Twitter']
    }

    const ownerFour = fields['Business Owner 4'] && {
      name: fields['Business Owner 4'],
      bio: fields['Owner4Bio'],
      email: fields['Owner 4: Email'],
      instagram: fields['Owner 4: Instagram'],
      linkedin: fields['Owner 4: LinkedIn'],
      phone: fields['Owner 4: Phone Number'],
      twitter: fields['Owner 4: Twitter']
    }
    const owners = [ownerOne]
    ownerTwo && owners.push(ownerTwo)
    ownerThree && owners.push(ownerThree)
    ownerFour && owners.push(ownerFour)

    formatted.owners = owners
    formatted.pAndL = fields['Recent P&Ls']?.[0]?.url
    formatted.tokenIcon = fields['Token Icon']?.[0]?.url
    formatted.website = fields['Website']

    return formatted
  })

  return NextResponse.json(formattedRecords)
  // return NextResponse.json(data.records)
}
