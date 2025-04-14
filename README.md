# RUN SERVER

## Run SQL SERVER

node mssql.js

## Run MySQL

node mysql.js

## Run Express Server

node servers.js

URL SERVER:
Get all users

http://localhost:5000/api/users

Get User by id
http://localhost:5000/api/users/1


![demo-video](demo-video.gif)

# Node
npm init -y
npm install mssql
npm install mysql
npm install msnodesqlv8 --save
npm install cors
npm install body-parser
npm install express
npm install dotenv

# Code
const connectionString = "";
const query = "SELECT * FROM tb_users";

sql.query(connectionString, query, (error, rows) => {
console.log(rows);
});

# Documentation and links

Install and configure SQL Express
https://www.youtube.com/watch?v=Wr1AViAda3k

How to connect Nodejs with SQL Server
https://www.youtube.com/watch?v=zvvqUsvB540

How to connect SQL Server with TypeScript
https://www.youtube.com/watch?v=F6j9qF3iqBg


React JS CRUD Application | React JS + Node JS + Sql Server | React Hooks
https://www.youtube.com/watch?v=9pBdDVRmC2s

# Others

MySQL
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

SQL SERVER

### Create a store procedure
 
CREATE PROCEDURE procedure_name
AS
SELECT \* FROM CURSO_DB.dbo.users;

CREATE PROCEDURE procedure_name1
AS
SELECT \* FROM [CURSO_DB].[dbo].[tb_users] WHERE id<=2;

### Execute a store procedure
EXEC procedure_name1;

Result:

USE [CURSO_DB]
GO
EXEC [dbo].[procedure_name1]
GO


### Create a store procedece with parameter

CREATE PROCEDURE getUser @Id int
AS
SELECT \* from [dbo].[tb_users] WHERE id = @Id
GO
Execute store procedure

EXEC getUser @Id = 2;";





