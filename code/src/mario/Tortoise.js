/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Event from '../core/Event'
import Attackable from './Attackable'
import Sound from './Sound'
import tortoiseGif from '../assets/tortoise.gif'

const
  WALK_RIGHT = Symbol('WALK_RIGHT'),
  WALK_LEFT = Symbol('WALK_LEFT'),
  HIDE = Symbol('HIDE'),
  HIDE_MOVE = Symbol('HIDE'),
  WALK_STEP = 1,
  HIDE_MOVE_STEP = 4

export const STATE = {
  WALK: Symbol('walk'),
  HIDE: Symbol('hide'),
  FALLING: Symbol('falling')
}

export default class Tortoise extends Attackable {

  constructor(img = tortoiseGif) {
    super(img, 40, 46, 40, 46, {
      animations: {
        [WALK_RIGHT]: [0, 1],
        [WALK_LEFT]: [2, 3],
        [HIDE]: [4]  //height:28
      }
    })
    this.gravity = 5
    this._state = STATE.WALK
    this.animation = WALK_RIGHT
    this.direction = DIRECTION.RIGHT
    this.addEventListener(Event.ON_COLLISION, (event) => {
      if (event.data.direction === DIRECTION.LEFT) {
        this.direction = DIRECTION.RIGHT

      } else if (event.data.direction === DIRECTION.RIGHT) {
        this.direction = DIRECTION.LEFT

      } else if (event.data.direction === DIRECTION.TOP) {
        Sound.bang()
        switch (this._state) {
          case STATE.WALK:
            this._hide()
            break
          case STATE.HIDE:
            this.state = STATE.HIDE_MOVE
            break
          case STATE.HIDE_MOVE:
            this.state = STATE.HIDE
            break
        }
      }
      this.state = this._state
    })
  }

  update() {
    super.update()
    if (this._state !== STATE.HIDE && this._state !== STATE.FALLING) {
      this.move((this._state === STATE.HIDE_MOVE ? HIDE_MOVE_STEP : WALK_STEP) * (this.direction === DIRECTION.RIGHT ? 1 : -1), 0)
    }
  }

  set state(value) {
    this._state = value
    switch (value) {
      case STATE.WALK:
      case STATE.FALLING:
        this.animation = this.direction === DIRECTION.LEFT ? WALK_LEFT : WALK_RIGHT
        break;
      case STATE.HIDE:
        this.animation = HIDE

        break;
    }
  }

  _hide() {
    this.state = STATE.HIDE
    this.height = 28
    this.cellHeight = 28
  }

  _walk() {
    this.state = STATE.WALK
    this.height = 48
    this.cellHeight = 48
  }

}
