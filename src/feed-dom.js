import { searchSect, displaySect, icon } from './dom-ref';

const createDisplayElements = (() => {
  let id = 0;
  const myCreateElement = (tag, classAttr='') => {
    const elem = document.createElement(tag);
    elem.setAttribute('class', classAttr);
    return elem;
  }

  const appendGroup = (parent, nodes) => {
    nodes.forEach((node) => {
      parent.appendChild(node);
    });
  }

  const createLayout = () => {
    const displayWrap = myCreateElement('div', 'container');
    displayWrap.setAttribute('id', id);
    const displayRow = myCreateElement('div', 'row');
    const leftCol = myCreateElement('div', 'col-12 col-md-4');
    const centreCol = myCreateElement('div', 'col-12 col-md-4');
    const rightCol = myCreateElement('div', 'col-12 col-md-4');
    appendGroup(displayRow, [leftCol, centreCol, rightCol]);
    displayWrap.appendChild(displayRow);
    displaySect.appendChild(displayWrap);
    id++;
  }

  return { createLayout, myCreateElement };
  
})();

const updateUI = (conditionIcon, desc='', feel='', hum='' ) => {
  createDisplayElements.createLayout();
  const imgIcon = createDisplayElements.myCreateElement('img');
  imgIcon.src = conditionIcon;
  document.querySelectorAll('.row div')[0].appendChild(imgIcon);
  document.querySelectorAll('.row div')[1];
  document.querySelectorAll('.row div')[2];
}

export default updateUI;