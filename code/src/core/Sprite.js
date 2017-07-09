/**
 * Created by sunlin on 2017/7/2.
 */
import DisplayObject from './DisplayObject'
import Event from './Event'
import ImageData from './ImageData'
import input from './Input'

export const DIRECTION = {
	LEFT: Symbol('left'),
	RIGHT: Symbol('right'),
	TOP: Symbol('top'),
	BOTTOM: Symbol('bottom')
}

export default class Sprite extends DisplayObject {

	constructor(img, width = 0, height = 0, options = {}) {
		super()
		if (!img) return
		this.isbg = false
		this.gravity = 0
		this.falling = false
		this.rigid = true
		this.width = width
		this.height = height
		this.imageData = new ImageData(img)
	}

	draw(ctx, x = 0, y = 0) {
		if (this.bgcolor) {
			ctx.fillStyle = this.bgcolor
			ctx.fillRect(x + this.x, y + this.y, this.width, this.height)
		}
		if (this.imageData) {
			this.drawImage(ctx, x, y)
		}
		super.draw(ctx, x, y)
	}

	drawImage(ctx, x, y) {
		ctx.drawImage(this.imageData.image, x + this.x, y + this.y, this.width, this.height)
	}

	move(x, y) {
		if (x !== 0) {
			for (let i = 0; x > 0 && i < x; i++) {
				this.x++
				this.checkCollision(x > 0 ? DIRECTION.RIGHT : DIRECTION.LEFT)
			}
			for (let i = 0; x < 0 && i < Math.abs(x); i++) {
				this.x--
				this.checkCollision(x > 0 ? DIRECTION.RIGHT : DIRECTION.LEFT)
			}
		}
		if (y !== 0) {
			for (let i = 0; y > 0 && i < y; i++) {
				this.y++
				this.checkCollision(DIRECTION.BOTTOM)
			}
			for (let i = 0; y < 0 && i < Math.abs(y); i++) {
				this.y--
				this.checkCollision(DIRECTION.TOP)
			}
		}
	}

	update() {
		if (this.rigid) {
			this.move(0, this.gravity)
		} else {
			this.y += this.gravity
		}
	}

	checkCollision(checkDirection = false) {
		if (!this.parent) return false
		let items = this.parent.children
		for (let i = 0; i < items.length; i++) {
			if (!items[i].rigid) {
				continue
			}
			let direction = this._collisionDirection(this, items[i], checkDirection)
			if (direction) {
				if (direction === DIRECTION.BOTTOM) {
					this._y = items[i].y - this.height
				} else if (direction === DIRECTION.TOP) {
					this._y = items[i].y + items[i].height
				} else if (direction === DIRECTION.LEFT) {
					this._x = items[i].x + items[i].width
				} else if (direction === DIRECTION.RIGHT) {
					this._x = items[i].x - this.width
				}

				this.dispatchEvent(new Event(Event.ON_COLLISION, {
					source: this,
					target: items[i],
					direction: direction
				}))

				items[i].dispatchEvent(new Event(Event.ON_COLLISION, {
					source: items[i],
					target: this,
					direction: this._reverseDirection(direction)
				}))
			}
		}
		return false
	}

	_collisionDirection(a, b, direction = false) {
		switch (direction) {
			case DIRECTION.LEFT:
			case DIRECTION.RIGHT:
				return (
					((a.y + a.height > b.y && a.y + a.height < b.y + b.height) || (b.y + b.height > a.y && b.y + b.height < a.y + a.height) ||
						(a.y > b.y && a.y < b.y + b.height) || (b.y > a.y && b.y < a.y + a.height) ||
						(a.y === b.y && a.height === b.height)) &&
					(direction === DIRECTION.LEFT ?
						(a.x < b.x + b.width && a.x > (b.x + b.width * 0.75)) :
						(a.x + a.width > b.x && a.x + a.width < (b.x + b.width * 0.25))
					)) ? direction : false

			case DIRECTION.BOTTOM:
			case DIRECTION.TOP:
				return (
					((a.x + a.width > b.x && a.x + a.width < b.x + b.width) || (b.x + b.width > a.x && b.x + b.width < a.x + a.width) ||
						(a.x > b.x && a.x < b.x + b.width) || (b.x > a.x && b.x < a.x + a.width) ||
						(a.x === b.x && a.width === b.width)) &&
					(direction === DIRECTION.TOP ?
						(a.y < b.y + b.height && a.y > (b.y + b.height * 0.75)) :
						(a.y + a.height > b.y && a.y + a.height < (b.y + b.height * 0.25))
					)) ? direction : false

		}
		return false
	}

	_reverseDirection(direction) {
		switch (direction) {
			case DIRECTION.LEFT:
				return DIRECTION.RIGHT
			case DIRECTION.RIGHT:
				return DIRECTION.LEFT
			case DIRECTION.TOP:
				return DIRECTION.BOTTOM
			case DIRECTION.BOTTOM:
				return DIRECTION.TOP
		}
	}


}



