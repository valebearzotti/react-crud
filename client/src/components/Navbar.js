import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Header>
            <Logo>Posts App</Logo>
            <div>Log In</div>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px 32px;
    background-color: #13294b;
    div:nth-child(2){
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
    }
    color: white;
    font-weight: 600;
`

const Logo = styled.div`
    color: #54b0bf;
    font-weight: 900;
    font-size: 20px;
`

export default Navbar
