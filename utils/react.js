import React from 'react';
import ReactDOM from 'react-dom';

const ellxify = Component => class {
  constructor(props, { initState }) {
    this.value = initState;
    this.container = null;
    this.currentProps = { value: this.value, ...props, onChange: (v) => this.emit && this.emit(v) };

    this.instance = React.createElement(
      Component,
      this.currentProps
    );
  }

  async *output() {
    while (true) {
      yield this.value;
      this.value = await new Promise(resolve => this.emit = resolve);
    }
  }

  stale() {
    this.update({ ...this.currentProps, stale: true });
  }

  update(props) {
    this.currentProps = {
      stale: false,
      value: this.value,
      ...props,
      onChange: (v) => this.emit && this.emit(v)
    };

    this.instance = React.createElement(
      Component,
      this.currentProps,
    );
    this.render(this.container);
  }

  dispose() {
    if (this.container) {
      ReactDOM.unmountComponentAtNode(this.container);
    }
  }

  render(node) {
    if (!this.container) this.container = node;

    ReactDOM.render(this.instance, node);
  }
};

export default component => {
  component = ellxify(component);
  return props => ({ ...props, __EllxMeta__: { component } });
};
