/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Event from '../core/Event'
import waterGif from '../assets/water.gif'

const
    DEFAULT = Symbol('DEFAULT')

export default class Water extends AnimateSprite {

    constructor() {
        super(waterGif, 40, 56, 40, 56, {
            animations: {
                [DEFAULT]: [0, 1, 2],
            }
        })
        this.isbg = true
        this.rigid = false
        this.gravity = 0
        this.animation = DEFAULT
    }

}
