import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-y: scroll; 
    overflow-x: hidden;

    height: 100vh;
    font-size: 1.6rem;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    font-family:sans-serif;
  }

  html{
    font-size: 62.5%;
  }

  @media (max-width: 768px) {
    html{
      font-size:50%;
    }
  }
`

const theme = {
  colors: {
    primary: '#21211F',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
