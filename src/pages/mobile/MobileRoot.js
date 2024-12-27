import React from 'react'
import MobileHeader from './MobileHeader'
import { Outlet } from 'react-router-dom'
import MobileFooter from './MobileFooter'
import MobileMainLayout from './MobileMainLayout'

export default function MobileRoot() {
  return (
    <div>
      <MobileHeader />
      <MobileMainLayout>
        <Outlet />
      </MobileMainLayout>
      <MobileFooter />
    </div>
  )
}
