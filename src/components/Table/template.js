const CODES = {
  START: "A",
  END: "Z",
};
let counterRow = 0;

export function template(countColumns = 26) {
  let table = new Array(countColumns);
  table = table
    .fill("")
    .map(toCode)
    .map(toChar)
    .map(toRow)
    .join("");

  return table;
}

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
  const END = CODES.END.charCodeAt(0);
  const START = CODES.START.charCodeAt(0);
  const length = Math.abs(END - START) + 1;
  let columns = new Array(length);

  columns = columns.fill("")
    .map(toCode)
    .map(toChar)
    .map(column)
    .join("");

  return columns;
}

function column(char) {
  const template =
    counterRow !== 0
      ? `<div class="cell" contenteditable>${char}${counterRow}</div>`
      : `<div class="column">${char}</div>`;

  return template;
}

function toChar(code, index) {
  return String.fromCharCode(code);
}

function toCode(char, index = 0) {
  return CODES.START.charCodeAt(0) + index;
}
