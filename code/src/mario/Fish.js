/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Scene from '../core/Scene'
import Event from '../core/Event'
import Brick from './Brick'
import Box from './Box'
import Ground from './Ground'
import Sound from './Sound'
import Attackable from './Attackable'
import fishGif from '../assets/fish.gif'

const
  NORMAL = Symbol('NORMAL'),
  DIED = Symbol('DIED'),
  MOVE_STEP = 6

export const STATE = {
  JUMPING: Symbol('jumping'),
  FALLING: Symbol('falling'),
  SLEEPING: Symbol('sleeping'),
  DIED: Symbol('died')
}

export default class Fish extends Attackable {

  constructor() {
    super(fishGif, 40, 26, 40, 26, {
      animations: {
        [NORMAL]: [0],
        [DIED]: [1]
      }
    })
    this.gravity = MOVE_STEP
    this.state = STATE.FALLING
    this.animation = NORMAL
    this.direction = DIRECTION.RIGHT
    this.addEventListener(Event.ON_COLLISION, (event) => {
      if (event.data.direction === DIRECTION.TOP) {
        Sound.bang()
        this.animation = DIED
        this.state = STATE.DIED
        this.gravity = MOVE_STEP
        setTimeout(() => {
          if (this.parent) {
            this.parent.removeChild(this)
          }
        }, 3000)
      }
    })
  }

  update() {
    super.update()
    if (this.state === STATE.DIED) return
    if (this.state != STATE.SLEEPING && this.y > this.game.height + this.height) {
      this.gravity = 0
      this.state = STATE.SLEEPING
      setTimeout(() => {
        this.state = STATE.JUMPING
        this.gravity = -MOVE_STEP
      }, 3000)
    }
    if (this.state === STATE.JUMPING) {
      if (this.y < 150) {
        this.state = STATE.FALLING
        this.gravity = MOVE_STEP
      } else if (this.y < 180) {
        this.gravity = -MOVE_STEP / 3
      }
    }
  }

}

