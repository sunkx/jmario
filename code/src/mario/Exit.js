/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import Scene from '../core/Scene'
import Event from '../core/Event'
import exitGif from '../assets/exit.gif'

const
  DEFAULT = Symbol('DEFAULT')

export default class Exit extends AnimateSprite {

  constructor() {
    super(exitGif, 40, 26, 40, 26, {
      animations: {
        [DEFAULT]: [0]
      }
    })
    this.isbg = true
    this.gravity = 0
    this.animation = DEFAULT
  }

}

