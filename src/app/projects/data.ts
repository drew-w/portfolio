import { Project } from '@./types/project'

export const projects: Project[] = [
  {
    title: 'DEBT DApp',
    image: '/dappStack.png',
    description:
      'Decentralized application for the DEBTBox coins and ecosystem. Users could connect any crypto wallet via Rainbowkit and buy/sell any coin in the DEBT ecosystem. All data was fetched using Wagmi, excecuting smart contracts on the BNB chain to facilitate trustless transactions and automate processes. The DApp was created by a front end team led by myself in close collaboration with a professional web designers.',
    stack: [
      'Wagmi',
      'Rainbowkit',
      'Solidity',
      'NextJS',
      'ChakraUI',
      'React Table'
    ],
    url: 'https://demo-preview.thedebtbox.com/home'
  },
  {
    title: 'DEBT Web Application',
    image: '/webStack.png',
    description:
      'A Web application where users within the DEBTBox ecosystem could purchase node mining licenses, software that connects to other nodes in the blockchain to receive token of the users choice. The hook of DEBT is that it is "eco friendly", since all coins are distributed to license holders equally, so the mining process requires no processing power. Users could look at their pending rewards, buy node licenses, send coin, and withdraw coin into their crypto wallets on this web application. At the time of the websites creation, I was the only front end developer, creating the whole website from scratch. Over time, I went back and refactored all older code, and adding new libraries such as Tanstack Query to make the experience much more optimized. I also was able to create some backend endpoints using Prisma to query our SQL database and return relevant data to the fron-end.',
    stack: ['Prisma', 'NextJS', 'Chakra UI', 'React Query'],
    url: 'https://app.thedebtbox.com'
  },
  {
    title: 'Xomly Collateral',
    image: '/xomly.png',
    description:
      'The Xomly mobile app is a sales, marketing and training software for outside sales teams. By combining the value of visual aids and the ease of mobile apps, sales teams can expect to stay ahead of their competition and increase their revenue. On this project, I was charge of a complete, app-wide UI overhaul, creating components according to the new designs and improving outdated code.',
    stack: ['React Native', 'Redux', 'Redux Saga', 'StyleSheet'],
    url: 'https://thedebtbox.page.link/8V2f'
  },
  {
    title: 'DEBT Marketing Website',
    image: '/ecoStack.png',
    description:
      'Static website containing information about the DEBT Box project. All DEBT Tokens have sections explaining the details of where the value comes from. I created most pages, following closely the direction of our web designers. Since this is a static website, we were able to take full advantage of NextJS, using the relevant GetStaticProps functions.',
    stack: ['NextJS', 'React Bootstrap'],
    url: 'https://www.thedebtbox.com'
  },
  {
    title: 'The Fair Project',
    image: '/fairStack.png',
    description:
      'The Fair project works in the exact same way as the DEBT web application, but is build around the FAIR ecosystem. I was again the lead front-end engineer and was able to create the web application while hitting strict deadlines, creating modern UI with Tailwind CSS, following closely the design that was provided to us.',
    stack: ['Prisma', 'NextJS', 'Tailwind CSS', 'React Query'],
    url: 'https://app.thefairproject.ai/login'
  }
]
