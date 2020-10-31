class Latch {
  constructor(props, { output }) {
    this.output = output;
    this.update(props);
  }

  update({ value }) {
    this.output(value);
  }

  stale() {}
}

export const latch = value => ({
  value,
  __EllxMeta__: {
    component: Latch
  }
});
