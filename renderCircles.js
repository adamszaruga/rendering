
function renderCircles(circles) {
    var circlesHTML = circles.map(function (circle) {
        return `
            <div style="width: ${circle.radius*2}px; height: ${circle.radius*2}px; border-radius: ${circle.radius}px; background-color: ${circle.color};">
                
            </div>
        `
    });

    return `
        <div class="d-flex flex-column align-items-center">
            ${circlesHTML.join('')}
        </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}