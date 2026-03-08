function saveRoute(){

let route = document.getElementById("routeSelect").value

let routes = JSON.parse(localStorage.getItem("routes")) || []

routes.push(route)

localStorage.setItem("routes", JSON.stringify(routes))

alert("Route Saved!")

}

function showRoutes(){

let routes = JSON.parse(localStorage.getItem("routes")) || []

let container = document.getElementById("savedRoutes")

container.innerHTML=""

routes.forEach(function(route){

container.innerHTML += `
<div class="card">
<h3>Saved Route</h3>
<p>${route}</p>
</div>
`

})

}
