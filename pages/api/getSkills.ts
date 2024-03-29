import { groq } from 'next-sanity';

import { Skill } from 'typings';

import { sanityClient } from '../../sanity';

import type { NextApiRequest, NextApiResponse } from 'next';

const query = groq`
	*[_type == 'skills'] | order(title)
`;

type Data = {
  skills: Skill[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const skills: Skill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
