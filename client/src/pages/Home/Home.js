import React from 'react'
import { createGlobalStyle } from 'styled-components'

function Home() {

    return (
        <div>
            <GlobalStyle />
            <h1>home page!!!</h1>
        </div>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

export default Home
