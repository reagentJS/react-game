const SIZES = {
  fieldWidth: 9,
  fieldHeight: 9,

  cellSize: 44,
  margin: 2,

  get fieldWidthInPixels() {
    return this.fieldWidth * (this.cellSize + 2 * this.margin);
  },
};

export default SIZES;
