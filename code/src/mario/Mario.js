/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import { DIRECTION } from '../core/Sprite'
import Scene from '../core/Scene'
import Event from '../core/Event'
import KeyCode from '../core/KeyCode'
import input from '../core/Input'
import Attackable from './Attackable'
import Sound from './Sound'
import marioGif from '../assets/mario.gif'

const
  WALK_RIGHT = Symbol('WALK_RIGHT'),
  WALK_LEFT = Symbol('WALK_LEFT'),
  JUMPING = Symbol('JUMPING'),
  JUMPING_LEFT = Symbol('JUMPING_LEFT'),
  JUMPING_RIGHT = Symbol('JUMPING_RIGHT'),
  STAND_LEFT = Symbol('STAND_LEFT'),
  STAND_RIGHT = Symbol('STAND_RIGHT'),
  WALK_STEP = 3,
  JUMP_HEIGHT = 120

const STATE = {
  WALK: Symbol('walk'),
  JUMP: Symbol('jump'),
  STAND: Symbol('stand'),
  FALLING: Symbol('falling'),
  DIE: Symbol('falling')
}

export default class Mario extends AnimateSprite {

  constructor() {
    super(marioGif, 40, 38, 40, 38, {
      animations: {
        [WALK_RIGHT]: [0, 1],
        [WALK_LEFT]: [3, 4],
        [JUMPING_RIGHT]: [2],
        [JUMPING_LEFT]: [5],
        [STAND_RIGHT]: [0],
        [STAND_LEFT]: [3]
      }
    })
    this.gravity = 5
    this._state = STATE.STAND
    this.animation = STAND_RIGHT
    this._direction = DIRECTION.RIGHT
    this._jumpHeight = 0
    this.addEventListener(Event.ON_COLLISION, (event) => {
      if (event.data.direction === DIRECTION.BOTTOM) {
        this.state = input.getKeyDown(KeyCode.A) || input.getKeyDown(KeyCode.D) ? STATE.WALK : STATE.STAND
      } else if (event.data.target instanceof Attackable) {
        Sound.die()
        this.y -= 50
        this.rigid = false
        this.gravity = 5
        this.state = STATE.DIE
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      } else if (event.data.direction === DIRECTION.TOP) {
        this.state = STATE.FALLING
      }
    })
  }

  update() {
    super.update()
    if (this.state === this.DIE0) {
      return
    }
    let
      aKeyDown = input.getKeyDown(KeyCode.A),
      dKeyDown = input.getKeyDown(KeyCode.D),
      wKeyDown = input.getKeyDown(KeyCode.W)

    if (aKeyDown || dKeyDown) {
      this.direction = dKeyDown ? DIRECTION.RIGHT : DIRECTION.LEFT
      this.state = this.state === STATE.JUMP || this.state === STATE.FALLING ? this.state : STATE.WALK
      this.move(WALK_STEP * (this.direction === DIRECTION.RIGHT ? 1 : -1), 0)
    }

    if (!aKeyDown && !dKeyDown && this.state != STATE.JUMP && this.state != STATE.FALLING) {
      this.state = STATE.STAND
    }

    if (wKeyDown) {
      if (this.state != STATE.JUMP && this.state != STATE.FALLING) {
        Sound.jump()
        this.state = STATE.JUMP
        this._jumpHeight = this.y - JUMP_HEIGHT
      }
    } else {
      if (this.state === STATE.JUMP) {
        this.state = STATE.FALLING
      }
    }

    if (this.state === STATE.JUMP) {
      if (this.y < this._jumpHeight) {
        this.state = STATE.FALLING
      } else {
        this.move(0, -10)
      }
    }
  }

  set state(value) {
    this._state = value
    switch (value) {
      case STATE.WALK:
        this.animation = this.direction === DIRECTION.LEFT ? WALK_LEFT : WALK_RIGHT
        break;
      case STATE.FALLING:
      case STATE.STAND:
        this.animation = this.direction === DIRECTION.LEFT ? STAND_LEFT : STAND_RIGHT
        break;
      case STATE.JUMP:
        this.animation = this.direction === DIRECTION.LEFT ? JUMPING_LEFT : JUMPING_RIGHT
        break;
    }
  }

  get state() {
    return this._state
  }

  get direction() {
    return this._direction
  }

  set direction(value) {
    this._direction = value
  }

  onAdd(parent) {
    parent.main = this
  }

}

