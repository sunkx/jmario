/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Event from '../core/Event'
import treeGif from '../assets/tree_3.gif'

const
    DEFAULT = Symbol('DEFAULT')

export default class Tree extends AnimateSprite {

    constructor() {
        super(treeGif, 108, 240, 108, 240, {
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
