import { gql } from 'apollo-angular';

export const ADD_TODO = gql`
  mutation ADD_TODO($input: TodoInput!) {
    addTodo(input: $input) {
      title
    }
  }
`;
