
class DemoComponent extends tko.component {
  get template () {
    const o = tko.observable()
    setInterval(() => o(new Date().format()), 500)
    const c = tko.computed(() => (
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
