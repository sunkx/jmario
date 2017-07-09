/**
 * Created by sunlin on 2017/7/4.
 */
import Game from '../core/Game'
import Scene from '../core/Scene'
import DefaultScene from './DefaultScene'

export default class MarioGame extends Game {

	constructor() {
		super(document.getElementById('app'), {
			height: 364,
			width: 750
		})
		let scene = new DefaultScene({
			width: this.width,
			height: this.height
		})
		this.scene = scene
	}

}
