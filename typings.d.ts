interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Skill extends SanityBody {
  _type: 'skills';
  title: string;
  image: Image;
}

export interface Project extends SanityBody {
  _type: 'projects';
  title: string;
  workType: string;
  technologies: string;
  image: Image;
  linkToBuild: string;
  linkToGit: string;
}
