import React from 'react';
import ReactDOM from 'react-dom';

const ellxify = Component => class {
  constructor(props, { initState }) {
    this.value = initState;
    this.container = null;

    this.instance = React.createElement(
      Component,
      { value: this.value, ...props, onChange: (v) => this.emit && this.emit(v) }
    );
  }

  async *output() {
    while (true) {
      this.value = await new Promise(resolve => this.emit = resolve);
      yield this.value;
    }
  }

  update(props) {
    this.dispose();
    this.instance = React.createElement(
      Component,
      { value: this.value, ...props, onChange: (v) => this.emit && this.emit(v) }
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
