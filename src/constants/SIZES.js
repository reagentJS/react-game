const SIZES = {
  _cols: 9,
  _rows: 9,
  cellSize: 44,
  margin: 2,

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

  get fieldWidthInPixels() {
    return this._cols * (this.cellSize + 2 * this.margin);
  },
};

export default SIZES;
