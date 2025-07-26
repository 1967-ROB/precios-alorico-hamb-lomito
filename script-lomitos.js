fetch('/data/precios.json')
  .then(response => response.json())
  .then(data => {
    const menu = document.getElementById('menu-container');
    Object.entries(data).forEach(([nombre, item]) => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="/img-lomitos/${item.imagen}" alt="${nombre}">
        <h3>${nombre}</h3>
        <p>${item.ingredientes}</p>
        <p><strong>${item.precio.toLocaleString()} Gs</strong></p>
      `;
      div.addEventListener('click', () => {
        document.getElementById('popup-title').textContent = nombre;
        document.getElementById('cantidad').value = 1;
        document.getElementById('popup').style.display = 'flex';
        document.getElementById('overlay').style.display = 'block';
        div.dataset.nombre = nombre;
        div.dataset.precio = item.precio;
      });
      menu.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error al cargar el menú:", error);
  });
