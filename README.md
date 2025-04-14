# RUN SERVER

## Run SQL SERVER

node mssql.js

# RUN SERVER

## Run SQL SERVER

node mysql.js

# Documentation

Install and configure SQL Express
https://www.youtube.com/watch?v=Wr1AViAda3k

npm init -y
npm install msnodesqlv8 --save

SCRIPT PARA CONEXIÓN

const connectionString = "";
const query = "SELECT \* FROM tb_users";

sql.query(connectionString, query, (error, rows) => {
console.log(rows);
});

node "./next.js"

READ

https://www.youtube.com/watch?v=zvvqUsvB540

Para Typescript
https://www.youtube.com/watch?v=F6j9qF3iqBg

Para correr con MySQL

npm install mysql

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

node "./mysql.js"

Creación de store procedure

CREATE PROCEDURE procedure_name
AS
SELECT \* FROM CURSO_DB.dbo.users;

CREATE PROCEDURE procedure_name1
AS
SELECT \* FROM [CURSO_DB].[dbo].[tb_users] WHERE id<=2;

# Correr store procedure

EXEC procedure_name1;

Resultado:

USE [CURSO_DB]
GO
EXEC [dbo].[procedure_name1]
GO

Obtener un usuario:

# Crear

CREATE PROCEDURE getUser @Id int
AS
SELECT \* from [dbo].[tb_users] WHERE id = @Id
GO
#Ejecutar
EXEC getUser @Id = 2;";

#Leventar servidor

npm install cors
npm install body-parser
npm install express
npm install dotenv
npm install mssql

https://www.youtube.com/watch?v=9pBdDVRmC2s

URL SERVER:
Obtener usuarios
http://localhost:5000/api/users
