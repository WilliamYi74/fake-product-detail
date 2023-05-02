import styled from 'styled-components'
import NextImage, { StaticImageData } from 'next/image'
interface StaticRequire {
  default: StaticImageData
}
type DetailImageProps = {
  src: string | StaticRequire | StaticImageData
  alt: string
  $height?: string | number
  priority?: boolean
}
const ImgaeWrapper = styled.div``
export const Image = styled(NextImage)<{ $height?: string | number }>`
  display: block;
  width: 100vw;
  height: ${(props) => props.$height || 'auto'};
`
const DetailImage = (props: DetailImageProps) => {
  return (
    <ImgaeWrapper>
      <Image {...props} />
    </ImgaeWrapper>
  )
}
export default DetailImage
