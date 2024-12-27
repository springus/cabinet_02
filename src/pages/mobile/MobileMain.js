import React from 'react'
import MobileVisual from '../../components/mobile/m_visual/MobileVisual'
import MobileCatchBook from '../../components/mobile/m_catchbook/MobileCatchBook'
import MobileAd from '../../components/mobile/m_ad/MobileAd'
import MobileBestGenre from '../../components/mobile/m_bestgenre/MobileBestGenre'
import MobileMovieBook from '../../components/mobile/m_moviebook/MobileMovieBook'
import MobileRecommend from '../../components/mobile/m_recommend/MobileRecommend'

export default function MobileMain() {
  return (
    <div>
      <MobileVisual />
      <MobileRecommend/>
      <MobileCatchBook />
      <MobileAd />
      {/* <MobileBestGenre /> */}
      <MobileMovieBook />
    </div>
  )
}
