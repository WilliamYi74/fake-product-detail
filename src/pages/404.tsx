import styled from 'styled-components'

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`
const NotFound = () => {
  return <H1>您访问的页面不存在~</H1>
}
export default NotFound
