import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
// import Link from '@mui/joy/Link';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import axios from 'axios';
// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   const [mounted, setMounted] = React.useState(false);

//   // necessary for server-side rendering
//   // because mode is undefined on the server
//   React.useEffect(() => {
//     setMounted(true);
//   }, []);
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <Button
//       variant="outlined"
//       onClick={() => {
//         setMode(mode === 'light' ? 'dark' : 'light');
//       }}
//     >
//       {mode === 'light' ? 'Turn dark' : 'Turn light'}
//     </Button>
//   );
// }

export default function Login() {
  const [auth, setAuth] = useState({
    email: '',
    password: '',
  });
  return (
    <CssVarsProvider>
      {/* <ModeToggle /> */}
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="walterwhite@gmail.com"
              onChange={(e) => { setAuth({ ...auth, email: e.target.value }) }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
              onChange={(e) => { setAuth({ ...auth, password: e.target.value }) }}
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}
            onClick={(e) => { e.preventDefault(); LogInFunction(auth); }}>Log in</Button>
          <Typography
            endDecorator={<Link to="/signup">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

const LogInFunction = async (auth) => {
  const res = await axios.post('https://azathoth-production.up.railway.app/auth/', {
    email: auth.email,
    password: auth.password,
  }).catch((err) => {
    alert(err);
  });
  const data = await res.data.data;
  localStorage.setItem('id', data._id);
  console.log(data,localStorage.getItem('id'));
};


