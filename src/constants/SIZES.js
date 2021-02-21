const SIZES = {
  _cols: 9,
  _rows: 9,
  cellSize: 44,
  margin: 2,

  get cols() {
    return this._cols;
  },

  get rows() {
    return this._rows;
  },

  set cols(newCols) {
    const localCols = Math.floor(newCols);
    this._cols = localCols < 2
      ? 2
      : localCols;
  },

  set rows(newRows) {
    const localRows = Math.floor(newRows);
    this._rows = localRows < 2
      ? 2
      : localRows;
  },

  get fieldArea() {
    return this._cols * this._rows;
  },

  get fieldWidthInPixels() {
    return this._cols * (this.cellSize + 2 * this.margin);
  },
};

export default SIZES;
