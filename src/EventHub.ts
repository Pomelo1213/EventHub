
interface Emiter { }


export class EventHub {
  private cached: { [name: string]: Array<() => void> } = {}
  public on(eventName: string, handler: () => void) {
    if (!this.cached[eventName]) {
      this.cached[eventName] = []
    }
    this.cached[eventName].push(handler)
  }
  public emit(eventName: string) {
    const handlers = this.cached[eventName]
    handlers.forEach(handler => {
      handler()
    })
  }
  public off(eventName: string) {
    this.cached[eventName] = null
  }
}




