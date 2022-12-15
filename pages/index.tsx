import { Box, Grid, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
import Image from 'next/image';

import mainLightImg from '@assets/mainImage_1.png';
import { Skill, Project } from 'typings';
import { fetchProjects } from 'utils/fetchProjects';
import { fetchSkills } from 'utils/fetchSkills';

import { Container, Footer, Header, Skills, WorkCard } from '../components';

interface Props {
  skills: Skill[];
  projects: Project[];
}

const Home = ({ skills, projects }: Props) => {
  return (
    <div className="app">
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box>
          <Grid container columns={{ xs: 1, lg: 2 }}>
            <Grid item xs={1} sx={{ alignSelf: 'center' }}>
              <Typography
                sx={{ fontSize: { xs: '30px', lg: '50px' } }}
                fontWeight={500}
                variant="h1"
              >
                Front-end Developer
              </Typography>
              <Typography fontSize={18} mt={1}>
                My name is Nikita, I have been doing Web development since 2021
              </Typography>
              <Typography fontSize={18} mt={1}>
                I like writing code, and I like bringing ideas to life in a browser.
              </Typography>
              <Typography fontSize={18} mt={1}>
                In my free time I like to spend my time solving some interesting JS problem or with
                friends playing a board game.
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ maxWidth: '560px', margin: '0 auto' }}>
              <Image className="main__image" src={mainLightImg} fill alt="" />
            </Grid>
          </Grid>
          <Typography fontSize={30} mt={3} fontWeight={500} variant="h2">
            Technologies I&apos;ve worked with
          </Typography>
          <Skills skills={skills} />
          <Typography fontSize={30} mt={5} fontWeight={500} variant="h2">
            My work
          </Typography>
          <WorkCard projects={projects} />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return {
    props: {
      skills,
      projects,
    },
  };
};
