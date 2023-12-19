const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// MySQL 연결 설정
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root1234@#@#",
  database: "cheers_data",
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL 연결 오류:", err);
  } else {
    console.log("MySQL에 연결되었습니다.");
  }
});

app.get("/database/TEAM/:id", function (req, res) {
  const teamId = req.params.id;

  if (!teamId) {
    res.status(400).send("팀 ID가 제공되지 않았습니다.");
    return;
  }

  const query = "SELECT * FROM cheers_team_data WHERE teamId = ?";

  connection.query(query, [teamId], (err, results) => {
    if (err) {
      console.error("MySQL 쿼리 오류:", err);
      res.status(500).send("서버 내부 오류");
    } else {
      res.send(results);
    }
  });
});

app.get("/database/PLAYER/:id", function (req, res) {
  const teamId = req.params.id;

  if (!teamId) {
    res.status(400).send("선수 ID가 제공되지 않았습니다.");
    return;
  }

  const query = "SELECT * FROM cheers_player_data WHERE teamId = ?";

  connection.query(query, [teamId], (err, results) => {
    if (err) {
      console.error("MySQL 쿼리 오류:", err);
      res.status(500).send("서버 내부 오류");
    } else {
      res.send(results);
    }
  });
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, function () {
  console.log("서버가 8080포트에서 실행 중입니다.");
});

// MySQL 연결 종료
process.on("SIGINT", () => {
  connection.end((err) => {
    console.log("MySQL 연결이 종료되었습니다.");
    process.exit(err ? 1 : 0);
  });
});
