import { Button, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "../../../../assets/images/avatar.jpeg";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    color: "white",
    height: "100vh",
  }));

  const StyledImage = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
    borderColor: "red",
    borderWidth: "50px",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImage src={Avatar} />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="primary" variant="h1" textAlign={"center"}>
                Vinicius Alencar
              </Typography>
              <Typography color="primary" variant="h2" textAlign={"center"}>
                I'm a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <DownloadForOfflineIcon />
                    DownloadCV
                  </Button>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <EmailIcon />
                    Contact me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
