const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const post = [
    {
      Title: "titolo1",
      Content: "contenuto1",
      Image: "immagine1",
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
      Title: "titolo2",
      Content: "contenuto2",
      Image: "immagine2",
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
      Title: "titolo3",
      Content: "contenuto3",
      Image: "immagine3",
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
      Title: "titolo4",
      Content: "contenuto4",
      Image: "immagine4",
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
      Title: "titolo5",
      Content: "contenuto5",
      Image: "immagine5",
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

  let totalPost = 0;
  post.forEach((post) => (totalPost += 1));

  res.json([post, "Total Post: " + totalPost]);
});

app.listen(port, () => {
  console.log("Il server è online");
});
