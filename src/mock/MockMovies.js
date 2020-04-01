const movies = [
  {
    views: 3440,
    category: "action",
    Title: "The Incredible Hulk",
    Year: "2008",
    imdbID: "tt0800080",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
  },
  {
    views: 3440,
    category: "action",
    Title: "Hulk",
    Year: "2003",
    imdbID: "tt0286716",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg"
  },
  {
    views: 30,
    category: "action",

    Title: "Planet Hulk",
    Year: "2010",
    imdbID: "tt1483025",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmFlNTNhNjktNDQ4NC00ZmVhLTg2NmYtOWExMmI0MzQ1ODFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    views: 30,
    category: "action",

    Title: "Hulk Vs.",
    Year: "2009",
    imdbID: "tt1325753",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc1NzMzMzU4Nl5BMl5BanBnXkFtZTcwNTQ3NDYwNQ@@._V1_SX300.jpg"
  },
  {
    views: 4430,
    category: "action",

    Title: "The Incredible Hulk",
    Year: "1977–1982",
    imdbID: "tt0077031",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODc3YTIwY2ItMDU3MS00ZTFlLWJjOTAtNmE4M2M0NWI4MWE1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
  },
  {
    views: 30,
    category: "action",

    Title: "The Incredible Hulk Returns",
    Year: "1988",
    imdbID: "tt0095368",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI5NjQ0NzczN15BMl5BanBnXkFtZTcwNzM1ODMyMQ@@._V1_SX300.jpg"
  },
  {
    views: 390,
    category: "action",

    Title: "The Incredible Hulk",
    Year: "1996–1998",
    imdbID: "tt0115215",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmVjYzA3MmYtZjBhOS00OGI5LWIzZTEtOTRkZGY2ZWQ5NjkzXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg"
  },
  {
    views: 39990,
    category: "action",

    Title: "Hulk and the Agents of S.M.A.S.H.",
    Year: "2013–2015",
    imdbID: "tt2455514",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg1MzIxMzM4Nl5BMl5BanBnXkFtZTcwMTg3Mzc5OQ@@._V1_SX300.jpg"
  },
  {
    views: 3990,
    category: "action",

    Title: "The Trial of the Incredible Hulk",
    Year: "1989",
    imdbID: "tt0098512",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDg3NmYwMDQtNTE5MC00NDFlLWI3YjktMWNjZDlkZWVmOWRiXkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg"
  },
  {
    views: 3990,
    category: "action",

    Title: "The Death of the Incredible Hulk",
    Year: "1990",
    imdbID: "tt0099387",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU5OTA1OTkwNV5BMl5BanBnXkFtZTcwODM3ODkyMQ@@._V1_SX300.jpg"
  },
  {
    views: 3990,
    category: "action",

    Title: "Crazy, Stupid, Love.",
    Year: "2011",
    imdbID: "tt1570728",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
  },
  {
    views: 39990,
    category: "love",

    Title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    Year: "1964",
    imdbID: "tt0057012",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "Love Actually",
    Year: "2003",
    imdbID: "tt0314331",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "Shakespeare in Love",
    Year: "1998",
    imdbID: "tt0138097",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "P.S. I Love You",
    Year: "2007",
    imdbID: "tt0431308",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "I Love You, Man",
    Year: "2009",
    imdbID: "tt1155056",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "Love & Other Drugs",
    Year: "2010",
    imdbID: "tt0758752",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "Punch-Drunk Love",
    Year: "2002",
    imdbID: "tt0272338",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmE1OTY4NjgtYjcwNC00NWE4LWJiNGMtZmVhYTdlMWE1YzIxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "In the Mood for Love",
    Year: "2000",
    imdbID: "tt0118694",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTJlMmIwYjAtYWJmYy00YzE2LWE1OTYtZjIyMzg0YWUwOTg4XkEyXkFqcGdeQXVyMTA1NTM1NDI2._V1_SX300.jpg"
  },
  {
    views: 3099,
    category: "love",

    Title: "Love, Rosie",
    Year: "2014",
    imdbID: "tt1638002",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTk0Mzg1MTU1MF5BMl5BanBnXkFtZTgwMjU3ODI2MzE@._V1_SX300.jpg"
  },
  {
    views: 3022,
    category: "fear",

    Title: "Planet Terror",
    Year: "2007",
    imdbID: "tt1077258",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODdmNmM2ZTgtODM1MS00ZGMxLTk3MTMtMGQ1ODZhMTQ1NWEwL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    views: 3022,
    category: "fear",

    Title: "The Terror",
    Year: "2018–",
    imdbID: "tt2708480",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTJjODJjMjAtMmQzYi00OTI2LWFiMTktNDBiZjY5MDA3MWE1XkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SX300.jpg"
  },
  {
    views: 3022,
    category: "fear",

    Title: "Birdemic: Shock and Terror",
    Year: "2010",
    imdbID: "tt1316037",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTMyNmM1ODYtZmU3OS00NWIwLTg0MWEtNDExY2NlMzYzNTQ4XkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg"
  },
  {
    views: 3022,
    category: "fear",

    Title: "Toy Story of Terror",
    Year: "2013",
    imdbID: "tt2446040",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYTZkY2JjMDItYzEwMS00MjVlLTlhYjktMmI5YjYzMjdmZGMxXkEyXkFqcGdeQXVyNDIwODAwNzg@._V1_SX300.jpg"
  },
  {
    views: 3022,
    category: "fear",

    Title: "Snow White: A Tale of Terror",
    Year: "1997",
    imdbID: "tt0119227",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzE0MTk2OGYtMmM5ZC00MGQ4LTk1MGYtZTQ4Y2MzN2M4MzE4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    views: 320,
    category: "fear",

    Title: "Terror Train",
    Year: "1980",
    imdbID: "tt0081617",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjNkZmUwOGQtZGZjNC00MTIzLWFmYzItNmQ4ZTA0ZjJlYzM2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  },
  {
    views: 3990,
    category: "fear",

    Title: "Zankyou No Terror",
    Year: "2014",
    imdbID: "tt3613454",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDMzNGEyNzItOTEyYi00MzQxLTgxOGQtZGJkZTRmNjUzN2Y3XkEyXkFqcGdeQXVyMjQ1NjEyNzE@._V1_SX300.jpg"
  },
  {
    views: 3880,
    category: "fear",

    Title: "The Terror",
    Year: "1963",
    imdbID: "tt0057569",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDIxMTIzYWEtNTgwOC00MzRmLWE1MWQtMTY3Y2ZhOWJmZGRmXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg"
  },
  {
    views: 380,
    category: "fear",

    Title: "Galaxy of Terror",
    Year: "1981",
    imdbID: "tt0082431",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTE0MjkzMWItYTI3ZS00ZGRiLTllOTktMGMyNzlkMjRmZWZmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    views: 3990,
    category: "fear",
    Title: "Tales of Terror",
    Year: "1962",
    imdbID: "tt0056552",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWU4ZTBhNzQtYmE2NC00OWFhLWEyZGEtOTdiYjBkNTQ5NjJjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }
];

module.exports = movies;
