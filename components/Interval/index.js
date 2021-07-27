import { delay } from '../../utils/time.js';

class Interval {
  constructor(props, { output }) {
    this.update(props);
    this.output = output;

    output(this.gen());
    this.run();
  }

  async run() {
    while (true) {
      await delay(this.ms);
      if (!this.output) break;
      this.output(this.gen());
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

  dispose() {
    this.output = null;
  }
}

export default (props) => ({
  ...props,
  __EllxMeta__: {
    component: Interval,
  }
});
