import styled from 'styled-components'
import NextImage from 'next/image'
import { StaticImport } from 'global'
type DetailImageProps = {
  src: string | StaticImport
  alt: string
  priority?: boolean
  onClick?: () => void
}
const ImgaeWrapper = styled.div``
export const Image = styled(NextImage)`
  display: block;
  width: 100%;
  height: auto;
`
const DetailImage = (props: DetailImageProps) => {
  return (
    <ImgaeWrapper>
      <Image {...props} />
    </ImgaeWrapper>
  )
}
export default DetailImage
