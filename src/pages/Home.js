import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CoffeeIcon from '@mui/icons-material/Coffee';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


//Template taken from Material UI - Album
function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://i.kym-cdn.com/entries/icons/original/000/023/098/1038860.jpg">
          Mr X
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
    palette: {
        mode: 'dark',
      },    
});

export function Home() {
const nav = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
            <Box display='flex' flexGrow={1}>
                <CoffeeIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                Mr X's Coffee Shop
                </Typography>
            </Box>
            <div>
                <Button variant="contained" component={Link} href='/login'>Login</Button>
            </div>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Shop
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Today's Promo: Free Stuff
            </Typography>
            <Stack
              sx={{ pt: 1 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '5%',
                      pl: '5%',
                      pr: '5%'
                    }}
                    image="https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg"
                    alt="img"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Example Coffee
                    </Typography>
                    <Typography>
                      $100
                    </Typography>
                  </CardContent>
                  <CardActions>
                     <Button size="small" component={Link} href='/checkout'>Buy</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p">

          Open 24 Hours
        </Typography>

        <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p">

          Contact: +62 1212 1221
        </Typography>

        <Typography align='center'>
                <Link href="https://twitter.com/pitbull" variant="body2" mr={2}>
                    <TwitterIcon />
                </Link>
                <Link href="https://www.instagram.com/pitbull/" variant="body2">
                    <InstagramIcon />
                </Link>
            </Typography>
            <Typography align="center">
                <Link href="https://forms.gle/Zmkwj13Q44SCQPdL7" variant="body2">
                    {"Feedback"}
                </Link>
            </Typography>
            <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}