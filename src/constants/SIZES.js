const SIZES = {
  _cols: 9,
  _rows: 9,

  maxUnit: 58,
  unitByWindowWidth: 58,
  unitByWindowHeight: 58,
  infoHeight: 50,
  paddings: 40,
  get unit()  {
    return Math.min(this.maxUnit, this.unitByWindowWidth, this.unitByWindowHeight);
  },

  get cellSize() {
    return this.unit - (2 * this.margin);
  },

  get margin() {
    return this.unit * 0.069;
  },

  set rows(newRows) {
    const localRows = Math.floor(Math.abs(newRows));
    this._rows = localRows < 2
      ? 2
      : localRows;
  },

  get rows() {
    return this._rows;
  },

  set cols(newCols) {
    const localCols = Math.floor(Math.abs(newCols));
    this._cols = localCols < 2
      ? 2
      : localCols;
  },

  get cols() {
    return this._cols;
  },

  get fieldArea() {
    return this._cols * this._rows;
  },
};

export default SIZES;
