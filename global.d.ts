import { StaticImageData } from 'next/image'

export type ImageModuleType = {
  id: number
  alt: string
  src: string | StaticImageData
}
interface StaticRequire {
  default: StaticImageData
}
export type StaticImport = StaticRequire | StaticImageData
