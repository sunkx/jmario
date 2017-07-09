/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Event from '../core/Event'
import Fungus from './Fungus'
import Sound from './Sound'
import boxGif from '../assets/box.gif'

const
    DEFAULT = Symbol('DEFAULT'),
    EMPTY = Symbol('EMPTY')

export default class Box extends AnimateSprite {

    constructor(child = false) {
        super(boxGif, 40, 28, 40, 28, {
            animations: {
                [DEFAULT]: [0],
                [EMPTY]: [1],
            }
        })
        this.gravity = 0
        this.animation = DEFAULT

        this.addEventListener(Event.ON_COLLISION, (event) => {
            if (event.data.direction === DIRECTION.BOTTOM && this.animation != EMPTY) {
                this.animation = EMPTY
                if (child !== false) {
                    let obj = new child()
                    obj.x = this.x + (this.width - obj.width) / 2
                    obj.y = this.y - 84
                    this.parent.addChild(obj)
                }
                Sound.pang()
            }
        })
    }
}

Box.DEFAULT = DEFAULT
Box.EMPTY = EMPTY








