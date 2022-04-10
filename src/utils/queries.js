import { gql } from '@apollo/client';

/* eslint-disable import/prefer-default-export */
export const BOOKS = gql`
  query GetBooks {
    book {
      pages {
        content
        tokens {
          position
          value
        }
      }
    }
  }
`;
