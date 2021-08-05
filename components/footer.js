import file from '../locales/en-US.js';

const loadFooter = () => {
  const footer = document.querySelector('footer');

  if (!footer) {
    throw new Error('HTML file is missing footer element!');
  }

  footer.innerHTML = file.credits + 'Filip Kania';
};

export default loadFooter;
