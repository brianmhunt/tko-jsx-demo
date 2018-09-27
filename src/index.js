const ko = global.ko

class DemoComponent extends ko.component {
  get template () {
    const o = ko.observable()
    setInterval(() => o(new Date().format()), 500)
    const c = ko.computed(() => (
      <b>o()</b>
    ))

    return (
      <div>
        An observable: {o()}
        A computed: {c()}
        An array: {[o(), c()]}
        A promise: {Promise.resolve('resolved!')}
      </div>
    )
  }
}

DemoComponent.register()

ko.applyBindings()
