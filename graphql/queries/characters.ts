import { gql } from "@apollo/client";
import { PAGINATION_INFO } from "../fragments/pagination";
import { LOCATION_FIELDS } from "../fragments/location";
import { EPISODE_FIELDS } from "../fragments/episode";

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        ...PaginationInfo
      }
      results {
        id
        name
        status
        species
        image
      }
    }
  }
  ${PAGINATION_INFO}
`;

export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
      }
      location {
        ...LocationFields
      }
      episode {
        ...EpisodeFields
      }
    }
  }
  ${LOCATION_FIELDS}
  ${EPISODE_FIELDS}
`;
