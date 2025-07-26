fetch('/data/precios.json')
  .then(response => response.json())
  .then(data => {
const menu = document.getElementById('menu-container');
    Object.entries(data).forEach(([nombre, item]) => {
      const div = document.createElement('div');
      div.className = 'producto';
      div.innerHTML = `
        <img src="/img-pizza/${item.imagen}" alt="${nombre}">
        <h3>${nombre}</h3>
        <p>${item.ingredientes}</p>
        <p><strong>${item.precio.toLocaleString()} Gs</strong></p>
      `;
      menu.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error al cargar el menú:", error);
  });
