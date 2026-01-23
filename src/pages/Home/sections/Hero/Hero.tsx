import { Box, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import EmailIcon from "@mui/icons-material/Email";
import Avatar from "../../../../assets/images/avatar.jpeg";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  }));

  const StyledImage = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">

            <Grid
              size={{ xs: 12, md: 5 }}
              display="flex"
              justifyContent="center"
              alignItems="center">
              <Box position="relative">
                <Box
                  position="absolute"
                  width={"150%"}
                  right={0}
                  top={-100}
                  sx={{ transform: "translateX(15%)" }}
                >
                  <AnimatedBackground />
                </Box>
                <Box
                  position="relative"
                  sx={{ zIndex: 1 }}
                  textAlign="center"
                  display="flex"
                  justifyContent="center"
                >
                  <StyledImage src={Avatar} />
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign={"center"}
                pb={2}
              >
                Vinicius Alencar
              </Typography>
              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign={"center"}
                mb={4}>
                I'm a Software Engineer
              </Typography>


              <Grid container display="flex" justifyContent="center" spacing={3}>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadForOfflineIcon />
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>
                      Contact me
                    </Typography>
                  </StyledButton>
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
