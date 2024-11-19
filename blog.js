const express = require("express");
const app = express();
const port = 3000;

const post = [
  {
    Title: "ciambellone",
    Content: "Ricetta",
    Image: "http://127.0.0.1:3000/ciambellone.jpeg",
    Tags: [
      "stringa1",
      "stringa2",
      "stringa3",
      "stringa4",
      "stringa5",
      "stringa6",
    ],
  },
  {
    Title: "cracker barbabietola",
    Content: "Ricetta",
    Image: "http://127.0.0.1:3000/cracker_barbabietola.jpeg",
    Tags: [
      "stringa1",
      "stringa2",
      "stringa3",
      "stringa4",
      "stringa5",
      "stringa6",
    ],
  },
  {
    Title: "pane fritto dolce",
    Content: "Ricetta",
    Image: "http://127.0.0.1:3000/pane_fritto_dolce.jpeg",
    Tags: [
      "stringa1",
      "stringa2",
      "stringa3",
      "stringa4",
      "stringa5",
      "stringa6",
    ],
  },
  {
    Title: "pasta barbabietola",
    Content: "Ricetta",
    Image: "http://127.0.0.1:3000/pasta_barbabietola.jpeg",
    Tags: [
      "stringa1",
      "stringa2",
      "stringa3",
      "stringa4",
      "stringa5",
      "stringa6",
    ],
  },
  {
    Title: "torta paesana",
    Content: "Ricetta",
    Image: "http://127.0.0.1:3000/torta_paesana.jpeg",
    Tags: [
      "stringa1",
      "stringa2",
      "stringa3",
      "stringa4",
      "stringa5",
      "stringa6",
    ],
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  let totalPost = 0;
  post.forEach((post) => (totalPost += 1));

  res.json([post, "Total Post: " + parseInt(totalPost)]);
});

app.listen(port, () => {
  console.log("Il server è online");
});
