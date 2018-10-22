
function renderAlbums(albums) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(albums)}</code>
        </div>
    `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            title: "albums"
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}