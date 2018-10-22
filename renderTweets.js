
function renderTweets(tweets) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(tweets)}</code>
        </div>
    `
}

function tweets() {
    var content = document.getElementById('content');

    var tweetsAbstraction = [
        {
            title: "tweet"
        }
    ]

    content.innerHTML = renderTweets(tweetsAbstraction);

}