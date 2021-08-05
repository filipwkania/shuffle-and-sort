'use strict';
import loadTiles from './components/tiles.js';
import loadActions from './components/actions.js';
import loadFooter from './components/footer.js';
import loadHeader from './components/header.js';

(function () {
  const state = {
    tiles: [],
  };

  for (let i = 1; i <= 9; i++) {
    state.tiles.push(i);
  }

  loadHeader();
  loadActions(state);
  loadTiles(state.tiles);
  loadFooter();
})();
