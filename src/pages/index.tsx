import styled from 'styled-components'
import { Swiper as ASwiper } from 'antd-mobile'
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import daojishiGif from '../assets/images/daojishi.gif'
import detailImg1 from '../assets/images/承接页2_01.3.jpg'
import detailImg2 from '../assets/images/承接页2_02.jpg'
import detailImg3 from '../assets/images/承接页2_03.jpg'
import detailImg4 from '../assets/images/承接页2_04.jpg'
import detailImg5 from '../assets/images/承接页2_05.jpg'
import detailImg6 from '../assets/images/承接页2_06.jpg'
import DetailImage, { Image } from '@/components/ui/detail-image'
import { NextPageWithLayout, registerLayout } from './_app'
const Main = styled.main`
  width: 100%;
`
const Swiper = styled(ASwiper)``
const images = [img1, img2, img3, img4, img5]
const Index: NextPageWithLayout<{}> = () => {
  return (
    <>
      <Main>
        <Swiper
          loop
          indicatorProps={{
            style: {
              '--dot-color': 'rgba(255, 255, 255, 0.5)',
              '--active-dot-color': '#ff5000',
              '--dot-size': '1.6vw',
              '--active-dot-size': '1.6vw',
              '--dot-border-radius': '50%',
              '--active-dot-border-radius': '50%',
              '--dot-spacing': '0.4vw',
            },
          }}
        >
          {images.map((src, idx) => (
            <Swiper.Item key={idx}>
              <Image priority={[0, 4].includes(idx)} src={src} alt="轮播图" />
            </Swiper.Item>
          ))}
        </Swiper>
        <DetailImage src={daojishiGif} alt="活动倒计时" />
        <DetailImage src={detailImg1} alt="承接页1" priority />
        <DetailImage src={detailImg2} alt="承接页2" priority />
        <DetailImage src={detailImg3} alt="承接页3" priority />
        <DetailImage src={detailImg4} alt="承接页4" priority />
        <DetailImage src={detailImg5} alt="承接页5" priority />
        <DetailImage src={detailImg6} alt="承接页6" priority />
      </Main>
    </>
  )
}
registerLayout(Index)
export default Index
