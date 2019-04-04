const pubsub = require('../pubsub');
const { query } = require('../models/db');
const { MSG_ADDED } = require('./constants');

module.exports = {
  // not verifying write to DB; errors unhandled
  createMessage: async (_, { user_id, message, chatroom_id }) => {
    console.log('above query txt');
    const queryText =
      'INSERT INTO messages(user_id, message, chatroom_id) VALUES ($1, $2, $3) RETURNING user_id, message, chatroom_id, created_at';
    const values = [user_id, message, chatroom_id];
    // const values = [userId, message, chatroomId];
    console.log('ABOVE THE MSG');
    const msg = (await query(queryText, values)).rows.reduce((acc, cur) => {
      const { user_id, message, chatroom_id, created_at } = cur;
      acc.push({
        user_id: user_id,
        message: message,
        chatroom_id: chatroom_id,
        created_at: created_at
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
      message: msg
    };
    await pubsub.publish(MSG_ADDED, { messageAdded: messageResponse });
    return messageResponse;
  },

  // not verifying write to DB; errors unhandled
  // createUser: async (_, { userName, password }) => {
  //   const queryText =
  //     'INSERT INTO users(username, password) VALUES ($1, $2) RETURNING username';
  //   const values = [userName, password];
  //   const { username } = (await query(queryText, values)).rows[0];
  //   return { username, success: true };
  // },

  login: async (_, { username, password }) => {
    const queryText = `SELECT password FROM users WHERE username='${username}'`;
    const pw = (await query(queryText)).rows[0].password;
    if (!pw) return { success: false };
    return pw === password
      ? { username: username, success: true }
      : { username: username, success: false };
  },
  // create chatroom
  // TODO: handle errors
  createChatroom: async (_, { chatroomName }) => {
    const queryText =
      'INSERT INTO chatrooms(chatroom_name) VALUES ($1) RETURNING chatroom_name';
    const values = [chatroomName];
    // only update db if chatroomName isn't an empty string
    if (chatroomName) {
      const { chatroom_name } = (await query(queryText, values)).rows[0];
      return { chatroom_name, success: true };
    }
  }
};
