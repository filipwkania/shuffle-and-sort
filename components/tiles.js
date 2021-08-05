const loadTiles = (tiles) => {
  const tilesBox = document.querySelector('.main__tiles');

  if (!tilesBox) {
    throw new Error('HTML file is missing .main__tiles element!');
  }

  tilesBox.innerHTML = '';

  tiles.forEach((tileIndex) => {
    const newTile = document.createElement('div');
    newTile.className = `tile flex-centered color-${tileIndex % 10}`;
    newTile.innerHTML = tileIndex;
    newTile.ariaLabel = 'Tile - ' + tileIndex;
    tilesBox.appendChild(newTile);
  });
};

export default loadTiles;
