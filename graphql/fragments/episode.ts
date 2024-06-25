import { gql } from "@apollo/client";

export const EPISODE_FIELDS = gql`
  fragment EpisodeFields on Episode {
    id
    name
    air_date
    episode
  }
`;
