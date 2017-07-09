/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Tortoise from './Tortoise'
import tortoiseGif from '../assets/tortoise_red.gif'

export default class RedTortoise extends Tortoise {

	constructor() {
		super(tortoiseGif)
	}

}
