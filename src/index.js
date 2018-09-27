const ko = window.ko

class DemoComponent extends ko.Component {
  get template () {
    const o = ko.observable('initial value')
    setInterval(() => o(new Date().toString()), 500)
    const c = ko.computed(() => (<b>{o()}</b>))

    return (
      <div>
        <div>An observable: {o} </div>
        <div>A computed: {c} </div>
        <div>An array: {[o(), c()]}</div>
        <div>A promise: {Promise.resolve('resolved!')}</div>
      </div>
    )
  }
}

DemoComponent.register()

ko.applyBindings()
