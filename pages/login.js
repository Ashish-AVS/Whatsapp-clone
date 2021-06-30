import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import {Button} from '@material-ui/core'
import { auth, provider } from '../firebase'
import Image from 'next/image';

export default function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <div>
            <Container>
                <Head>
                    <title>Login</title>
                </Head>
            

            <LoginContainer>
               
                <Button variant="outlined" onClick={signIn}>Sign In with Google</Button>
            </LoginContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled(Image)`
    height: 200px;
    width: 300px;
    margin-bottom: 50px;
`;