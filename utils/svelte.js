import {
  bind,
  binding_callbacks,
}
from 'svelte/internal';

const ellxify = Component => class {
  constructor(props, { initState, output }) {
    this.target = document.createElement('div');

    this.instance = new Component({
        target: this.target,
        props: {
            value: initState,
            ...props
        }
    });

    output(this.instance.$$.ctx[this.instance.$$.props.value]);
    binding_callbacks.push(() => bind(this.instance, 'value', output));
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

  render(node) {
    node.appendChild(this.target);
  }
};

export default component => {
  component = ellxify(component);
  return props => ({ ...props, __EllxMeta__: { component } });
};
