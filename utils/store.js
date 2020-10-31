export default class Store {
  constructor({ subscribe }, { output }) {
    this.off = subscribe(output);
  }

  dispose() {
    if (typeof this.off === 'function') this.off();
  }
}
