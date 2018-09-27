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
      }]
    };
  }
}

DemoComponent.register();

ko.applyBindings();
