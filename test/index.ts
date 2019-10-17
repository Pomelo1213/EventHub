import { EventHub } from '../src/EventHub'

// const eventHub = new EventHub()


class ForTest extends EventHub<{ click: { name: string, age: number } }> {
  constructor() {
    super()
    //NOTE: ts 会自动检测类型，是否为你声明的类型
    this.on('click', ({ name, age }) => {
      //TODO:
    })
    this.emit('click', { name: 'haha', age: 12 })
  }
}