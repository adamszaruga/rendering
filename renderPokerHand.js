
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    var cardsHTML = pokerHand.map(function(card){
        return `
            <img width=80 src="cards/${card.value}${card.suit}.png"/>
        `
    });

    return `
        <div class="text-center mt-5 d-flex justify-content-center align-items-start">
            ${cardsHTML.join('')}
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}