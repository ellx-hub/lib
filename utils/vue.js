import Vue from 'vue';

const ellxify = Component => class {
  constructor(props, { initState }) {
    this.value = initState;
    this.emit = () => {};

    const ComponentClass = Vue.extend(Component);

    this.instance = new ComponentClass({
      propsData: {
        value: this.value,
        ...props
      }
    });

    this.instance.$watch('value', (v) => this.emit(v));
  }

  stale() {
    this.instance.$props.stale = true;
  }

  update(props = {}) {
    for (let key in props) {
      this.instance.$props[key] = props[key];
    }
    this.instance.$props.stale = false;
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
    this.instance.$mount();
    node.appendChild(this.instance.$el);
  }
};

export default component => {
  component = ellxify(component);
  return props => ({ ...props, __EllxMeta__: { component } });
};
