import React from 'react'
import Visual from '../components/visual/Visual'
import ContentsMain from '../components/contents_main/ContentsMain'
import Ad from '../components/ad/Ad'
import ContentsSub from '../components/contents_sub/ContentsSub'

export default function Main() {
  return (
    <div>
      <Visual/>
      <ContentsMain/>
      <Ad/>
      <ContentsSub/>
    </div>
  )
}
