import React from 'react'
import styled from 'styled-components'

function Navbar() {
    return (
        <Header>
            <Logo>Home</Logo>
            <div>Home</div>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1em;
    div:nth-child(2){
        margin-left: auto;
    }
`

const Logo = styled.div`
    color: #54b0bf;
    font-weight: bold;
`

export default Navbar
