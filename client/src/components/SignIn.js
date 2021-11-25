import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../pages/Styled';
import circleOne from '../assets/circleone.svg'
import circleTwo from '../assets/circletwo.svg'
import { gsap } from 'gsap';

function SignIn() {

    const box1 = useRef();
    const box2 = useRef();
    const box3 = useRef();

    useEffect(() => {
        gsap.from(box1.current, { delay: 0.6, opacity: 0, y:50, duration: 1})
        gsap.from(box2.current, { delay: 0.6, opacity: 0, y:-100, duration: 1})
        gsap.from(box3.current, { delay: 0.4, opacity: 0, y:-50, duration: 1})
    }, [])

    const trigger = () => {
        gsap.to(box1.current, { opacity: 1, y:-1000, duration: 2})
        gsap.to(box2.current, { opacity: 1, y:-1000, duration: 2})
        gsap.to(box3.current, { opacity: 1, y:-1000, duration: 2})

    }

    return (
        <Container>
            <GlobalStyle />
            <Center>
                <CircleOne>
                    <img src={circleOne} alt="" ref={box1}></img>
                </CircleOne>
                <CircleTwo>
                    <img src={circleTwo} alt="" ref={box2}></img>
                </CircleTwo>
                <Divider ref={box3}>
                    <Box>
                        <Title>Login</Title>
                        <Input>
                            <label>Username</label>
                            <input></input>
                        </Input>
                        <Input>
                            <label>Password</label>
                            <input></input>
                        </Input>
                        <Subtitle>Don't have an account? <span>Create one.</span></Subtitle>
                        <Button onClick={() => trigger()}>Submit</Button>
                    </Box>
                </Divider>
                
            </Center>
        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #161623;
`

const CircleOne = styled.div`
    img{
        position: absolute;
        top: 50%;
        left: 60%;
    }
    @media (max-width: 1048px){
        img{
            width: 200px;
            left: 70%;
            top: 60%;
        }
    }
    @media (max-width: 768px){
        img{
            left: auto;
            right: 10px;
            width: 150px;
        }
    }
`

const CircleTwo = styled.div`
    img{
        position: absolute;
        top: 10%;
        left: 12%;
    }
    @media (max-width: 1048px){
        img{
            width: 350px;
        }
    }
    @media (max-width: 768px){
        img{
            top: 20px;
            left: -50px;
            width: 250px;
        }
    }
`

const Center = styled.div`
    width: 576px;
    height: 100vh;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px){
        width: 450px;
    }
`

const Divider = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: auto;
    margin-bottom: auto;
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 20px 20px 50px 0 rgba( 0, 0, 0, 0.5 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border: 1px solid rgba( 255, 255, 255, 0.5 );    
    border-radius: 30px;
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    align-items: center;
`

const Input = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    label{
        color: #fff;
        font-weight: 600;
        font-size: 20px;
        opacity: 0.6;
        margin-bottom: 1em;
    }
    input{
        width: 300px;
        color: #fff;
        background: rgba( 255, 255, 255, 0.2 );
        padding: 12px 20px;
        outline: none;
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.2 );  
    }
`

const Button = styled.button`
    margin-left: auto;
    margin-top: 30px;
    padding: 8px 26px;
    outline: none;
    border: none;
    border-radius: 20px;
    background-image: linear-gradient(45deg, #6d90b9, #bbc7dc);
    cursor: pointer;
    color: #fff;
    font-weight: 600;
`

const Title = styled.div`
    font-size: 32px;
    font-weight: 500;
    color: #fff;
    margin-top: 50px;
    margin-right: auto;
    margin-bottom: 30px;
`

const Subtitle = styled.div`
    font-size: 14px;
    color: #fff;
    opacity: 0.6;
    margin-right: auto;
    margin-top: 20px;
    span {
        text-decoration: underline;
        cursor: pointer;
    }
`

export default SignIn
