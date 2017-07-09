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
import fungusGif from '../assets/fungus.gif'

const
  NORMAL = Symbol('NORMAL'),
  MOVE_STEP = 1

export const STATE = {
  MOVE: Symbol('move'),
  FALLING: Symbol('falling')
}

export default class Fungus extends AnimateSprite {

  constructor() {
    super(fungusGif, 40, 28, 40, 28, {
      animations: {
        [NORMAL]: [0]
      }
    })
    this.gravity = 5
    this.state = STATE.MOVE
    this.animation = NORMAL
    this.direction = DIRECTION.RIGHT
    this.addEventListener(Event.ON_COLLISION, (event) => {
      if (!(event.data.target instanceof Brick) &&
        !(event.data.target instanceof Box) &&
        !(event.data.target instanceof Ground)) {
        Sound.ring()
        this.parent.removeChild(this)
      }
    })
  }

  update() {
    super.update()
    if (this.state !== STATE.FALLING) {
      this.move(MOVE_STEP * (this.direction === DIRECTION.RIGHT ? 1 : -1), 0)
    }
  }

}










