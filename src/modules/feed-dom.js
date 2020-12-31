import { displaySect, dateVar, userInput } from "./dom-ref";

const createDisplayElements = (() => {
  const myCreateElement = (tag, classAttr = "") => {
    const elem = document.createElement(tag);
    elem.setAttribute("class", classAttr);
    return elem;
  };

  const appendGroup = (parent, nodes) => {
    nodes.forEach((node) => {
      parent.appendChild(node);
    });
  };

  const createLayout = () => {
    const displayWrap = myCreateElement("div", "container");
    const displayRow = myCreateElement("div", "row");
    displayRow.setAttribute('style', 'background-color: rgba(255, 68, 34, 0.4);');
    const leftCol = myCreateElement("div", "col-12 col-md-4");
    leftCol.setAttribute("id", "left");
    const centreCol = myCreateElement("div", "col-12 col-md-4");
    centreCol.setAttribute("id", "centre");
    const rightCol = myCreateElement("div", "col-12 col-md-4");
    rightCol.setAttribute("id", "right");
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
  const left = document.querySelectorAll(".row div")[0];
  while (left.firstChild) {
    left.removeChild(left.firstChild);
  }
  const center = document.querySelectorAll(".row div")[1];
  while (center.firstChild) {
    center.removeChild(center.firstChild);
  }
  const right = document.querySelectorAll(".row div")[2];
  while (right.firstChild) {
    right.removeChild(right.firstChild);
  }
};

const alertShow = async (msg, elem, delay = 2000) => {
  const alert = createDisplayElements.myCreateElement(
    "p",
    "alert alert-danger w-100"
  );
  alert.textContent = msg;
  elem.insertAdjacentElement("beforebegin", alert);
  await setTimeout(() => {
    document.querySelector("p.alert").remove();
  }, delay);
};

const clearInput = async () => {
  await setTimeout(() => {
    userInput.value = "";
  }, 5000);
};

const backGroundMgr = (desc) => {
  if (new Date().getHours() < 19) {
    switch (desc) {
      case "clear sky":
        document.body.setAttribute(
          "style",
          "background: radial-gradient(circle, #ffc100 0%, #FF900D 100%);"
        );
        break;
      case "few clouds":
        document.body.setAttribute(
          "style",
          "background: linear-gradient(to bottom, #3987c9 0%, #e1e5ed 100%);"
        );
        break;
      case "scattered clouds":
        document.body.setAttribute(
          "style",
          "background: linear-gradient(to bottom, #ffff72 0%, #f9f9f7 100%);"
        );
        break;
      case "broken clouds":
        document.body.setAttribute(
          "style",
          "background: linear-gradient(to bottom, #ffff72 0%, #f9f9f7 100%);"
        );
        break;
      case "shower rain":
        document.body.setAttribute(
          "style",
          ";"
        );
        break;
      case "rain":
        document.body.setAttribute(
          "style",
          ";"
        );
        break;
      case "thunderstorm":
        document.body.setAttribute(
          "style",
          "background: linear-gradient(to bottom, #ffff72 0%, #f9f9f7 100%);"
        );
        break;
      case "snow":
        document.body.setAttribute(
          "style",
          "background: linear-gradient(to bottom, #3987c9 0%, #e1e5ed 100%);"
        );
        break;
      case "mist":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/mist.jpeg);"
        );
        break;
      // default:
      //   document.body.setAttribute('style', 'background: linear-gradient(to bottom, #3987c9 0%, #e1e5ed 100%);')
      //   break;
    }
  } else {
    switch (desc) {
      case "clear sky":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/clearskynight.jpg)"
        );
        break;
      case "few clouds":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/fewcloudsnight.jpg);"
        );
        break;
      case "scattered clouds":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/scatterenight.jpeg);"
        );
        break;
      case "broken clouds":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/scatterenight.jpeg);"
        );
        break;
      case "shower rain":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/nightrain.jpeg);"
        );
        break;
      case "rain":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/nightrain.jpeg);"
        );
        break;
      case "thunderstorm":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/nightthunderstom.jpeg);"
        );
        break;
      case "snow":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/nightsnow.jpg);"
        );
        break;
      case "mist":
        document.body.setAttribute(
          "style",
          "background-image: url(../images/mistnight.jpeg);"
        );
        break;
      default:
        document.body.setAttribute('style', 'background: linear-gradient(to bottom, #1d65f0 0%, #1ad3fd 100%);');
          break;
    }
  }
};

const updateUI = (
  conditionIcon = "",
  desc = "",
  feel = "",
  hum = "",
  temp = "",
  defaultPlace = ""
) => {
  dateVar.textContent = new Date();
  // Feed the left column
  const imgIcon = createDisplayElements.myCreateElement("img", "w-100");
  imgIcon.src = conditionIcon;
  document.querySelectorAll(".row div")[0].appendChild(imgIcon);
  // Feed the centre column
  const wrap1 = createDisplayElements.myCreateElement(
    "div",
    "wrap-1 d-flex flex-column align-items-center justify-content-center"
  );
  const span1 = createDisplayElements.myCreateElement("span");
  span1.textContent = desc;
  const span2 = createDisplayElements.myCreateElement("span");
  span2.textContent = feel;
  const span3 = createDisplayElements.myCreateElement("span");
  span3.textContent = hum;
  createDisplayElements.appendGroup(wrap1, [span1, span2, span3]);
  const centerSection = document.getElementById("centre");
  centerSection.appendChild(wrap1);
  // Feed the right column
  const wrap2 = createDisplayElements.myCreateElement(
    "div",
    "wrap-2 d-flex flex-column align-items-center justify-content-center"
  );
  const tempDisplay = createDisplayElements.myCreateElement("span", "h1");
  tempDisplay.textContent = temp + "°C";
  const convertBtn = createDisplayElements.myCreateElement(
    "span",
    "btn bg-success rounded-circle text-it"
  );
  convertBtn.textContent = "Get °F";
  const addCity = createDisplayElements.myCreateElement(
    "span",
    "city text-capitalize h4"
  );
  addCity.textContent = userInput.value;
  const rightSection = document.getElementById("right");
  createDisplayElements.appendGroup(wrap2, [addCity, tempDisplay, convertBtn]);
  rightSection.appendChild(wrap2);
};

export { updateUI, resetAllColumns, alertShow, clearInput, backGroundMgr };
