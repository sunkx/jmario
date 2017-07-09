/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Event from '../core/Event'
import grassGif from '../assets/grass.gif'

const
    DEFAULT = Symbol('DEFAULT')

export default class Grass extends AnimateSprite {

    constructor() {
        super(grassGif, 80, 28, 80, 28, {
            animations: {
                [DEFAULT]: [0, 1],
            }
        })
        this.isbg = true
        this.rigid = false
        this.gravity = 0
        this.animation = DEFAULT
    }


}

