import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div>
            <GlobalStyle />
            <Navbar></Navbar>
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
