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
  try {
    const pool = await poolPromise;
    const result = await pool.query("SELECT * FROM [CURSO_DB].[dbo].[users]");
    // console.log(result);
    console.log("/api/users/");
    res.status(200).json({
      succes: true,
      empData: result.recordset,
    });
  } catch (error) {
    console.log("Error", error);
    res.status(500).json({
      succes: false,
      message: "Server error ",
    });
  }
});

// Get user by id
app.get("/api/users/:id", async (req, res) => {
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

    res.status(200).json({
      succes: true,
      empData: result.recordset[0],
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Server error get User",
    });
  }
});
