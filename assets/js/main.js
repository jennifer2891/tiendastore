const barraBusqueda = document.getElementById('barra-busqueda');
const resultadosBusqueda = document.getElementById('resultados-busqueda');

// Carga todos los productos al cargar la página
window.addEventListener('load', () => {
    mostrarResultados('');
});

barraBusqueda.addEventListener('input', (event) => {
    const terminoBusqueda = event.target.value.toLowerCase();
    mostrarResultados(terminoBusqueda);
});

function mostrarResultados(terminoBusqueda) {
    fetch('https://dummyjson.com/products') // reemplaza esta URL con la de tu API
        .then(response => response.json())
        .then(data => {
            resultadosBusqueda.innerHTML = ''; // limpia los resultados anteriores
            data.products.forEach(producto => {
                if (producto.title.toLowerCase().includes(terminoBusqueda)) {
                    const divProducto = document.createElement('div');
                    divProducto.className = 'card';
                    divProducto.innerHTML = `
                        <img src="${producto.thumbnail}" alt="${producto.title}">
                        <h2>${producto.title}</h2>
                        <p>${producto.description}</p>
                        <p>Precio: $${producto.price}</p>
                        <p>Descuento: ${producto.discountPercentage}%</p>
                        <p>Rating: ${producto.rating}</p>
                        <p>Stock: ${producto.stock}</p>
                        <p>Marca: ${producto.brand}</p>
                        <p>Categoría: ${producto.category}</p>
                    `;
                    resultadosBusqueda.appendChild(divProducto);
                }
            });
        });
}
