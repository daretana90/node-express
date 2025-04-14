const sql = require("msnodesqlv8");

// const connectionString = "server=.;Database=Master;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const connectionString =
  "server=.;Database=CURSO_DB;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
// const query = "SELECT name FROM sys.databases";
const queryView =
  "SELECT TOP (1000) [id] ,[name] ,[email] FROM [CURSO_DB].[dbo].[view_users];";

// const query = "SELECT * FROM [dbo].[tb_users] WHERE id<=2;";

const queryAll = "EXEC procedure_name1;";
const query = "EXEC getUser @Id = 2;";

sql.query(connectionString, query, (error, rows) => {
  if (error != null) {
    console.error(error);
  } else {
    console.log(rows);
  }
});
