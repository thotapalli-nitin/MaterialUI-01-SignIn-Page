import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

function SignIn() {
  return (
    <Container maxWidth="xs">
        <Box mt={2} sx={{ textAlign: 'Center'}}>
            <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5" component="h1">
                Sign in
                </Typography>
            </Box>
            
            <Stack spacing={3} my={1}>
                <TextField id="outlined-basic" label="Email Address *" variant="outlined" fullWidth="true"/>
                <TextField id="outlined-basic" label="Password  *" variant="outlined" fullWidth="true"/>
            </Stack>
            <FormGroup>
                <FormControlLabel control={<Checkbox/>} label="Remember me" />
            </FormGroup>
            <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
               
            </Box>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Typography variant="caption" display="block" gutterBottom marginY={4} color="text.secondary">
            Copyright © <span><Link href="#" color="inherit">Your Website</Link></span> 2022.
            </Typography>
            
            
            
        </Box>
        
    </Container>
  )
}

export default SignIn