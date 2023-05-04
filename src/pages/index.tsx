import styled from 'styled-components'
import { Swiper as ASwiper } from 'antd-mobile'
import daojishiGif from '../assets/images/daojishi.gif'
import DetailImage, { Image } from '@/components/ui/detail-image'
import { NextPageWithLayout, registerLayout } from './_app'
import { ImageModuleType, StaticRequire } from 'global'
import { useRouter } from 'next/router'
import { readdir } from 'fs/promises'
import { join } from 'path'
import { cwd } from 'process'
type IndexProps = {
  details: ImageModuleType[]
  swiperImgs: ImageModuleType[]
}
const Main = styled.main`
  width: 100%;
`
const Swiper = styled(ASwiper)``
const Index: NextPageWithLayout<IndexProps> = ({ details, swiperImgs }) => {
  const router = useRouter()
  const onNavigateComments = (e: ImageModuleType) => {
    if (e.id === 1) {
      router.push('/comments')
    }
  }
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
          {swiperImgs.map((e, idx) => (
            <Swiper.Item key={e.id}>
              <Image priority={[0, 4].includes(idx)} src={e.src} alt={e.alt} />
            </Swiper.Item>
          ))}
        </Swiper>
        <DetailImage src={daojishiGif} alt="活动倒计时" />
        {details.map((e) => (
          <DetailImage
            key={e.id}
            src={e.src}
            alt={e.alt}
            priority
            onClick={() => onNavigateComments(e)}
          />
        ))}
      </Main>
    </>
  )
}
export async function getStaticProps() {
  const getImportImgs = async (pattern: RegExp, altText: string) => {
    const files = (
      await readdir(join(cwd(), 'src', 'assets', 'images'))
    ).filter((e) => e.match(pattern))
    return await Promise.all(
      files.map(async (e, idx) => {
        const importedModule = (await import(
          `@/assets/images/${e}`
        )) as StaticRequire
        return {
          id: idx + 1,
          alt: `${altText}${idx + 1}`,
          src: importedModule.default,
        }
      })
    )
  }
  const swiperImgs = await getImportImgs(/^[1-5]\.jpg$/, '轮播图')
  const details = await getImportImgs(/^承接页2_0[1-6]\.jpg$/, '承接页')
  return { props: { swiperImgs, details } }
}
registerLayout(Index)
export default Index
