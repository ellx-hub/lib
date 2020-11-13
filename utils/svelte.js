import {
  bind,
  binding_callbacks,
}
from 'svelte/internal';

const ellxify = Component => class {
  constructor(props, { initState, output }) {
    this.output = output;
    this.props = {
      value: initState,
      ...props,
    };

    output(this.props.value);
  }

  stale() {
    this.update({ stale: true });
  }

  update(props = {}) {
    if (!this.instance) return;

    this.instance.$set({
      stale: false,
      ...props,
    });
  }

  dispose() {
    if (this.instance) this.instance.$destroy();
  }

  render(node) {
    this.instance = new Component({
      target: node,
      props: this.props,
    });

    this.output(this.instance.$$.ctx[this.instance.$$.props.value]);
    binding_callbacks.push(() => bind(this.instance, 'value', this.output));
  }
};

export default component => {
  component = ellxify(component);
  return props => ({ ...props, __EllxMeta__: { component } });
};
