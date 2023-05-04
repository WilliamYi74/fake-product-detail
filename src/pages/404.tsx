import styled from 'styled-components'
import { registerLayout } from './_app'

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`
const NotFound = () => {
  return <H1>您访问的页面不存在~</H1>
}
registerLayout(NotFound)
export default NotFound
