import Home24 from '@carbon/icons-react/es/Home'
import {HeaderGlobalAction} from 'carbon-components-react'
import React from 'react'
import {bahmniHomePath} from '../../utils/constants'
import styles from './home-button.scss'

const HomeButton = () => {
  return (
    <HeaderGlobalAction
      aria-label="Home"
      className={styles.headerGlobalBarButton}
      onClick={() => {
        window.location.href = bahmniHomePath
      }}
    >
      <Home24 className={styles.home} />
    </HeaderGlobalAction>
  )
}

export default HomeButton
