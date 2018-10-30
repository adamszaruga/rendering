
function renderMovies(movies) {

    var moviesHTML = movies.map(function(movie){
        return `
            <div class="rounded bg-dark d-flex align-items-stretch my-3 p-2">
                <img width="200" height="296" src="${movie.poster}" />
                <div class="bg-light p-2 rounded ml-2" style="width: 200px;">
                    <h3>${movie.title}</h3>
                    <p>${movie.year}</p>
                    <p>IMDB Rating: <br />  ${movie.imdbRating} / 10</p>
                    <p>Rotten Tomatoes Rating: <br /> ${movie.rottenTomatoesRating * 100}%</p>
                </div>
            </div>
        `
    });

    return `
        <div class="d-flex flex-wrap justify-content-around align-items-start">
            ${moviesHTML.join('')}
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}