import { groq } from 'next-sanity';

import { Project } from 'typings';

import { sanityClient } from '../../sanity';

import type { NextApiRequest, NextApiResponse } from 'next';

const query = groq`
	*[_type == 'projects'] | order(workType)
`;

type Data = {
  projects: Project[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const projects: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
