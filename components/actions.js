import loadTiles from './tiles.js';
import { sort, shuffle } from '../utils/index.js';
import file from '../locales/en-US.js';

const createBtn = (value) => {
  const newBtn = document.createElement('button');
  newBtn.className = 'btn flex-centered';
  newBtn.innerHTML = value;
  newBtn.ariaLabel = value + ' button';
  return newBtn;
};

const loadActions = (state) => {
  const actionsBox = document.querySelector('.main__actions');

  if (!actionsBox) {
    throw new Error('HTML file is missing .main__actions element!');
  }

  const shuffleBtn = createBtn(file.btn_shuffle);
  shuffleBtn.onclick = () => {
    state.tiles = shuffle(state.tiles);
    loadTiles(state.tiles);
  };

  const sortBtn = createBtn(file.btn_sort);
  sortBtn.onclick = () => {
    sort(state.tiles);
    loadTiles(state.tiles);
  };

  actionsBox.appendChild(shuffleBtn);
  actionsBox.appendChild(sortBtn);
};

export default loadActions;
