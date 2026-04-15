const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const { Schema } = mongoose;

mongoose
  .connect(
    "mongodb+srv://archigarg329_db_user:Atlas123@cluster0.sgymm0e.mongodb.net/?appName=Cluster0",
    {
      dbName: "FULLSTACKSUPER50",
    },
  )
  .then(() => {
    console.log("___________DB Connected________");
  })
  .catch((err) => {
    console.log(
      "________________error in db connection_____________",
      err.message,
    );
  });

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

const movieSchema = new mongoose.Schema({
  title: 
  {
    type : String,
    required : true,
    unique : true,
  },
  rating:
  {
    type : Number,
    min : 1,
    max : 10,
    required : [true, " Rating should bepresent and in b/w 1 to 18 "]
  },
  releaseYear: 
  {
    type: Number,
    default: 2000,
  },
  description: String,
  origin:
  {
    type: String,
    enum: ["Bollywood","Hollywood","Online Platform"]
  }
});

// create collection

const Movies = mongoose.model("Movie", movieSchema);

app.get("/", (req, res) => {
  console.log("/ route hit");
  res.send("HELLO WORLD");
});

app.use(express.json());


app.post("/movies", async (req, res) => {
    try {
        const movieData = req.body;
        let result;
        try {
            result = await Movies.insertOne(movieData);
        }
        catch (err)
        {
            res.status(400);
            res.json({
                success: false,
                message: err.message,
            });
            return;
        }
        console.log("result: ", result);
        res.json({
            success: true,
            message: "Movie inserted",
            data: {
                movie: result,
            },
        });
    }
    catch (err) {
        console.log("Error in POST movies: ", err.message);
        res.status(500);
        res.json({
            success: false,
            message: "Internal Server Error"
        });
    }
});
app.get("/users", (req, res) => {
  console.log("/users route hit");
  res.send("HELLO USERS");
});

app.listen(3000, () => {
  console.log("<----------------Server is running-------------------->");
});
