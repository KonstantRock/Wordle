export const field = {
  'rows': 6,
  'cells': 5,
  'currentRow': 1,
  'currentCell': 1,
  // для выставления числовой нумерации в нащвании классов html разметки
  'rowArr': [],
  'cellArr': [],

  setSize: function (rNum, cNum) {
    this.rows = rNum;
    this.cells = cNum;

    for(let i = 1; i <= rNum; i++) {
      this.rowArr.push(i);
    }
    for(let i = 1; i <= cNum; i++) {
      this.cellArr.push(i);
    } return this;
  },

  draw: function(element) {
    for(let row of this.rowArr) {
      const newRow = document.createElement('div');

      newRow.classList.add(`main__row-${row}`);
      newRow.classList.add('row');
      element.appendChild(newRow);

      for(let cell of this.cellArr) {
        const newCell = document.createElement('div');

        newCell.classList.add(`row-${row}__cell-${cell}`);
        newCell.classList.add('cell');
        newRow.appendChild(newCell);
      }
    }
  },

  setDefault: function(rNum = 6, cNum = 5) {
    this.currentRow = 1;
    this.currentCell = 1;
    this.rows = rNum;
    this.cells = cNum;
  },

  increaseRowNum: function() {
    if(this.currentRow < this.rows) this.currentRow += 1;
  },

  increaseCellNum: function() {
    if(this.currentCell < this.cells) this.currentCell += 1;
  },

  decreaseCellNum: function() {
    if(this.currentCell > 1) this.currentCell -= 1;
  },

  resetCellNum: function() {
    this.currentCell = 1;
  },

  getCurrentCellSelector: function (arr) {
    return arr.find(e => e === `.row-${this.currentRow}__cell-${this.currentCell}`);
  },

  getCurrentRowSelectorsArr: function(arr) {
    return arr.filter(e => e.slice(0, 6) === `.row-${this.currentRow}`);
  },
  
  getAllSelectorsArr: function() {
    const arr = [];

    for(let row of this.rowArr) {
      for(let cell of this.cellArr) {
        arr.push(`.row-${row}__cell-${cell}`);
      }
    } return arr;
  }
}