'use strict';

const ko = window.ko;

class DemoComponent extends ko.Component {
  get template() {
    const o = ko.observable('initial value');
    setInterval(() => o(new Date().toString()), 500);
    const c = ko.computed(() => ({
      elementName: 'b',
      attributes: {},
      children: [o()]
    }));
    const counter = ko.observable(0);

    return {
      elementName: 'div',
      attributes: {},
      children: [{
        elementName: 'div',
        attributes: {},
        children: ['An observable: ', o, ' ']
      }, {
        elementName: 'div',
        attributes: {},
        children: ['A computed: ', c, ' ']
      }, {
        elementName: 'div',
        attributes: {},
        children: ['An array: ', [o(), c()]]
      }, {
        elementName: 'div',
        attributes: {},
        children: ['A promise: ', Promise.resolve('resolved!')]
      }, {
        elementName: 'button',
        attributes: {
          'ko-click': () => counter.modify(v => v + 1)
        },
        children: ['Click ']
      }, ' Count: ', ko.computed(() => '' + counter())]
    };
  }
}

DemoComponent.register();

ko.applyBindings();
