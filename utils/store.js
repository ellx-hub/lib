export default class Store {
  constructor({ subscribe }) {
    this.emit = value => this.value = value;
    this.off = subscribe(value => this.emit(value));
  }

  async *output() {
    while (true) {
      yield this.value;
      this.value = await new Promise(resolve => this.emit = resolve);
    }
  }

  dispose() {
    if (typeof this.off === 'function') this.off();
  }
}
