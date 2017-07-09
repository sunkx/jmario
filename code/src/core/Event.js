
export default class Event {

    constructor(type, data = {}) {
        this.type = type
        this.data = data
    }

    static addEventListener(target, type, listener) {
        if (target.addEventListener) {
            target.addEventListener(type, listener)
        }
    }

    static removeEventListener(target, type, listener) {
        if (target.removeEventListener) {
            target.removeEventListener(type, listener)
        }
    }

}

Event.KEY_UP_EVENT = 'keyup'
Event.KEY_DOWN_EVENT = 'keydown'
Event.ON_FRAME = 'onframe'
Event.ON_COLLISION = 'onCollision'

