const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pubsub = require('../pubsub');
const { query } = require('../models/db');
const { MSG_ADDED } = require('./constants');

module.exports = {
  // not verifying write to DB; errors unhandled
  createMessage: async (_, { user_id, message, chatroom_id }) => {
    console.log('above query txt');
    const queryText = 'INSERT INTO messages(user_id, message, chatroom_id) VALUES ($1, $2, $3) RETURNING user_id, message, chatroom_id, created_at';
    const values = [user_id, message, chatroom_id];
    // const values = [userId, message, chatroomId];
    console.log('ABOVE THE MSG');
    const msg = (await query(queryText, values)).rows.reduce((acc, cur) => {
      const {
        user_id, message, chatroom_id, created_at,
      } = cur;
      acc.push({
        user_id,
        message,
        chatroom_id,
        created_at,
      });
      return acc;
    }, [])[0];
    console.log(msg);
    const usernameQueryText = `SELECT username FROM users WHERE _id='${user_id}'`;
    const usernameText = await query(usernameQueryText);
    msg.username = usernameText.rows[0].username;
    // publishing new data over subscriptions
    const messageResponse = {
      mutation: 'CREATED',
      message: msg,
    };
    await pubsub.publish(MSG_ADDED, { messageAdded: messageResponse });
    return messageResponse;
  },

  // not verifying write to DB; errors unhandled
  signup: async (_, { userName, password }) => {
    const queryText =
      'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username';
    const values = [userName, password];
    const { username } = (await query(queryText, values)).rows[0];
    console.log(username)
    return { username, success: true };
  },

  login: async (_, { username, password }) => {
    const queryText = `SELECT password FROM users WHERE username='${username}'`;
    const pw = (await query(queryText)).rows[0].password;
    console.log(pw);
    if (!pw) return { success: false };
    return pw === password ? { username, success: true } : { username, success: false };
  },
  // create chatroom
  // TODO: handle errors
  createChatroom: async (_, { chatroomName }) => {
    const queryText = 'INSERT INTO chatrooms(chatroom_name) VALUES ($1) RETURNING chatroom_name';
    const values = [chatroomName];
    // only update db if chatroomName isn't an empty string
    if (chatroomName) {
      const { chatroom_name } = (await query(queryText, values)).rows[0];
      return { chatroom_name, success: true };
    }
  },

  // handles signup and bcrypts password
  // createUser: async (_, { userName, password }) => {
  //   // check if user with that username exists
  //   const userQueryText = `SELECT username FROM users WHERE username='${userName}'`;
  //   const { username } = await query(userQueryText).rows[0].username;
  //   if (username !== undefined) {
  //     return { username: user, success: false };
  //   }
  //   // if username isn't taken in db, create user with hashed password
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const queryText = 'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username';
  //   const values = [userName, hashedPassword];
  //   const { username } = await query(queryText, values).rows[0];
  //   return { username, success: true };
  // },

  createUser: async (_, { userName, password }) => {
    const queryText = 'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username';
    const values = [userName, password];
    const { username } = (await query(queryText, values)).rows[0];
    console.log(username);
    return { username, success: true };
  },
};
