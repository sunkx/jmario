/**
 * Created by sunlin on 2017/7/2.
 */
import GameObject from './GameObject'

export default class EventDispatcher extends GameObject {

	constructor() {
		super()
		this._events = {}
	}

	addEventListener(type, listener) {
		if (!this._events.hasOwnProperty(type)) {
			this._events[type] = []
		}
		this._events[type].push(listener)
	}

	dispatchEvent(event) {
		if (this._events.hasOwnProperty(event.type)) {
			let listeners = this._events[event.type]
			listeners.forEach((listener) => {
				if (listener(event) === false) {
					return false
				}
			})
		}
	}




}


