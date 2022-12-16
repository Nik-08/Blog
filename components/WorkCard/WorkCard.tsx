import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import Link from 'next/link';

import { urlFor } from 'sanity';
import { Project } from 'typings';

interface Props {
  projects: Project[];
}

export const WorkCard = ({ projects }: Props) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
      justifyContent="center"
      gap={3}
      mt={3}
    >
      {projects.map((project) => (
        <Box display="grid" justifyContent="center" key={project._id}>
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia component="img" height="325" image={urlFor(project.image).url()} alt="" />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {project.title}
                </Typography>
                <Typography color="grey">{project.technologies}</Typography>
              </CardContent>
            </CardActionArea>
            <Box display="flex" alignItems="center" flexWrap="wrap" padding="16px 16px 0">
              {project.linkToGit ? (
                <Link target="_blank" className="work__link" href={project.linkToGit}>
                  Look on github
                </Link>
              ) : null}
              {project.linkToBuild ? (
                <Link target="_blank" className="work__link" href={project.linkToBuild}>
                  Look at the work
                </Link>
              ) : null}
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};
