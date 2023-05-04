import DetailImage from '@/components/ui/detail-image'
import styled from 'styled-components'
import { NextPageWithLayout } from './_app'
import { ImageModuleType, StaticRequire } from 'global'
import { cwd } from 'process'
import { join } from 'path'
import { readdir } from 'fs/promises'
type CommentsProps = {
  pingjiaImgs: ImageModuleType[]
}
const Main = styled.main`
  width: 100%;
`

const Comments: NextPageWithLayout<CommentsProps> = ({ pingjiaImgs }) => {
  return (
    <Main>
      {pingjiaImgs.map((e) => (
        <DetailImage key={e.id} src={e.src} alt={e.alt} />
      ))}
    </Main>
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
  const pingjiaImgs = await getImportImgs(/评价_(0[1-9]|1[0-1])\.jpg/, '评价图')
  return {
    props: {
      pingjiaImgs,
    },
  }
}
export default Comments
