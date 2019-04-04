CREATE TABLE
IF NOT EXISTS users
(
  "_id" SERIAL PRIMARY KEY,
  "username" VARCHAR NOT NULL,
  "password" VARCHAR NOT NULL
);

CREATE TABLE
IF NOT EXISTS messages
(
  "_id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL,
  "message" VARCHAR NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW
(),
  "chatroom_id" INTEGER NOT NULL,
  FOREIGN KEY
("user_id")
  REFERENCES users
("_id")
  ON
DELETE CASCADE,
  FOREIGN KEY ("chatroom_id")
REFERENCES chatrooms
("_id") ON
DELETE CASCADE
);

CREATE TABLE
IF NOT EXISTS chatrooms
(
  "_id" PRIMARY KEY DEFAULT 1,
  "chatroom_name" VARCHAR NOT NULL
);

CREATE TABLE
IF NOT EXISTS chatroom_users
("_id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NOT NULL,
  "chatroom_id" INTEGER NOT NULL,
  FOREIGN KEY
("user_id") REFERENCES users
("_id") ON
DELETE NO ACTION,
  FOREIGN KEY
("chatroom_id") REFERENCES chatrooms
("_id") ON
DELETE NO ACTION);


-- coolchat=# ALTER USER student WITH password '12345';
-- coolchat=# GRANT ALL PRIVILEGES ON DATABASE coolchat TO student;
-- coolchat=# GRANT ALL PRIVILEGES ON users TO student;
-- coolchat=# GRANT ALL PRIVILEGES ON messages TO student;
-- GRANT USAGE ON SEQUENCE users__id_seq TO student;
-- GRANT USAGE ON SEQUENCE messages__id_seq TO student;