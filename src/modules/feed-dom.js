import { displaySect, dateVar, userInput } from './dom-ref';

// const img = new Image();
// img.src = myImg;
// console.log(img);

const createDisplayElements = (() => {
  const myCreateElement = (tag, classAttr = '') => {
    const elem = document.createElement(tag);
    elem.setAttribute('class', classAttr);
    return elem;
  };

  const appendGroup = (parent, nodes) => {
    nodes.forEach((node) => {
      parent.appendChild(node);
    });
  };

  const createLayout = () => {
    const displayWrap = myCreateElement('div', 'container');
    const displayRow = myCreateElement('div', 'row');
    displayRow.setAttribute('style', 'background-color: rgba(255, 255, 255, 0.3);');
    const leftCol = myCreateElement('div', 'col-12 col-md-4');
    leftCol.setAttribute('id', 'left');
    const centreCol = myCreateElement('div', 'col-12 col-md-4');
    centreCol.setAttribute('id', 'centre');
    const rightCol = myCreateElement('div', 'col-12 col-md-4');
    rightCol.setAttribute('id', 'right');
    appendGroup(displayRow, [leftCol, centreCol, rightCol]);
    displayWrap.appendChild(displayRow);
    displaySect.appendChild(displayWrap);
  };

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

const alertShow = async (msg, elem, delay = 2000) => {
  const alert = createDisplayElements.myCreateElement(
    'p',
    'alert alert-danger w-100',
  );
  alert.textContent = msg;
  elem.insertAdjacentElement('beforebegin', alert);
  await setTimeout(() => {
    document.querySelector('p.alert').remove();
  }, delay);
};

const clearInput = async () => {
  await setTimeout(() => {
    userInput.value = '';
    userInput.setAttribute('placeholder', 'Enter your city');
    userInput.setAttribute('autofocus', '');
  }, 5000);
};

const backGroundMgr = (desc) => {
  if (new Date().getHours() < 19) {
    switch (desc) {
      case 'clear sky':
        document.body.setAttribute(
          'class',
          'clearsky size-no-repeat',
        );
        break;
      case 'few clouds':
        document.body.setAttribute(
          'class',
          'fewcloud size-no-repeat',
        );
        break;
      case 'scattered clouds':
        document.body.setAttribute(
          'class', 'scatteredcloud size-no-repeat'
          // 'background: linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%); color: #f1f1e2;',
        );
        break;
      case 'broken clouds':
        document.body.setAttribute(
          'class', 'scatteredcloud size-no-repeat'
          // 'background: linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%); color: #f1f1e2;',
        );
        break;
      case 'shower rain':
        document.body.setAttribute(
          'class', 'rain size-no-repeat'
          // 'background: linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%); color: #fff;',
        );
        break;
      case 'rain':
        document.body.setAttribute(
          'class', 'rain'
          // 'background: linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%); color: #fff;',
        );
        break;
      case 'thunderstorm':
        document.body.setAttribute(
          'class', 'thunderstorm size-no-repeat'
          // 'background: linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%); color: #fff;',
        );
        break;
      case 'snow':
        document.body.setAttribute(
          'class', 'snow size-no-repeat'
          // 'background: linear-gradient(to bottom, #3987c9 0%, #e1e5ed 100%);',
        );
        break;
      case 'mist':
        document.body.setAttribute(
          'class', 'mist size-no-repeat'
          // 'background: linear-gradient(to bottom, #b7eaff 0%,#94dfff 100%);',
        );
        document.querySelector('.row').setAttribute('style', 'color: #333; background-color: rgba(255, 254, 251, 0.5);');
        break;
      default:
        document.body.setAttribute(
          'class', 'default size-no-repeat'
          // 'background: linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%); color: #f1f1e2;',
        );
        document.querySelector('.row').setAttribute('style', 'background-color: rgba(255, 255, 255, 0.3); color: #333;');
        break;
    }
  } else {
    switch (desc) {
      case 'clear sky':
        document.body.setAttribute(
          'class',
          'clearskynight size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'few clouds':
        document.body.setAttribute(
          'class',
          'fewcloudnight size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'scattered clouds':
        document.body.setAttribute(
          'class',
          'scatterednight size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'broken clouds':
        document.body.setAttribute(
          'class',
          'scatterednight size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'shower rain':
        document.body.setAttribute(
          'class',
          'nightrain size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'rain':
        document.body.setAttribute(
          'class',
          'nightrain size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'thunderstorm':
        document.body.setAttribute(
          'class',
          'nightthunderstorm size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'snow':
        document.body.setAttribute(
          'class',
          'nightsnow size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;')
        break;
      case 'mist':
        document.body.setAttribute(
          'class',
          'mistnight size-no-repeat',
        );
        document.getElementById('search-area').setAttribute('style', 'color: #f1f1e2;');
        document.querySelector('.row').setAttribute('style', 'background-color: rgba(255, 255, 255, 0.3);');
        break;
      default:
        document.body.setAttribute('class', 'default size-no-repeat');
        document.getElementById('search-area').setAttribute('style', 'color: #111;');
        document.querySelector('.row').setAttribute('style', 'background-color: rgba(0, 0, 0, 0.3);');
        break;
    }
  }
};

/* eslint-disable */
const updateUI = (
  conditionIcon = '',
  desc = '',
  feel = '',
  hum = '',
  temp = '',
  defaultPlace = '', 
) => {
  dateVar.textContent = new Date();
  // Feed the left column
  const imgIcon = createDisplayElements.myCreateElement('img', 'w-100');
  imgIcon.src = conditionIcon;
  document.querySelectorAll('.row div')[0].appendChild(imgIcon);
  // Feed the centre column
  const wrap1 = createDisplayElements.myCreateElement(
    'div',
    'wrap-1 d-flex flex-column align-items-center justify-content-center',
  );
  const span1 = createDisplayElements.myCreateElement('span', 'mb-1 text-capitalize');
  span1.textContent = desc;
  const span2 = createDisplayElements.myCreateElement('span', 'mb-1 feel');
  span2.textContent = `${feel}°C`;
  const span3 = createDisplayElements.myCreateElement('span', 'mb-1');
  span3.textContent = `${hum}%`;
  createDisplayElements.appendGroup(wrap1, [span1, span2, span3]);
  const centerSection = document.getElementById('centre');
  centerSection.appendChild(wrap1);
  // Feed the right column
  const wrap2 = createDisplayElements.myCreateElement(
    'div',
    'wrap-2 d-flex flex-column align-items-center justify-content-center',
  );
  const tempDisplay = createDisplayElements.myCreateElement('span', 'h1');
  tempDisplay.textContent = `${temp}°C`;
  const convertBtn = createDisplayElements.myCreateElement(
    'span',
    'btn bg-success rounded-circle text-it',
  );
  convertBtn.textContent = 'Get °F';
  const addCity = createDisplayElements.myCreateElement(
    'span',
    'city text-capitalize h4',
  );
  addCity.textContent = `${userInput.value}, ${defaultPlace}`;
  const rightSection = document.getElementById('right');
  createDisplayElements.appendGroup(wrap2, [addCity, tempDisplay, convertBtn]);
  rightSection.appendChild(wrap2);
};
/* eslint-enable */

export {
  updateUI, resetAllColumns, alertShow, clearInput, backGroundMgr,
};
