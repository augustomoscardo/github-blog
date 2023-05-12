import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { PostContextProvider } from './contexts/PostsContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <PostContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
