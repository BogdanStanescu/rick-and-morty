export type CharacterBase = {
  id: string;
  image: string;
  name: string;
  species: string;
  status: string;
};

export type CharacterDetails = CharacterBase & {
  gender: string;

  origin: {
    name: string;
  };

  location: {
    name: string;
  };

  episode: EpisodeBase[];
};
