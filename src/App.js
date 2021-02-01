import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './theme'
import Grid from './components/grid'
import Container from '@material-ui/core/Container'
import Appbar from './components/Appbar'

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
       <Appbar>
            <Grid />
       </Appbar>
    </Container>

  </ThemeProvider>
)
export default App