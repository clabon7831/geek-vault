import alienImage from "../assets/images/Alien.jpg"
import backToTheFutureImage from "../assets/images/Back to the Future.jpg"
import ghostbustersImage from "../assets/images/Ghostbusters.jpg"
import jawsImage from "../assets/images/Jaws.jpg"
import jurassicParkImage from "../assets/images/Jurassic Park.jpg"
import lordOfTheRingsImage from "../assets/images/Lord of the rings.jpg"
import avengersImage from "../assets/images/The Avengers.jpg"
import batmanImage from "../assets/images/The Batman.jpg"
import darkKnightImage from "../assets/images/The Dark Knight.jpg"
import matrixImage from "../assets/images/The Matrix.jpg"

const mockMovies = [
    {
        id: 1,
        title: "The Avengers",
        year: 2012,
        genre: "Action",
        director: "Joss Whedon",
        description: "A team of heroes joins forces to stop a powerful threat.",
        image: avengersImage
    },
    {
        id: 2,
        title: "The Batman",
        year: 2022,
        genre: "Action",
        director: "Matt Reeves",
        description: "Batman investigates a series of crimes threatening Gotham City.",
        image: batmanImage
    },
    {
        id: 3,
        title: "Jurassic Park",
        year: 1993,
        genre: "Adventure",
        director: "Steven Spielberg",
        description: "Visitors to a dinosaur theme park fight to survive when things go wrong.",
        image: jurassicParkImage
    },
    {
        id: 4,
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        director: "Lana and Lilly Wachowski",
        description: "A computer hacker discovers that the world around him is not what it seems.",
        image: matrixImage
    },
    {
        id: 5,
        title: "Jaws",
        year: 1975,
        genre: "Thriller",
        director: "Steven Spielberg",
        description: "A seaside town is threatened by a dangerous great white shark.",
        image: jawsImage
    },
    {
        id: 6,
        title: "Ghostbusters",
        year: 1984,
        genre: "Comedy",
        director: "Ivan Reitman",
        description: "A group of scientists starts a business capturing ghosts in New York City.",
        image: ghostbustersImage
    },
    {
        id: 7,
        title: "Back to the Future",
        year: 1985,
        genre: "Sci-Fi",
        director: "Robert Zemeckis",
        description: "A teenager accidentally travels into the past and must find a way home.",
        image: backToTheFutureImage
    },
    {
        id: 8,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        director: "Christopher Nolan",
        description: "Batman faces a dangerous criminal who brings chaos to Gotham City.",
        image: darkKnightImage
    },
    {
        id: 9,
        title: "Alien",
        year: 1979,
        genre: "Horror",
        director: "Ridley Scott",
        description: "A spaceship crew encounters a deadly creature during their journey home.",
        image: alienImage
    },
    {
        id: 10,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
        genre: "Fantasy",
        director: "Peter Jackson",
        description: "A group of heroes begins a dangerous journey to destroy a powerful ring.",
        image:lordOfTheRingsImage
    }
]

export { mockMovies }