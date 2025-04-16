const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sql, poolPromise } = require("./db.js");

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));

// Get users
app.get("/api/users/", async (req, res) => {
  console.log("GET - ", "/api/users/");
  try {
    const pool = await poolPromise;
    const result = await pool.query("SELECT * FROM [CURSO_DB].[dbo].[users]");
    // console.log(result);
    // res.status(200).json({
    //   succes: true,
    //   empData: result.recordset,
    // });
    res.status(200).json(result.recordset);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      succes: false,
      message: "Server error ",
    });
  }
});

// Get user by id
app.get("/api/user/:id", async (req, res) => {
  console.log("GET - ", "/api/user/1");
  try {
    const { id } = req.params;

    if (isNaN(id)) {
      res.status(400).json({
        succes: false,
        message: "Invalid id",
      });
    }
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(`SELECT * FROM [CURSO_DB].[dbo].[users] WHERE id=@id`);
    // console.log(result);
    console.log("/api/users/id");
    if (result.recordset.lenght === 0)
      res.status(400).json({
        succes: true,
        message: "User not found",
      });

    res.status(200).json(result.recordset[0]);
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Server error. Get User",
    });
  }
});

app.put("/api/user/:id", async (req, res) => {
  console.log("PUT - ", "/api/user/1");
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    console.log(req.params);
    console.log(req.body);

    if (isNaN(id)) {
      res.status(400).json({
        succes: false,
        message: "Invalid id",
      });
    }
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("name", sql.VarChar, name)
      .input("email", sql.VarChar, email)
      .query(
        "UPDATE [CURSO_DB].[dbo].[users] SET name=@name, email=@email WHERE id=@id;"
      );
    // .query('DELETE FROM [CURSO_DB].[dbo].[users] WHERE id=@id ');

    res.status(200).json(result.rowsAffected);
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Server error. Update user",
    });
  }
});

app.delete("/api/user/:id", async (req, res) => {
  console.log("DELETE - ", "/api/user/1");
  try {
    const { id } = req.params;
    console.log(req.params);

    if (isNaN(id)) {
      res.status(400).json({
        succes: false,
        message: "Invalid id",
      });
    }
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query("DELETE FROM [CURSO_DB].[dbo].[users] WHERE id=@id ");

    res.status(200).json(result.rowsAffected);
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Server error. Update user",
    });
  }
});
