import { gql } from "@apollo/client";
import { PAGINATION_INFO } from "../fragments/pagination";
import { LOCATION_FIELDS } from "../fragments/location";

export const GET_LOCATIONS = gql`
  query getLocations($page: Int) {
    locations(page: $page) {
      info {
        ...PaginationInfo
      }
      results {
        ...LocationFields
      }
    }
  }
  ${PAGINATION_INFO}
  ${LOCATION_FIELDS}
`;

export const GET_LOCATION = gql`
  query getLocation($id: ID!) {
    location(id: $id) {
      ...LocationFields
      residents {
        id
        name
        image
      }
    }
  }
  ${LOCATION_FIELDS}
`;
