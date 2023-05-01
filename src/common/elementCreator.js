const elementCreator = (element = 'div', parentElement = null, className = '', content = '') => {
  const el = document.createElement(element);
  el.className = className;
  el.innerHTML = content;
  if (parentElement) {
    parentElement.append(el);
  }
  return el;
};

export default elementCreator;
