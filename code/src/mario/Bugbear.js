/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Event from '../core/Event'
import Attackable from './Attackable'
import Sound from './Sound'
import bugbearGif from '../assets/bugbear.gif'

const
    WALK = Symbol('WALK'),
    DIED = Symbol('DIED'),
    WALK_STEP = 1

export const STATE = {
    WALK: Symbol('walk'),
    DIED: Symbol('hide'),
    FALLING: Symbol('falling')
}

export default class Bugbear extends Attackable {

    constructor() {
        super(bugbearGif, 40, 28, 40, 28, {
            animations: {
                [WALK]: [0, 1, 2, 3],
                [DIED]: [5]     //height:12
            }
        })
        this.gravity = 5
        this._state = STATE.WALK
        this.animation = WALK
        this.direction = DIRECTION.RIGHT
        this.addEventListener(Event.ON_COLLISION, (event) => {
            if (event.data.direction === DIRECTION.LEFT) {
                this.direction = DIRECTION.RIGHT
            } else if (event.data.direction === DIRECTION.RIGHT) {
                this.direction = DIRECTION.LEFT
            } else if (event.data.direction === DIRECTION.TOP) {
                this._die()
            }
            this.state = this._state
        })
    }

    update() {
        super.update()
        if (this._state !== STATE.FALLING && this._state !== STATE.DIED) {
            this.move(WALK_STEP * (this.direction === DIRECTION.RIGHT ? 1 : -1), 0)
        }
    }

    set state(value) {
        this._state = value
        switch (value) {
            case STATE.WALK:
            case STATE.FALLING:
                this.animation = WALK
                break;
            case STATE.DIED:
                this.animation = DIED
                break;
        }
    }

    _die() {
        if (this._state !== STATE.DIED) {
            Sound.bang()
            this.state = STATE.DIED
            this.height = 12
            this.cellHeight = 12
            setTimeout(() => {
                this.parent.removeChild(this)
            }, 100)
        }
    }

}
