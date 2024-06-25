import { gql } from "@apollo/client";

export const PAGINATION_INFO = gql`
  fragment PaginationInfo on Info {
    count
    pages
    next
    prev
  }
`;
