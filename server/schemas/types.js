const { gql } = require('apollo-server-express');

module.exports = gql`
  type Query {
    messages: [Message]
    users: [User]
    chatrooms: [Chatroom]
  }

  type User {
    username: String!
    password: String!
  }

  type MessageResponse {
    message: Message!
    mutation: String!
  }

  type Message {
    username: String!
    message: String!
    created_at: String!
    chatroom_id: Int
  }

  type UserSuccess {
    username: String!
    success: Boolean!
  }

  type Chatroom {
    chatroom_name: String!
    _id: Int
  }

  type ChatroomSuccess {
    chatroom_name: String!
    success: Boolean!
  }

  type AuthenticationSuccess {
    username: String!
    success: Boolean!
  }

  type Mutation {
    createUser(userName: String!, password: String!): UserSuccess
    login(username: String!, password: String!): AuthenticationSuccess
    createMessage(
      user_id: Int!
      message: String!
      chatroom_id: Int
    ): MessageResponse
    createChatroom(chatroomName: String!): ChatroomSuccess
  }

  type Subscription {
    messageAdded: MessageResponse
  }
`;
