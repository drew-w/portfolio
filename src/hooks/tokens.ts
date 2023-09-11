//Types
import { Token } from '@./types/tokens'

export const data: Token[] = [
  // {
  //   id: 1021,
  //   name: 'USDT',
  //   key: 'usdt',
  //   decimals: 18,
  //   contractAddress: '0x7ef95a0fee0dd31b22626fa2e10ee6a223f8a684',
  //   type: 'bep20',
  //   uiConfig: {
  //     name: 'Tether',
  //     symbol: 'USDT',
  //     onPancake: true,
  //     tokenLogo:
  //       'https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png',
  //     unitLabel: 'USDT',
  //     brandColor: '#50AF95',
  //     valueHidden: false,
  //     unitLabelAbbr: 'USDT',
  //     hideMarketValue: false
  //   },
  //   tax: 0,
  //   routeToDebt: ['usdt', 'debt'],
  //   pair: null,
  //   marketValueNow: '1',
  //   marketValue24HrsAgo: '1'
  // },
  // {
  //   id: 1022,
  //   name: 'USDC',
  //   key: 'usdc',
  //   decimals: 18,
  //   contractAddress: '0x64544969ed7EBf5f083679233325356EbE738930',
  //   type: 'bep20',
  //   uiConfig: {
  //     name: 'USD Coin',
  //     symbol: 'USDC',
  //     onPancake: true,
  //     tokenLogo:
  //       'https://seeklogo.com/images/U/usd-coin-usdc-logo-CB4C5B1C51-seeklogo.com.png',
  //     unitLabel: 'USDC',
  //     brandColor: '#2775CA',
  //     valueHidden: false,
  //     unitLabelAbbr: 'USDC',
  //     hideMarketValue: false
  //   },
  //   tax: 0,
  //   routeToDebt: ['usdc', 'usdt', 'debt'],
  //   pair: null,
  //   marketValueNow: '1',
  //   marketValue24HrsAgo: '1'
  // },
  {
    id: 1020,
    name: 'ALUM',
    key: 'alum',
    decimals: 8,
    contractAddress: '0x3988f8ff5Fb5340446a3d0EC40A02298c9BB7c0c',
    type: 'bep20',
    uiConfig: {
      name: 'Aluminum',
      symbol: 'ALUM',
      onPancake: false,
      tokenLogo:
        'https://debt-static.s3.amazonaws.com/web/tokens/alum/ALUM-360x360.png',
      unitLabel: 'alum',
      brandColor: '#FE8501',
      comingSoon: false,
      valueHidden: false,
      unitLabelAbbr: 'alum',
      atomicUnitLabel: 'al',
      hideMarketValue: false,
      comingSoonHidden: false,
      atomicUnitLabelAbbr: 'can'
    },
    tax: 10,
    routeToDebt: ['alum', 'debt'],
    pair: '0x1387C80a7d90b4294CCB3602C8f838b7E796A6f6',
    marketValueNow: '0.003257',
    marketValue24HrsAgo: '0.003257'
  },
  {
    id: 7,
    name: 'GROW',
    key: 'grow',
    decimals: 8,
    contractAddress: '0xc4F68B5e69a495C20253562E7ce88fBf67B5B23c',
    type: 'bep20',
    uiConfig: {
      name: 'Grow',
      symbol: 'GROW',
      onPancake: true,
      tokenLogo:
        'https://debt-static.s3.amazonaws.com/web/tokens/grow/GROW-360x360.png',
      unitLabel: 'grow',
      brandColor: '#0BF446',
      valueHidden: false,
      unitLabelAbbr: 'grow',
      atomicUnitLabel: 'sprouts',
      hideMarketValue: false,
      atomicUnitLabelAbbr: 'sprt'
    },
    tax: 10,
    routeToDebt: ['grow', 'debt'],
    pair: '0x9c2dE8641d66648Ceb09Fc27db5eB866509a3c3F',
    marketValueNow: '0.05139',
    marketValue24HrsAgo: '0.04697'
  },
  {
    id: 1000,
    name: 'NATG',
    key: 'natg',
    decimals: 8,
    contractAddress: '0x939e5D3bA5808e2EDf643AfF67cA8501878000b1',
    type: 'bep20',
    uiConfig: {
      brandColor: '#77C3EC',
      name: 'NaturalGas',
      symbol: 'NATG',
      onPancake: true,
      tokenLogo:
        'https://debt-static.s3.amazonaws.com/web/tokens/natg/NATG-360x360.png',
      unitLabel: 'natg',
      valueHidden: false,
      unitLabelAbbr: 'natg',
      atomicUnitLabel: 'fumes',
      hideMarketValue: false,
      atomicUnitLabelAbbr: 'fumes'
    },
    tax: 10,
    routeToDebt: ['natg', 'debt'],
    pair: '0x0A21105c26BB95dd50e056C5203ac3652Cc46211',
    marketValueNow: '0.0000564',
    marketValue24HrsAgo: '0.0000387'
  },
  {
    id: 2,
    name: 'DEBT',
    key: 'debt',
    decimals: 8,
    contractAddress: '0xc1C39Cf2303AA340f2ac7404E831b2d19fB6a860',
    type: 'bep20',
    uiConfig: {
      name: 'DEBT',
      symbol: 'DEBT',
      onPancake: true,
      tokenLogo:
        'https://debt-static.s3.amazonaws.com/web/tokens/debt/DEBT-360x360.png',
      unitLabel: 'debt',
      brandColor: '#67EDD0',
      valueHidden: false,
      unitLabelAbbr: 'debt',
      atomicUnitLabel: 'pips',
      atomicUnitLabelAbbr: 'pips'
    },
    tax: 0,
    routeToDebt: ['debt'],
    pair: '0xbe46815e0f0123ad626b82a0166eaa32274104f5',
    marketValueNow: '3.56',
    marketValue24HrsAgo: '3.48'
  },
  {
    id: 8,
    name: 'BNB',
    key: 'bnb',
    decimals: 18,
    contractAddress: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    type: 'bnb',
    uiConfig: {
      name: 'BNB',
      symbol: 'BNB',
      onPancake: true,
      tokenLogo:
        'https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png',
      unitLabel: 'BNB',
      brandColor: '#FCD535',
      valueHidden: false,
      unitLabelAbbr: 'BNB',
      atomicUnitLabel: 'wei',
      atomicUnitLabelAbbr: 'wei',
      rewardsUnitToDisplay: null
    },
    tax: 0,
    routeToDebt: ['bnb', 'debt'],
    pair: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    marketValueNow: '232.065',
    marketValue24HrsAgo: '237.5'
  },
  // {
  //   id: 4,
  //   name: 'LBGLD',
  //   key: 'lbgld',
  //   decimals: 9,
  //   contractAddress: '0x8C51D82016f721287E65F66E72906D991Dc6bE7D',
  //   type: 'bep20',
  //   uiConfig: {
  //     name: 'Legacy BlackGold',
  //     symbol: 'BGLD',
  //     onPancake: false,
  //     tokenLogo:
  //       'https://debt-static.s3.amazonaws.com/web/tokens/bgld/BGLD-360x360.png',
  //     unitLabel: 'bgld',
  //     brandColor: '#8F37D4',
  //     valueHidden: false,
  //     unitLabelAbbr: 'bgld',
  //     atomicUnitLabel: 'squirts',
  //     atomicUnitLabelAbbr: 'sqt'
  //   },
  //   tax: 10,
  //   routeToDebt: ['bgld', 'debt'],
  //   pair: '0x429339fa7A2f2979657B25ed49D64d4b98a2050d',
  //   marketValueNow: '0.02943',
  //   marketValue24HrsAgo: '0.02943'
  // },
  {
    id: 1027,
    name: 'BGLD',
    key: 'bgld',
    decimals: 8,
    contractAddress: '0xF1ed77457eE1dDe67D5328B6D4C3EE5B5d5009Ed',
    type: 'bep20',
    uiConfig: {
      name: 'BlackGold',
      symbol: 'BGLD',
      onPancake: true,
      tokenLogo:
        'https://debt-static.s3.amazonaws.com/web/tokens/bgld/BGLD-360x360.png',
      unitLabel: 'bgld',
      brandColor: '#8F37D4',
      valueHidden: false,
      unitLabelAbbr: 'bgld',
      atomicUnitLabel: 'squirts',
      atomicUnitLabelAbbr: 'sqt'
    },
    tax: 10,
    routeToDebt: ['bgld', 'debt'],
    pair: '0x559D0deAcAD259d970f65bE611f93fCCD1C44261',
    marketValueNow: '0.0006418',
    marketValue24HrsAgo: '0.0005576'
  },
  // {
  //   id: 1,
  //   name: 'LDLG',
  //   key: 'ldlg',
  //   decimals: 15,
  //   contractAddress: '0xCe915b445B2366F4c09425a85F3B97194A378f45',
  //   type: 'bep20',
  //   uiConfig: {
  //     name: 'Legacy Digital Gold',
  //     symbol: 'LDLG',
  //     tokenLogo:
  //       'https://debt-static.s3.amazonaws.com/web/tokens/dlg/DLG-360x360.png',
  //     unitLabel: 'grams',
  //     brandColor: '#FFED41',
  //     valueHidden: false,
  //     unitLabelAbbr: 'g',
  //     atomicUnitLabel: 'femtograms',
  //     atomicUnitLabelAbbr: 'fg'
  //   },
  //   tax: 0,
  //   routeToDebt: ['ldlg', 'debt'],
  //   pair: '0xa92a722f6787ab139030b42107be8cf995e7f3bb',
  //   marketValueNow: '66.95',
  //   marketValue24HrsAgo: '66.95'
  // },
  {
    id: 1019,
    name: 'XPLR',
    key: 'xplr',
    decimals: 8,
    contractAddress: '0x646318fC90E67a731E7488daC9543473D204869E',
    type: 'bep20',
    uiConfig: {
      name: 'Explore',
      symbol: 'XPLR',
      onPancake: false,
      tokenLogo:
        'https://debt-static.s3.amazonaws.com/web/tokens/xplr/XPLR-360x360.png',
      unitLabel: 'xplr',
      brandColor: '#CD019A',
      comingSoon: false,
      valueHidden: false,
      unitLabelAbbr: 'xplr',
      atomicUnitLabel: 'blip',
      hideMarketValue: true,
      comingSoonHidden: false,
      atomicUnitLabelAbbr: 'blip'
    },
    tax: 10,
    routeToDebt: ['xplr', 'debt'],
    pair: '0x21310349acD9f1F422eac0247487E77859627b4d',
    marketValueNow: '0.002408',
    marketValue24HrsAgo: '0.002408'
  },
  {
    id: 1025,
    name: 'BEV',
    key: 'bev',
    decimals: 8,
    contractAddress: '0x955F6D2Cc822314AEe73CD755184FBd85B56Aff9',
    type: 'bep20',
    uiConfig: {
      name: 'Beverage',
      symbol: 'BEV',
      tokenLogo: 'https://assets.thedebtbox.com/web/tokens/bev/BEV-360x360.png',
      unitLabel: 'bev',
      brandColor: '#B01D53',
      comingSoon: false,
      valueHidden: false,
      unitLabelAbbr: 'bev',
      atomicUnitLabel: 'sip',
      hideMarketValue: true,
      comingSoonHidden: false,
      brandColorAltShade: '#A52251',
      atomicUnitLabelAbbr: 'sip'
    },
    tax: 10,
    routeToDebt: ['bev', 'debt'],
    pair: null,
    marketValueNow: '1.15',
    marketValue24HrsAgo: '1.15'
  },
  {
    id: 1030,
    name: 'DCM',
    key: 'dcm',
    decimals: 8,
    contractAddress: '0x9Efa8f12fd336b1d0dAbE68534A193e71444491B',
    type: 'bep20',
    uiConfig: {
      name: 'Data Center Mining',
      symbol: 'DCM',
      onPancake: true,
      tokenLogo: 'https://assets.thedebtbox.com/web/tokens/dcm/DCM-360x360.png',
      unitLabel: 'dcm',
      brandColor: ' #8484EF',
      comingSoon: false,
      valueHidden: false,
      unitLabelAbbr: 'dcm',
      atomicUnitLabel: 'bits',
      hideMarketValue: false,
      brandColorAltShade: '#7575E1',
      atomicUnitLabelAbbr: 'bits'
    },
    tax: 10,
    routeToDebt: ['dcm', 'debt'],
    pair: null,
    marketValueNow: '0.00001',
    marketValue24HrsAgo: '0.00001'
  },
  {
    id: 1026,
    name: 'BLOX',
    key: 'blox',
    decimals: 8,
    contractAddress: '0xAb8EbeBF8c3ED052D4d33340440Aa97e9A8F0C6E',
    type: 'bep20',
    uiConfig: {
      name: 'BloxRealEstate',
      symbol: 'BLOX',
      tokenLogo:
        'https://assets.thedebtbox.com/web/tokens/blox/BLOX-360x360.png',
      unitLabel: 'blox',
      brandColor: '#32A7EE',
      comingSoon: false,
      valueHidden: false,
      unitLabelAbbr: 'blox',
      atomicUnitLabel: 'bloxfragment',
      hideMarketValue: true,
      comingSoonHidden: false,
      brandColorAltShade: '#029BDF',
      atomicUnitLabelAbbr: 'bloxfragment'
    },
    tax: 10,
    routeToDebt: ['blox', 'debt'],
    pair: null,
    marketValueNow: '0.0029',
    marketValue24HrsAgo: '0.0029'
  },
  {
    id: 1028,
    name: 'DLG',
    key: 'dlg',
    decimals: 8,
    contractAddress: '0x4a29B75E070688bFFeACdfBc8930F3cC88aB43Cc',
    type: 'bep20',
    uiConfig: {
      name: 'Digital Gold',
      symbol: 'DLG',
      tokenLogo: 'https://assets.thedebtbox.com/web/tokens/dlg/DLG-360x360.png',
      unitLabel: 'dlg',
      brandColor: '#FFED41',
      comingSoon: false,
      valueHidden: false,
      unitLabelAbbr: 'dlg',
      atomicUnitLabel: 'femtograms',
      hideMarketValue: false,
      comingSoonHidden: false,
      brandColorAltShade: '#E9C113',
      atomicUnitLabelAbbr: 'femtograms'
    },
    tax: 10,
    routeToDebt: ['dlg', 'debt'],
    pair: null,
    marketValueNow: '0.06695',
    marketValue24HrsAgo: '0.06695'
  },
  // {
  //   id: 1013,
  //   name: 'BTCB',
  //   key: 'btcb',
  //   decimals: 18,
  //   contractAddress: '0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8',
  //   type: 'bep20',
  //   uiConfig: {
  //     name: 'Bitcoin',
  //     symbol: 'BTCB',
  //     onPancake: true,
  //     tokenLogo:
  //       'https://assets.thedebtbox.com/web/tokens/btcb/btcb-300x300.png',
  //     unitLabel: 'BTCB',
  //     brandColor: '#f79413',
  //     valueHidden: false,
  //     unitLabelAbbr: 'BTCB'
  //   },
  //   tax: 0,
  //   routeToDebt: ['btcb', 'usdt', 'debt'],
  //   pair: '0x46cf1cf8c69595804ba91dfdd8d6b960c9b0a7c4',
  //   marketValueNow: '28936.19',
  //   marketValue24HrsAgo: '29214.18'
  // },
  {
    id: 1029,
    name: 'DRIP',
    key: 'drip',
    decimals: 8,
    contractAddress: '0xa0D4891f14ca5E17C39331f7334A2D9e7A236C99',
    type: 'bep20',
    uiConfig: {
      name: 'Drip',
      symbol: 'DRIP',
      tokenLogo:
        'https://assets.thedebtbox.com/web/tokens/drip/DRIP-360x360.png',
      unitLabel: 'drip',
      brandColor: '#2E17CE',
      comingSoon: false,
      valueHidden: false,
      unitLabelAbbr: 'drip',
      atomicUnitLabel: 'drop',
      hideMarketValue: true,
      comingSoonHidden: false,
      brandColorAltShade: '#38B204',
      atomicUnitLabelAbbr: 'drop'
    },
    tax: 10,
    routeToDebt: ['drip', 'debt'],
    pair: null,
    marketValueNow: '0.5',
    marketValue24HrsAgo: '0.5'
  }
  // {
  //   id: 1032,
  //   name: 'REV',
  //   key: 'rev',
  //   decimals: 8,
  //   contractAddress: '0x0A327dF3CB50fc6067ed68273192E49443549824',
  //   type: 'bep20',
  //   uiConfig: {
  //     name: 'Rev Exotic Vehicles',
  //     symbol: 'REV',
  //     tokenLogo: 'https://assets.thedebtbox.com/web/tokens/rev/REV-360x360.png',
  //     unitLabel: 'rev',
  //     brandColor: '#E22030',
  //     comingSoon: false,
  //     valueHidden: true,
  //     unitLabelAbbr: 'rev',
  //     atomicUnitLabel: 'rpms',
  //     hideMarketValue: true,
  //     comingSoonHidden: false,
  //     brandColorAltShade: '#DC063A',
  //     atomicUnitLabelAbbr: 'rpms'
  //   },
  //   tax: 10,
  //   routeToDebt: ['rev', 'debt'],
  //   pair: null,
  //   marketValueNow: '0.00001',
  //   marketValue24HrsAgo: '0.00001'
  // }
]

export const tokenValues = [
  {
    name: 'Page A',
    tokenPrice: 400
  },
  {
    name: 'Page B',
    tokenPrice: 300
  },
  {
    name: 'Page B',
    tokenPrice: 15
  },
  {
    name: 'Page B',
    tokenPrice: 100
  },
  {
    name: 'Page B',
    tokenPrice: 1
  }
]
