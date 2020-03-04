const express = require('express')
const app = express()
const path = require('path') 

var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demo'
});
connection.connect(function (err) {
  if (err) {
    console.error('ERROR IN CONNECTION: ' + err.stack);
    return;
  }

  console.log('CONNECTED SUCCESFULLY AS ' + connection.threadId);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post('/show', function (req, res) {
  console.log(req.body);

  connection.query(`SELECT * FROM user where Email="${req.body.EmailAddress}" AND Password="${req.body.Password}"`,
    function (err, result, fields) {
      console.log(result[0])
      try {
        if (result[0]) {
          console.log("ifififif")
          var token = jwt.sign({ result: result[0].Email }, 'master-key');
          res.json({ result: result, token: token });
          console.log(token);
        }
        else {
          res.send("UNAUTHORISED");
        }
      } catch (e) {
        res.send(e);
      }


    }
  );
});



app.post('/get', function (req, res) {
  try {

    const data = req.body;
    connection.query(
      "INSERT INTO `user`(`Name`, `FatherName`, `MothersName`, `MobileNumber`, `Branch`, `DOB`, `Year`, `Gender`, `RollNo`, `Age`, `Email`, `Address`, `SSC`, `HSC`, `BTECHAGGREGATE`, `Backlogs`, `SSCSCHOOLNAME`, `HSCSCHOOLNAME`, `Password`,`image`) VALUES" +
      "('" +
      data.Name +
      "','" +
      data.FatherName +
      "','" +
      data.MotherName +
      "','" +
      data.MobileNumber +
      "','" +
      data.Branch +
      "','" +
      data.DOB +
      "','" +
      data.Year +
      "','" +
      data.Gender +
      "','" +
      data.RollNo +
      "','" +
      data.Age +
      "','" +
      data.Email +
      "','" +
      data.Address +
      "','" +
      data.SSC +
      "','" +
      data.HSC +
      "','" +
      data.Btech +
      "','" +
      data.Backlogs +
      "','" +
      data.SchoolSSC +
      "','" +
      data.SchoolHHC +
      "','" +
      data.Password +
      "','" +
      data.image +
      "')",
      function (err, results) {
        if (err) throw err;
        console.log(" data inserted sucefully");
        console.log(results)
        res.status(200).send("RECORDED SUCCESSFULLY");
      })
  }
  catch (e) {
    return res.status(500).send('ERROR OCCURED AT API');
  }
})

app.get("/ShowPlacedStudent", (req, res) => {
  console.log("show student placed");
  // connection.connect(function(err) {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
  connection.query(`SELECT Name,Branch,PlacedIN,PlacedON,Email FROM user WHERE Placed>=1`, function (err, result, fields) {
    if (err) throw err;
    console.log(result)
    res.status(200).send(result);
  });
});


app.post('/ViewStudent', function (req, res) {
  console.log("api called");
  try {
    console.log(req.body)
    console.log(req.body.Branch);
    console.log(req.body.SSC);
    console.log(req.body.Btech);
    console.log(req.body.Gender);
    connection.query(
      "SELECT  `Name`,`Branch`,`RollNo`,`Email`,`SSC`,`HSC`,`BTECHAGGREGATE`,`Backlogs`,`Placed` FROM user WHERE  Branch LIKE '" + req.body.Branch + "%'AND SSC >=" + req.body.SSC + " AND HSC >=" + req.body.HSC + " AND BTECHAGGREGATE >=" + req.body.Btech + " AND Year LIKE '%" + req.body.Year + "' AND Backlogs >=" + req.body.Backlogs + " AND Gender LIKE '" + req.body.Gender + "%'  AND Approve =1 ",
      function (err, result, fields) {
        console.log(result)
        if (err) throw err;
        console.log(" data inserted sucefully");
        console.log(result)
        res.status(200).send(result);
      })
  }
  catch (e) {
    return res.status(500).send('ERROR OCCURED AT API');
  }

})

app.post('/AddDrive', function (req, res) {
  var obj = req.body.degree;
  console.log("add drive api called")
  console.log(req.body)
  var result = Object.keys(obj).map(function (key) {
    if (obj[key])
      return key;

  });

  console.log(result)
  connection.query("INSERT INTO drivelist(Company,location,criteria,DOD,Description,degree) VALUES('" + req.body.Company + "','" + req.body.location + "','" + req.body.Criteria + "','" + req.body.DOD + "','" + req.body.Description + "','" + result + "')")
  res.status(200).send(result);
});

app.post("/ShowPending", (req, res) => {
  console.log("show student pending");
  console.log(req.body.page)
  // connection.connect(function(err) {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
 var k= connection.query("SELECT * FROM user WHERE Approve = 0 ", function (err, result, fields) {
    if (err) throw err;
    console.log(result)
    console.log(k.sql)
    res.status(200).send(result);
  });
});

app.post('/Approve', function (req, res) {
  console.log("add drive api called")
  console.log(req.body)
  for (var k in req.body) {

    connection.query("UPDATE user SET Approve=1 WHERE Name ='" + req.body[k] + "'")
    console.log(req.body[k])
  };
  res.send("APPROVED");

});

app.post('/Unplaced', function (req, res) {
  console.log("add drive api called")
  console.log(req.body)
  for (var k in req.body) {

    connection.query("UPDATE user SET Placed=0, PlacedIN='' WHERE Name ='" + req.body[k] + "'")
    console.log(req.body[k])
  };
  res.send("DELETED");

});

app.post('/Placed', function (req, res) {
  console.log("PLACED api called")
  console.log(req.body)
  for (var k in req.body.name) {

    connection.query("UPDATE user SET Placed=Placed+1 ,PlacedIN= CONCAT(PlacedIN,'" + req.body.placedin + ",'),PlacedON='" + req.body.placedon + "',PLACEDYEAR='" + req.body.Year + "' WHERE Name ='" + req.body.name[k] + "'")

  };
  res.send("ADDED TO PLACED STUDENTs");

});

app.post('/drivedelete', function (req, res) {
  console.log("DRIVE DELETE api called")
  console.log(req.body)
  for (var k in req.body) {

    connection.query("DELETE FROM `drivelist` WHERE Company ='" + req.body[k] + "'")

  };
  res.send("DELETED");

});

app.post('/DriveData', function (req, res) {
  connection.query(`SELECT * FROM drivelist ORDER BY DOD ASC `, function (err, result) {
    console.log(result)
    if (err) throw err;
    res.send(result)


  })
});

app.post('/drivedelete', function (req, res) {
  console.log("DRIVE DELETE api called")
  console.log(req.body)
  for (var k in req.body) {

    connection.query("DELETE FROM `drivelist` WHERE Company ='" + req.body[k] + "'")

  };
  res.send("DELETED");

});
app.post('/DriveData', function (req, res) {
  connection.query(`SELECT * FROM drivelist ORDER BY DOD ASC `, function (err, result) {
    console.log(result)
    if (err) throw err;
    res.send(result)


  })
});

app.post("/COMPANY", (req, res) => {
  console.log("show COMPANY DETAILS");
  console.log(req.body)

  connection.query("SELECT COUNT(Name) as Total ,PlacedIN,PLACEDYEAR FROM user  WHERE PLACEDYEAR=" + req.body.Year + " AND Placed>0  GROUP BY PlacedIN "
    , function (err, result, fields) {
      if (err) throw err;
      console.log(result)
      res.status(200).send(result);
    });
  // res.send();
})


app.post("/PlacementDetails", (req, res) => {
  console.log("PLACED api called")
  var MBranch
  console.log(req.body)
  connection.query("SELECT * FROM PlacementDetails WHERE Year='" + req.body.Year + "' "
    , function (err, result, fields) {
      //  console.log("result",result[0])
      if (result[0]) {
        console.log("inside if")

      }
      else {
        console.log(" inside else")
        connection.query("INSERT INTO PlacementDetails(Year) VALUES('" + req.body.Year + "')"
          , function (err, result, fields) {

            //  console.log(result);
          })


      }

    });
  res.send("ADDED TO PLACED STUDENTs");
})

app.post("/Plan", (req, res) => {
  req.body.name.forEach(element => {
    connection.query("SELECT Branch FROM user WHERE Name='" + element + "'",
      function (err, result, fields) {

        console.log(result[0].Branch, "inside sql");
        MBranch = result[0].Branch;

        console.log(MBranch, "ftgsdfgsdf")
        //connection.query("UPDATE PlacementDetails SET '"+MBranch+"'='"+MBranch+"'+1  WHERE Year ='" + req.body.Year + "'",
        var k = connection.query(`UPDATE PlacementDetails SET ${MBranch}=${MBranch}+1  where Year="${req.body.Year}"`,
          function (err, result, fields) {

            console.log(result);
            console.log(k.sql)

          })
      })

  })

  //q++;


});



app.post("/PlacementGraphdata", (req, res) => {

  connection.query("SELECT * from PlacementDetails", function (req, result) {
    res.send(result)
    console.log(result)
  })

})

//--------------USER--------------------//
app.post("/UpdateUser", (req, res) => {


  const data = req.body.data;
  const n = req.body.name
  console.log("name received", n)

  console.log("body received", data)
  connection.query("UPDATE user SET  `Name`='" + data.Name + "',FatherName='" + data.FatherName + "', `MothersName`='" + data.MotherName + "', `MobileNumber`='" + data.MobileNumber + "', `Branch`='" + data.Branch + "', `DOB`='" + data.DOB + "', `Year`='" + data.Year + "', `Gender`='" + data.Gender + "', `RollNo`='" + data.RollNo + "', `Age`='" + data.Age + "', `Email`='" + data.Email + "', `Address`='" + data.Address + "', `SSC`='" + data.SSC + "', `HSC`='" + data.HSC + "', `BTECHAGGREGATE`='" + data.Btech + "', `Backlogs`='" + data.Backlogs + "', `SSCSCHOOLNAME`='" + data.SchoolSSC + "', `HSCSCHOOLNAME`='" + data.SchoolHHC + "', `Password`='" + data.Password + "', `image`='" + data.image + "' WHERE Name='" + req.body.name + "'")
})

// app.use(express.static(path.join(__dirname,"client/build"))) 
// app.get("*",(req,res) => { 
//     res.sendFile(path.join(__dirname + "/main/build/index.html")) 
// }) 

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(3010)
console.log('Node app is running on port 3010');