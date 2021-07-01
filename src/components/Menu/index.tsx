import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/hooks'
import { Menu as UikitMenu } from 'MOONKAT_uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd.toNumber()}
      links={config}
      priceLink="https://testnet.bscscan.com/token/0x5f6Ef6608B3deb84A38d12Bce535Fdd6aB195A66"
      {...props}
    />
  )
}

export default Menu
