/**
 * Created by sunlin on 2017/7/3.
 */
import Event from '../core/Event'

class InputManager {

    constructor() {
        this._keyMap = {}
        Event.addEventListener(window, Event.KEY_DOWN_EVENT, (ev) => {
            this._keyMap[ev.keyCode] = true
        })
        Event.addEventListener(window, Event.KEY_UP_EVENT, (ev) => {
            this._keyMap[ev.keyCode] = false
        })
    }

    getKeyDown(keyCode) {
        return this._keyMap[keyCode] === true
    }

}

export default new InputManager()

