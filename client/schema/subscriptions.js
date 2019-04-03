import gql from 'graphql-tag';

export default gql`
  subscription messageAdded {
    messageAdded {
      mutation
      message { 
        username
        message
        created_at
      }
    }
  }
`;
