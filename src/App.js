import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './theme'
import Grid from './components/grid'
import Container from '@material-ui/core/Container'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
        <Grid />
    </Container>

  </ThemeProvider>
)
export default App