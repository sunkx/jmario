/**
 * Created by sunlin on 2017/7/4.
 */
import Sprite from '../core/Sprite'
import Event from '../core/Event'
import backgroundGif from '../assets/background.gif'


export default class Skybox extends Sprite {

  constructor() {
    super()
    this.img = new Image()
    this.img.src = backgroundGif
    this.bgOffset = 0
  }

  draw(ctx, x, y) {
    super.draw(ctx, x, y)
    let pattern = ctx.createPattern(this.img, 'repeat-x')
    ctx.fillStyle = pattern
    ctx.translate(this.bgOffset, -30)
    ctx.fill()
    ctx.translate(-this.bgOffset, 30)
  }

  moveBg(value) {
    this.bgOffset += value
  }

}
