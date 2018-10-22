
function renderMovies(movies) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(movies)}</code>
        </div>
    `
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight"
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}