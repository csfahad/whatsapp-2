import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const SignIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="https://store-images.s-microsoft.com/image/apps.8985.13518859748920827.9387ee94-7c1a-4504-96ce-e69efd39b244.4fa73e25-b054-413a-9da2-26e4f2f91990" />
        <Button
          onClick={SignIn}
          variant="contained"
          style={{
            color: "white",
            backgroundColor: "#25D366",
          }}
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 50px;
  border-radius: 100px;
`;
