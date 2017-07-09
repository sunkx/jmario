/**
 * Created by sunlin on 2017/7/2.
 */
import Sprite from './Sprite'
import Event from './Event'

export default class AnimateSprite extends Sprite {

	constructor(img, width, height, cellWidth, cellHeight, options = {}) {
		super(img, width, height)
		this.state = null
		this.cellWidth = cellWidth
		this.cellHeight = cellHeight
		this._cellIndex = 0
		this._frameIndex = 0
		this._state = null
		this._lastTime = 0
		this._animation = null
		this._animationFrames = null
		this._animations = options.animations
	}

	set animation(value) {
		if (value != this._animation) {
			this._animation = value
			this._animationFrames = this._animations[value]
			this._cellIndex = this._animationFrames[0]
		}
	}

	get animation() {
		return this._animation
	}

	update() {
		super.update()
		let timestamp = this.now()
		if (timestamp - this._lastTime > 150) {
			this._lastTime = timestamp
			if (this._animationFrames) {
				this._frameIndex++
				if (this._frameIndex >= this._animationFrames.length) {
					this._frameIndex = 0
				}
				this._cellIndex = this._animationFrames[this._frameIndex]
			}
		}
	}

	drawImage(ctx, x, y) {
		ctx.drawImage(this.imageData.image, ...this.cell(this._cellIndex), ...this.rect(x, y))
	}

	cell(index) {
		return [
			index * this.cellWidth,
			0,
			this.cellWidth,
			this.cellHeight
		]
	}

}

