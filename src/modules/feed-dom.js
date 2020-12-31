import { displaySect, dateVar, userInput } from './dom-ref';

const createDisplayElements = (() => {
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
    const displayRow = myCreateElement('div', 'row');
    const leftCol = myCreateElement('div', 'col-12 col-md-4');
    leftCol.setAttribute('id', 'left')
    const centreCol = myCreateElement('div', 'col-12 col-md-4');
    centreCol.setAttribute('id', 'centre');
    const rightCol = myCreateElement('div', 'col-12 col-md-4');
    rightCol.setAttribute('id', 'right');
    appendGroup(displayRow, [leftCol, centreCol, rightCol]);
    displayWrap.appendChild(displayRow);
    displaySect.appendChild(displayWrap);
  }

  return { createLayout, myCreateElement, appendGroup };
  
})();
// Render display section layout
createDisplayElements.createLayout();

// Rest all columns
const resetAllColumns = () => {
  const left = document.querySelectorAll('.row div')[0];
  while (left.firstChild) {
    left.removeChild(left.firstChild);
  }
  const center = document.querySelectorAll('.row div')[1];
  while (center.firstChild) {
    center.removeChild(center.firstChild);
  }
  const right = document.querySelectorAll('.row div')[2];
  while (right.firstChild) {
    right.removeChild(right.firstChild);
  }  
};

const alertShow = (msg, elem, delay=2000) => {
  const alert = createDisplayElements.myCreateElement('p', 'alert alert-danger w-100');
  alert.textContent = msg;
  elem.insertAdjacentElement('beforebegin', alert);
  setTimeout(() => {
    document.querySelector('p.alert').remove();
  }, delay);
}

const updateUI = (conditionIcon='', desc='', feel='', hum='', temp='') => {
  dateVar.textContent = new Date();
  // Feed the left column
  const imgIcon = createDisplayElements.myCreateElement('img', 'w-100');
  imgIcon.src = conditionIcon;
  document.querySelectorAll('.row div')[0].appendChild(imgIcon);
  // Feed the centre column
  const wrap1 = createDisplayElements.myCreateElement('div', 'wrap-1 d-flex flex-column align-items-center justify-content-center')
  const span1 = createDisplayElements.myCreateElement('span');
  span1.textContent = desc;
  const span2 = createDisplayElements.myCreateElement('span');
  span2.textContent = feel;
  const span3 = createDisplayElements.myCreateElement('span');
  span3.textContent = hum;
  createDisplayElements.appendGroup(wrap1, [span1, span2, span3]);
  const centerSection = document.getElementById('centre');
  centerSection.appendChild(wrap1);
  // Feed the right column
  const wrap2 = createDisplayElements.myCreateElement('div', 'wrap-2 d-flex flex-column align-items-center justify-content-center')
  const tempDisplay = createDisplayElements.myCreateElement('span', 'h1');
  tempDisplay.textContent = temp + '°C';
  const convertBtn = createDisplayElements.myCreateElement('span', 'btn bg-success rounded-circle');
  convertBtn.textContent = 'Get °F';
  const addCity = createDisplayElements.myCreateElement('span', 'city');
  addCity.textContent = userInput.value;
  const rightSection = document.getElementById('right');
  createDisplayElements.appendGroup(wrap2, [addCity, tempDisplay, convertBtn]);
  rightSection.appendChild(wrap2);
}

export { updateUI, resetAllColumns, alertShow }; 