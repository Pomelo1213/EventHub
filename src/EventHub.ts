
interface Emiter { }

class EventListener {
  public emitter: EventHub
  public handler: () => void
  constructor(handler: () => void, emitter: EventHub) {
    this.handler = handler
    this.emitter = emitter
  }
}

export class EventHub {
  private cached: { [name: string]: EventListener[] } = {}

  public on(eventName: string, handler: () => void) {
    if (!handler) {
      throw new Error('invaild handler')
    }
    if (!this.cached[eventName]) {
      this.cached[eventName] = []
    }
    const listener = new EventListener(handler, this)
    this.cached[eventName].push(listener)
  }

  public emit(eventName: string) {
    const listeners = this.cached[eventName]
    listeners.forEach((listener) => {
      listener.handler.call(this)
    })
  }

  public off(eventName: string) {
    this.cached[eventName] = null
  }
}




