import {fromCharAt} from '@core/utils.js';

const CODES = {
  START: "A",
  END: "Z",
};
let counterRow = 0;
let isIndexBoundWords = false;

export default ((countColumns = 36) => {
  window.countColumns = countColumns;
  let table = new Array(countColumns);
  table = table
    .fill("")
    .map(toCode)
    .map(toChar)
    .map(toRow)
    .join("");

  return table;
})();

function toRow(_, index) {
  const infoCell = index === 0 ? "" : index;
  const template = `
        <div class="row">
            <div class="row-info">${infoCell}</div>
            <div class="row-data">${getColumns()}</div>
        </div>
    `;

  counterRow++;

  return template;
}

function getColumns() {
  let columns = new Array(window.countColumns);

  columns = columns.fill("")
    .map(toCode)
    .map(toChar)
    .map(column)
    .join("");

  return columns;
}

function column(char, index) {
  const END = fromCharAt(CODES.END);
  console.log(END);
  const START = fromCharAt(CODES.START);
  const length = Math.abs(END - START) + 1;
  let boundIndex = (Math.floor(index / length) + 1)

  if (index !== 0 && (index % length === 0)) {
    isIndexBoundWords = true;
  }
  char = isIndexBoundWords ? String.fromCharCode(START + index-(length * (boundIndex-1))) : char;

  const nameCellHeader = (index <= length) ? char : dubleChar(char, boundIndex);
  const template =
    counterRow !== 0
      ? `<div class="cell" contenteditable>${nameCellHeader}${counterRow}</div>`
      : `<div class="column">${nameCellHeader}</div>`;

  return template;
}

function dubleChar(char, count) {
  let newChar = new Array(count);
  newChar = newChar.fill('').map(el => char).join('');

  return newChar;
} 

function toChar(code) {
  return String.fromCharCode(code);
}

function toCode(_, index = 0) {
  return CODES.START.charCodeAt(0) + index;
}
