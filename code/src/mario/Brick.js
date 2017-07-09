/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import Scene from '../core/Scene'
import Event from '../core/Event'
import brickGif from '../assets/brick.gif'

const
  BRICK_1 = Symbol('BRICK_1'),
  BRICK_2 = Symbol('BRICK_2'),
  BRICK_BLANK = Symbol('BRICK_BLANK')

export default class Brick extends AnimateSprite {

  constructor() {
    super(brickGif, 40, 28, 40, 28, {
      animations: {
        [BRICK_1]: [0],
        [BRICK_2]: [1],
        [BRICK_BLANK]: [2]
      }
    })
    this.gravity = 0
    this.animation = BRICK_1
  }

}

Brick.BRICK_1 = BRICK_1
Brick.BRICK_2 = BRICK_2
Brick.BRICK_BLANK = BRICK_BLANK

