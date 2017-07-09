/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import Scene from '../core/Scene'
import Event from '../core/Event'
import groundGif from '../assets/ground.gif'

const
  GROUND = Symbol('GROUND'),
  GROUND_LEFT = Symbol('GROUND_LEFT'),
  GROUND_RIGHT = Symbol('GROUND_RIGHT')

export default class Ground extends AnimateSprite {

  constructor(type = Ground.GROUND) {
    super(groundGif, 40, 56, 40, 56, {
      animations: {
        [GROUND]: [1],
        [GROUND_LEFT]: [0],
        [GROUND_RIGHT]: [2]
      }
    })
    this.gravity = 0
    switch (type) {
      case Ground.GROUND:
        this.animation = GROUND
        break
      case Ground.GROUND_LEFT:
        this.animation = GROUND_LEFT
        break
      case Ground.GROUND_RIGHT:
        this.animation = GROUND_RIGHT
        break
    }
  }
}

Ground.GROUND = Symbol('GROUND')
Ground.GROUND_LEFT = Symbol('GROUND_LEFT')
Ground.GROUND_RIGHT = Symbol('GROUND_RIGHT')


