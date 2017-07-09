/**
 * Created by sunlin on 2017/7/2.
 */
import DisplayObject from './DisplayObject'

export default class Scene extends DisplayObject {

	constructor() {
		super()
		this.name = ''
		this.isLoaded = false
		this.description = ''
	}

	draw(ctx, x = 0, y = 0) {
		//渲染场景背景
		if (this.bgcolor) {
			ctx.fillStyle = this.bgcolor
			ctx.fillRect(0, 0, this.game._options.width, this.game._options.height)
			super.draw(ctx, x, y)
		}
	}


}


