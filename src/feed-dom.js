import { searchSect, displaySect, dateVar } from './dom-ref';
import { userInput } from './dom-ref';

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

  return { createLayout, myCreateElement, appendGroup };
  
})();

createDisplayElements.createLayout();
// Feed the left column
const updateUI = (conditionIcon='', desc='', feel='', hum='', temp='') => {
  dateVar.textContent = new Date();
  const imgIcon = createDisplayElements.myCreateElement('img');
  imgIcon.src = conditionIcon;
  document.querySelectorAll('.row div')[0].appendChild(imgIcon);
  // Feed the centre column
  const span1 = createDisplayElements.myCreateElement('span');
  span1.textContent = desc;
  const span2 = createDisplayElements.myCreateElement('span');
  span2.textContent = feel;
  const span3 = createDisplayElements.myCreateElement('span');
  span3.textContent = hum;
  createDisplayElements.appendGroup(document.querySelectorAll('.row div')[1], [span1, span2, span3]);
  // Feed the right column
  const tempDisplay = createDisplayElements.myCreateElement('span', 'h1');
  tempDisplay.textContent = temp + '°C';
  const convertBtn = createDisplayElements.myCreateElement('span', 'btn');
  convertBtn.textContent = 'Get °F';
  const addCity = createDisplayElements.myCreateElement('span', 'city');
  addCity.textContent = userInput.value;
  const rightSection = document.querySelectorAll('.row div')[2];
  createDisplayElements.appendGroup(rightSection, [addCity, tempDisplay, convertBtn]);
  // add city searched for


}

export default updateUI;