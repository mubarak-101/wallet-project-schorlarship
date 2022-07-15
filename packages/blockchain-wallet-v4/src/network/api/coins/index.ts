import {
  BalanceResponseType,
  BuildTxIntentType,
  BuildTxResponseType,
  DeriveAddressResponseType,
  IndexMultiResponseType,
  PubkeyServiceAuthenticationInRequestType,
  PubkeyServiceAuthenticationRequestType,
  PubkeyServiceSubscriptions,
  TickerResponseType,
  TxHistoryResponseType
} from './types'

export default ({ apiUrl, get, post }) => {
  const deriveAddress = (coin: string, pubKey: string): DeriveAddressResponseType => {
    return post({
      contentType: 'application/json',
      data: {
        pubKey
      },
      // TODO: SELF_CUSTODY
      endPoint: `/currency/stx/deriveAddress`,
      url: apiUrl
    })
  }

  const validateAddress = (coin: string, address: string): { success: boolean } => {
    return post({
      contentType: 'application/json',
      data: {
        address
      },
      // TODO: SELF_CUSTODY
      endPoint: `/currency/stx/validateAddress`,
      url: apiUrl
    })
  }

  const buildTx = (data: {
    id: { guid: string; uuid: string }
    intent: BuildTxIntentType
  }): BuildTxResponseType => {
    data.intent.maxVerificationVersion = 2

    return post({
      contentType: 'application/json',
      data,
      // TODO: SELF_CUSTODY
      endPoint: `/currency/stx/buildTx`,
      removeDefaultPostData: true,
      url: apiUrl
    })
  }

  const pushTx = (
    currency: string,
    rawTx: BuildTxResponseType['rawTx'],
    signatures: BuildTxResponseType['preImages'],
    id: { guid: string; uuid: string }
  ): { txId: string } => {
    return post({
      contentType: 'application/json',
      data: {
        currency,
        id,
        rawTx,
        signatures
      },
      // TODO: SELF_CUSTODY
      endPoint: `/currency/stx/pushTx`,
      removeDefaultPostData: true,
      url: apiUrl
    })
  }

  const balance = (
    pubKeys: { descriptor: 'default' | 'legacy'; pubKey: string; style: 'SINGLE' }[]
  ): BalanceResponseType => {
    return post({
      contentType: 'application/json',
      data: {
        pubKeys
      },
      // TODO: SELF_CUSTODY
      endPoint: `/currency/stx/balance`,
      removeDefaultPostData: true,
      url: apiUrl
    })
  }

  const txHistory = (
    pubKeys: { descriptor: 'default' | 'legacy'; pubKey: string; style: 'SINGLE' }[]
  ): TxHistoryResponseType => {
    return post({
      contentType: 'application/json',
      data: {
        pubKeys
      },
      // TODO: SELF_CUSTODY
      endPoint: `/currency/stx/txHistory`,
      removeDefaultPostData: true,
      url: apiUrl
    })
  }

  const authWalletPubkeyService = ({
    guid,
    sharedKeyHash
  }: PubkeyServiceAuthenticationRequestType) =>
    post({
      contentType: 'application/json',
      data: {
        guid,
        sharedKeyHash
      },
      endPoint: '/wallet-pubkey/auth',
      removeDefaultPostData: true,
      url: apiUrl
    })

  const getCoinPrices = (
    coins: { base: string; quote: string }[],
    timestamp?: number
  ): IndexMultiResponseType =>
    post({
      contentType: 'application/json',
      data: coins,
      endPoint: timestamp ? `/price/index-multi?time=${timestamp}` : '/price/index-multi',
      removeDefaultPostData: true,
      url: apiUrl
    })

  const getSubscriptions = ({
    guidHash,
    sharedKeyHash
  }: PubkeyServiceAuthenticationInRequestType): PubkeyServiceSubscriptions =>
    post({
      contentType: 'application/json',
      data: {
        guidHash,
        sharedKeyHash
      },
      endPoint: '/wallet-pubkey/subscriptions',
      removeDefaultPostData: true,
      url: apiUrl
    })

  // 🔥
  // BTC price ticker is used to triangulate FIAT prices
  const getBtcTicker = (): TickerResponseType =>
    get({
      data: { base: 'BTC' },
      endPoint: '/ticker',
      url: apiUrl
    })

  return {
    authWalletPubkeyService,
    balance,
    buildTx,
    deriveAddress,
    getBtcTicker,
    getCoinPrices,
    getSubscriptions,
    pushTx,
    txHistory,
    validateAddress
  }
}