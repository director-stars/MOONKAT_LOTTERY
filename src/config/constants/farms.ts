import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MKATS-BUSD LP',
    lpAddresses: {
      97: '',
      // 56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // 56: '0x9231984fb7b023b32c515e2425695fde81337ae8',
      56: '0x870B37cDd7698F0561F1d085250ACa5764911046', // MKATS-BUSD
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      // 56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      // 56: '0xC5f6Fa9e193DF57272C59Bbf5AD8bAAAf9959Ec8',
      56: '0x509949c4ee0c1c2c765cf9b23c75d823981e22ae', // MKATS
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'MKATS-BNB LP',
    lpAddresses: {
      97: '',
      // 56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      // 56: '0x05b96ee199c91d65fe7da8ba97eed97e1dd69b20',
      56: '0x360C6A3d31cd33310778dA84CC0B23a62aDb22B4', // MKATS-BNB LP
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      // 56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      // 56: '0xC5f6Fa9e193DF57272C59Bbf5AD8bAAAf9959Ec8',
      56: '0x302Cb6374D88A2FD7411a5bDfBB49cEb081A19Ae', // MKATS
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 5,
    lpSymbol: 'MKAT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB5891f5FfB831fEefAe58e336952023D8684FBD8',
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      56: '0xc25d94fc3f8d7bd1d88f89802fe075338f71dec7', // MKAT
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'MKAT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7BCa66FcB7cc48186DE564F0084145230B0Ec9E5',
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      56: '0xc25d94fc3f8d7bd1d88f89802fe075338f71dec7', // MKAT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    lpSymbol: 'MKATS-MKAT LP',
    lpAddresses: {
      97: '',
      56: '0x6DF4dE646440f0Ed2e787484Fdf829E822b7b5AD',
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      56: '0xc25d94fc3f8d7bd1d88f89802fe075338f71dec7',
    },
    quoteTokenSymbol: QuoteToken.MKAT,
    quoteTokenAdresses: contracts.cake,
  },
  // {
  //   pid: 8,
  //   risk: 1,
  //   lpSymbol: 'USDT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
  //   },
  //   tokenSymbol: 'MKATS',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.UST,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 100,
    risk: 5,
    lpSymbol: 'MKATS-MKAT LP',
    lpAddresses: {
      97: '',
      56: '0x6DF4dE646440f0Ed2e787484Fdf829E822b7b5AD',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xc25d94fc3f8d7bd1d88f89802fe075338f71dec7',
    },
    quoteTokenSymbol: QuoteToken.MKAT,
    quoteTokenAdresses: contracts.cake,
  },
  // {
  //   pid: 5,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   risk: 1,
  //   lpSymbol: 'DAI-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 7,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   lpSymbol: 'DOT-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c',
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 5,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 6,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MKATS',
    lpAddresses: {
      97: '',
      // 56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
      // 56: '0x9231984fb7b023b32c515e2425695fde81337ae8', // EGG-BUSD LP
      56: '0x870B37cDd7698F0561F1d085250ACa5764911046', // MKATS-BUSD LP
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      // 56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      // 56: '0xC5f6Fa9e193DF57272C59Bbf5AD8bAAAf9959Ec8',
      56: '0x509949c4ee0c1c2c765cf9b23c75d823981e22ae',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MKAT',
    lpAddresses: {
      97: '',
      // 56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
      // 56: '0x9231984fb7b023b32c515e2425695fde81337ae8', // EGG-BUSD LP
      56: '0x6DF4dE646440f0Ed2e787484Fdf829E822b7b5AD', // MKAT-BUSD LP
    },
    tokenSymbol: 'MKATS',
    tokenAddresses: {
      97: '',
      // 56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      // 56: '0xC5f6Fa9e193DF57272C59Bbf5AD8bAAAf9959Ec8',
      56: '0xc25d94fc3f8d7bd1d88f89802fe075338f71dec7',
    },
    quoteTokenSymbol: QuoteToken.MKATS,
    quoteTokenAdresses: contracts.mkats,
  },
  // {
  //   pid: 5,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'MKATS',
  //   lpAddresses: {
  //     97: '',
  //     // 56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //     // 56: '0x9231984fb7b023b32c515e2425695fde81337ae8', // EGG-BUSD LP
  //     56: '0x870B37cDd7698F0561F1d085250ACa5764911046', // MKATS-BUSD LP
  //   },
  //   tokenSymbol: 'MKATS',
  //   tokenAddresses: {
  //     97: '',
  //     // 56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //     // 56: '0xC5f6Fa9e193DF57272C59Bbf5AD8bAAAf9959Ec8',
  //     56: '0x509949c4ee0c1c2c765cf9b23c75d823981e22ae',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 13,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 14,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 15,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 17,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 18,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'DAI',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
  //   },
  //   tokenSymbol: 'DAI',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 19,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 20,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'DOT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
  //   },
  //   tokenSymbol: 'DOT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 21,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BSCX',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa32a983a64ce21834221aa0ad1f1533907553136', // BSCX-BUSD LP
  //   },
  //   tokenSymbol: 'BSCX',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 23,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'AUTO',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4d0228ebeb39f6d2f29ba528e2d15fc9121ead56', // AUTO-BNB LP
  //   },
  //   tokenSymbol: 'AUTO',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xa184088a740c695e156f91f5cc086a06bb78b827',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
]

export default farms
