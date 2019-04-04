const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    messages: [Message]
    users: [String]
    chatrooms: [Chatroom]
  }

  type MessageResponse {
    message: Message!
    mutation: String!
  }

  type Message {
    username: String!
    message: String!
    created_at: String!
  }

  type UserSuccess {
    username: String!
    success: Boolean!
  }

  type Chatroom {
    chatroom_name: String!
  }

  type ChatroomSuccess {
    chatroom_name: String!
    success: Boolean!
  }

  type Mutation {
    createUser(userName: String!, password: String!): UserSuccess
    createMessage(userId: Int!, message: String!): MessageResponse
    createChatroom(chatroomName: String!): ChatroomSuccess
  }

  type Subscription {
    messageAdded: MessageResponse
  }
`;
