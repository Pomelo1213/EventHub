import { EventHub } from '../src/EventHub'

const eventHub = new EventHub()

eventHub.on('haha', () => {
  console.log('hahah')
})

console.log('----')
eventHub.emit('haha')