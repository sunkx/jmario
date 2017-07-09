/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import Scene from '../core/Scene'
import Event from '../core/Event'
import pillarGif from '../assets/pillar3.gif'

const
  DEFAULT = Symbol('DEFAULT')

export default class Pillar extends AnimateSprite {

  constructor() {
    super(pillarGif, 80, 140, 80, 140, {
      animations: {
        [DEFAULT]: [0]
      }
    })
    this.isbg = true
    this.gravity = 0
    this.animation = DEFAULT
  }

}
