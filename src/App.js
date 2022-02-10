import { Button,Alert, AlertIcon, AlertTitle, AlertDescription,CloseButton,Center,Box, Input } from "@chakra-ui/react";
import { Container, Heading } from '@chakra-ui/layout';
import { useMoralis } from 'react-moralis';
import { useState } from "react";

const SignUp = () => {
  const { signup } = useMoralis();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  return (
    <Box>
        <Input m={2} placeholder="Username" value={username} onChange={(e) => setUsername(e.currentTarget.value)} />
        <Input m={2} placeholder="Email" type='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        <Input m={2} placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
      <Center>
        <Button m={2} onClick={() => signup(username, password, email)} >SignUP</Button>
      </Center>
    </Box>
  );

};

function App() {
  const { authenticate, isAuthenticated, isAuthenticating, user, logout, authError } = useMoralis();

  if(isAuthenticated)
  {
    return (
      <div>
      <Center m={3}>
        <Box fontSize='15px' w='60%' bg='tomato' p={3} textStyle='h2'>
          <Heading>
            {/* Welcome {user.get('username')} */}
            Welcome
          </Heading>
        </Box>
      </Center>

      <Center>
        <Button isLoading={isAuthenticating} onClick={()=> logout()}>Logout</Button>        
      </Center>

      </div>
    )
  }

  return (
    <div className="App">
    <Center p={4}>
      <Box w='68%'>
          {authError &&
            <Alert status='error'>
              <AlertIcon />
              <AlertTitle mr={2}>authentication failed!</AlertTitle>
              <AlertDescription>{authError.message}</AlertDescription>
              <CloseButton position='absolute' right='8px' top='8px' />
            </Alert>
          }
      </Box>      
    </Center>


      <Container>
      <Center m={3}>
        <Box fontSize='22px' w='60%' p={3}>
          <Heading>
            Twitter Clone
          </Heading>
        </Box>
      </Center>
      

      <SignUp/>

      {/* <Center>
        <Button onClick={()=> authenticate()}>Login</Button>        
      </Center> */}
      </Container>
    </div>
  );
}

export default App;
