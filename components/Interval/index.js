import { delay } from '/utils/time.js';

class Interval {
  constructor(props) {
    this.update(props);
  }

  async *output() {
    while (true) {
      yield this.gen();

      await delay(this.ms);
    }
  }

  update(props) {
    this.gen = props.gen;
    this.ms = props.ms;
    
    if (!this.gen) {
      throw new Error('`gen` is not specified');
    }
    
    if (!this.ms) {
      throw new Error('`ms` is not specified');
    }
  }
}

export default (props) => ({
  ...props,
  __EllxMeta__: {
    component: Interval,
  }
});
