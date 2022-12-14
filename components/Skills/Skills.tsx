import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Skill } from 'typings';
import { urlFor } from 'sanity';

interface Props {
  skills: Skill[];
}

export const Skills = ({ skills }: Props) => {
  return (
    <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ paddingTop: '40px' }}>
      {skills.map((skill) => (
        <Grid
          item
          xs={2}
          key={skill._id}
          className="skills__block_item"
          sx={{ justifyContent: 'center', textAlign: 'center' }}
        >
          <div className="skills__block_icon">
            <img src={urlFor(skill.image).url()} alt={skill.title} />
          </div>
          <Typography fontSize={18}>{skill.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};
