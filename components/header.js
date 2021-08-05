import file from '../locales/en-US.js';

const loadHeader = () => {
  const header = document.querySelector('header');

  if (!header) {
    throw new Error('HTML file is missing header element!');
  }

  header.innerHTML = file.title;
};

export default loadHeader;
