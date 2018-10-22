
function renderCoffeeOrders(coffeeOrders) {
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(coffeeOrders)}</code>
        </div>
    `
}

function coffeeOrders() {
    var content = document.getElementById('content');

    var coffeeOrdersAbstraction = [
        {
            title: "coffeeOrders"
        }
    ]

    content.innerHTML = renderCoffeeOrders(coffeeOrdersAbstraction);

}