//class instance for Movie

class Movie {
    constructor(tittle, studio, rating = "PG") {
        this.tittle = tittle;
        this.studio = studio;
        this.rating = rating;
    }

    getPG() {
            let movieData =
                `Name: ${this.tittle}
            Production: ${this.studio}
            Rating: ${this.rating}`

            // let movieList = [];
            let ratingMovies = movieArray.filter((movie) => {
                return movie.rate === "PG13"
            }).map((elem) => elem.name)

            console.log(ratingMovies);

            return movieData;
        }
}

let Movie1 = new Movie("Iron Man", "Marvel", "PG13");

let Movie2 = new Movie("Casino Royale", "Eon Productions", "PG13");

let Movie3 = new Movie("Sniper", "DC", "R");

let movieArray = [{
        name: "Iron Man",
        production: "Marvel",
        rate: "PG13"
    },
    {
        name: "Sniper",
        production: "DC",
        rate: "R"
    },
    {
        name: "Casino",
        production: "Eon Productions",
        rate: "PG13"
    }
]


console.log(Movie2.getPG());

//console.log(mov.getPG());