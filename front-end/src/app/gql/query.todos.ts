import { gql } from 'apollo-angular';

export const GET_ALL_TODOS = gql`
  query GET_ALL_TODOS {
    todos {
      title
      description
      date {
        create
        update
        delete
      }
    }
  }
`;
