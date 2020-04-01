const users = [
  {
    id: 1,
    login: "abner1",
    email: "abner.borda1@gmail.com",
    name: "Abner Borda Fonseca",
    password: "123456789",
    image: "N/A",
    preferredMovies: [
      {
        category: "action",
        Title: "The Incredible Hulk",
        Year: "2008",
        imdbID: "tt0800080",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "Hulk",
        Year: "2003",
        imdbID: "tt0286716",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "Planet Hulk",
        Year: "2010",
        imdbID: "tt1483025",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmFlNTNhNjktNDQ4NC00ZmVhLTg2NmYtOWExMmI0MzQ1ODFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "Hulk Vs.",
        Year: "2009",
        imdbID: "tt1325753",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc1NzMzMzU4Nl5BMl5BanBnXkFtZTcwNTQ3NDYwNQ@@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "The Incredible Hulk",
        Year: "1977–1982",
        imdbID: "tt0077031",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODc3YTIwY2ItMDU3MS00ZTFlLWJjOTAtNmE4M2M0NWI4MWE1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
      }
    ]
  },
  {
    id: 2,
    login: "elias",
    email: "elias.fonseca@gmail.com",
    name: "Elias Fonseca",
    password: "123456789",
    image: "N/A",
    preferredMovies: [
      {
        category: "action",

        Title: "Crazy, Stupid, Love.",
        Year: "2011",
        imdbID: "tt1570728",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SX300.jpg"
      },
      {
        Title:
          "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        Year: "1964",
        imdbID: "tt0057012",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
      },
      {
        Title: "Love Actually",
        Year: "2003",
        imdbID: "tt0314331",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg"
      },
      {
        Title: "Shakespeare in Love",
        Year: "1998",
        imdbID: "tt0138097",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
      },
      {
        Title: "P.S. I Love You",
        Year: "2007",
        imdbID: "tt0431308",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg"
      }
    ]
  },
  {
    id: 3,
    login: "abner3",
    email: "abner.borda3@gmail.com",
    name: "Abner Borda Fonseca",
    password: "123456789",
    image: "N/A",
    preferredMovies: [
      {
        category: "action",
        Title: "The Incredible Hulk",
        Year: "2008",
        imdbID: "tt0800080",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "Hulk",
        Year: "2003",
        imdbID: "tt0286716",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzQwZDg1MGEtN2E5My00ZDJlLWI4MzItM2U2MjJhYzlkNmEzXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "Planet Hulk",
        Year: "2010",
        imdbID: "tt1483025",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmFlNTNhNjktNDQ4NC00ZmVhLTg2NmYtOWExMmI0MzQ1ODFmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "Hulk Vs.",
        Year: "2009",
        imdbID: "tt1325753",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTc1NzMzMzU4Nl5BMl5BanBnXkFtZTcwNTQ3NDYwNQ@@._V1_SX300.jpg"
      },
      {
        category: "action",
        Title: "The Incredible Hulk",
        Year: "1977–1982",
        imdbID: "tt0077031",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODc3YTIwY2ItMDU3MS00ZTFlLWJjOTAtNmE4M2M0NWI4MWE1XkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
      }
    ]
  }
];

module.exports = users;
