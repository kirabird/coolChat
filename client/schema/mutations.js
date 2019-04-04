import gql from 'graphql-tag';

export const createMessage = gql`
  mutation($user_id: Int!, $message: String!, $chatroom_id: Int) {
    createMessage(
      user_id: $user_id
      message: $message
      chatroom_id: $chatroom_id
    ) {
      mutation
      message {
        username
        message
        chatroom_id
      }
    }
  }
`;

// export const createUser = gql`
//   mutation($userName: String!, $password: String!) {
//     createUser(userName: $userName, password: $password) {
//       username
//       password
//     }
//   }
// `;

export const login = gql`
  mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      username
      success
    }
  }
`;

export const createChatroom = gql`
  mutation($chatroom_name: String!) {
    createChatroom(chatroom_name: $chatroom_name) {
      chatroom_name
    }
  }
`;

export const signup = gql`
  mutation($userName: String!, $password: String!) {
    signup(userName: $userName, password: $password) {
      username
      success
    }
  }
`;
