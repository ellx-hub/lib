import {
  bind,
  binding_callbacks,
}
from 'svelte/internal';

const ellxify = Component => class {
  constructor(props, { initState }) {
    this.target = document.createElement('div');
    this.emit = null;

    this.instance = new Component({
        target: this.target,
        props: {
            value: initState,
            ...props
        }
    });

    this.value = this.instance.$$.ctx[this.instance.$$.props.value];
    binding_callbacks.push(() => bind(this.instance, 'value', value => this.emit && this.emit(value)));
  }

  stale() {
    this.update({ stale: true });
  }

  update(props = {}) {
    this.instance.$set({
      stale: false,
      ...props,
    });
  }

  dispose() {
    this.instance.$destroy();
  }

  async *output() {
    while (true) {
      yield this.value;
      this.value = await new Promise(resolve => this.emit = resolve);
    }
  }

  render(node) {
    node.appendChild(this.target);
  }
};

export default component => {
  component = ellxify(component);
  return props => ({ ...props, __EllxMeta__: { component } });
};
