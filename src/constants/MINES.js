import SIZES from './SIZES';

const MINES = {
  limit: Math.floor(SIZES.fieldArea * 2 / 3),

  set quantity(newQuantity) {
    let localQuantity = Math.floor(Math.abs(newQuantity));

    if (localQuantity > this.limit) {
      localQuantity = this.limit;
    }

    this._quantity = localQuantity;
  },

  get quantity() {
    return this._quantity;
  },

  get cellsWithoutMines() {
    return SIZES.fieldArea - this._quantity;
  },
}

export default MINES;
