/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Event from '../core/Event'
import Sound from './Sound'
import goldGif from '../assets/gold.gif'

const
    DEFAULT = Symbol('DEFAULT')

export default class Gold extends AnimateSprite {

    constructor() {
        super(goldGif, 28, 26, 28, 26, {
            animations: {
                [DEFAULT]: [0, 1],
            }
        })
        this.gravity = 0
        this.animation = DEFAULT

        this.addEventListener(Event.ON_COLLISION, (event) => {
            this.parent.removeChild(this)
            Sound.ring()
        })
    }


}
