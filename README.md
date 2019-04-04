# coolChat

# setup:

git checkout development
psql postgres
postgres=# ALTER USER student WITH LOGIN PASSWORD '12345';
postgres=# CREATE DATABASE coolchat;
postgres=# ALTER USER student with superuser;
postgres=# \q
psql coolchat
psql coolchat -f chatDb.sql
\q

npm i
npm start

# connect to coolchat as student

psql -d coolchat -U student
