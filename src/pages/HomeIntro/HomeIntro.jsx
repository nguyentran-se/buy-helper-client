import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import illus1 from 'assets/images/illus1.png';
import map from 'assets/images/map.png';
import { PATH_NAME } from 'configs';
import Logo from 'layouts/Header/components/Logo';
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeIntro.scss';
const StyledButton = styled(Button)({
  backgroundColor: yellow[800],
  '&:hover': {
    backgroundColor: yellow[900],
  },
});
const HomeIntro = () => {
  return (
    <>
      <AppBar elevation={0} position="sticky">
        <Container>
          <Toolbar sx={{ padding: { xs: 0, sm: 0, md: 0 } }}>
            <Logo hasHref={false} />

            <Stack direction="row" spacing={2} sx={{ ml: 'auto' }}>
              <StyledButton
                component={Link}
                variant="contained"
                to={PATH_NAME.LOGIN}
              >
                Sign in
              </StyledButton>
              <StyledButton
                component={Link}
                variant="contained"
                to={PATH_NAME.REGISTER}
              >
                Sign up
              </StyledButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <Container>
        <main className="mainwrapper__intro">
          <div className="homeintro-container">
            <section className="service" id="service">
              <div className="service__content">
                <div className="service__content--title">
                  Flexible way to
                  <br />
                  buy essential goods in Covid-19
                </div>
                <div className="service__content--description">
                  BuyHelper is built on the foundation of a website. Here, it is
                  a commercial environment connecting the households (buyers)
                  with supermarkets (suppliers) and the town
                  leaders(transferor).
                </div>
                <StyledButton
                  component={Link}
                  variant="contained"
                  to={PATH_NAME.LOGIN}
                >
                  Get Started
                </StyledButton>
              </div>
              <div className="service__img">
                <img src={illus1} alt="" />
              </div>
            </section>

            <section className="location" id="location">
              <div className="location__content">
                <div className="location__content--title">
                  Where do we place?
                </div>
                <div className="location__content--description">
                  We will start in Da Nang. Our vision is going to expand a lot
                  of provinces in South.
                </div>
              </div>
              <div className="location__img">
                <img src={map} alt="" />
              </div>
            </section>
          </div>
        </main>
      </Container>
      <footer className="homeintro-footer">
        <Container>
          <div className="homeintro-container">
            <div className="contact">
              <div className="contact__title">Want to contact us?</div>
              <div className="contact__form"></div>
              <StyledButton
                component={Link}
                variant="contained"
                to={PATH_NAME.LOGIN}
              >
                Contact now
              </StyledButton>
            </div>
            <div className="quote">
              BuyHelper <br />
              Be strong to overcome Covid-19!
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default HomeIntro;
