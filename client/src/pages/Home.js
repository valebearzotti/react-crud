import React from 'react'
import { createGlobalStyle } from 'styled-components'
import SignIn from '../components/SignIn'

function Home() {

    return (
        <div>
            <GlobalStyle />
            <SignIn></SignIn>
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
