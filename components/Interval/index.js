import { delay } from '/utils/time.js';

class Interval {
  constructor(props) {
    this.update(props);
  }

  async *output() {
    while (true) {
      yield this.gen();
      
      console.log(this.gen, this.ms);

      await delay(this.ms);
    }
  }

  update(props) {
    this.gen = props.gen;
    this.ms = props.ms;
  }
}

export default (props) => ({
  ...props,
  __EllxMeta__: {
    component: Interval,
  }
});