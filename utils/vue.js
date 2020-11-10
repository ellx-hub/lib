import Vue from 'vue';

const ellxify = Component => class {
  constructor(props, { initState, output }) {
    const ComponentClass = Vue.extend(Component);

    this.instance = new ComponentClass({
      propsData: {
        value: initState,
        ...props
      }
    });

    this.instance.$on('input', output);
    output(this.instance.value);
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

  render(node) {
    this.instance.$mount();
    node.appendChild(this.instance.$el);
  }
};

export default component => {
  component = ellxify(component);
  return props => ({ ...props, __EllxMeta__: { component } });
};
