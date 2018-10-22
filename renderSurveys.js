
function renderSurveys(surveys) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(surveys)}</code>
        </div>
    `
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "surveys"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}