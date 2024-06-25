import { gql } from "@apollo/client";
import { EPISODE_FIELDS } from "../fragments/episode";
import { PAGINATION_INFO } from "../fragments/pagination";

export const GET_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      ...EpisodeFields
      characters {
        id
        name
        image
      }
    }
  }
  ${EPISODE_FIELDS}
`;

export const GET_EPISODES = gql`
  query getEpisodes($page: Int) {
    episodes(page: $page) {
      info {
        ...PaginationInfo
      }
      results {
        ...EpisodeFields
      }
    }
  }
  ${PAGINATION_INFO}
  ${EPISODE_FIELDS}
`;
