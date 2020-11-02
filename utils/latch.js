class Latch {
  constructor(props, { output }) {
    this.update = ({ value }) => output(value);
    this.update(props);
  }
  stale() {}
}

export const latch = value => ({
  value,
  __EllxMeta__: {
    component: Latch
  }
});
