import { styled } from '@macaron-css/react'

import { theme } from '../shared/config/theme/theme'
import { Pages } from '../pages'
import './styles'

const Container = styled('div', {
  base: {
    height: '100%',
    color: theme.color.text.default,
  },
})

export const App = () => {
  return (
    <Container>
      <Pages />
    </Container>
  )
}
