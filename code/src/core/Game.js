/**
 * Created by sunlin on 2017/7/2.
 */
import EventDispatcher from './EventDispatcher'

const GAME_DEFAULT_OPTIONS = {
    width: 800,
    height: 400
}

export default class Game extends EventDispatcher {

    constructor(el = document.body, options = {}) {
        super()
        this._rootEle = el
        this._canvas = null
        this._context = null
        this._scene = null
        this._options = Object.assign({}, GAME_DEFAULT_OPTIONS, options)
        this._initCanvas()
    }

    get width() {
        return this._options.width
    }

    get height() {
        return this._options.height
    }

    _initCanvas() {
        this._canvas = document.createElement('canvas')
        this._canvas.width = this._options.width
        this._canvas.height = this._options.height
        this._rootEle.appendChild(this._canvas)
        this._context = this._canvas.getContext('2d')
        this._context.rect(0, 0, this._options.width, this._options.height)
        this._context.fillStyle = '#333'
        this._context.fill()
    }

    set scene(scene) {
        scene.game = this
        this._scene = scene
    }

    get canvas() {
        return this._canvas
    }

    set canvas(value) {
    }

    get context() {
        return this._context
    }

    set context(value) {
    }

    start() {
        window.requestAnimationFrame(this._render.bind(this))
    }

    pause() {

    }

    _render() {
        this._scene.draw(this._context)
        window.requestAnimationFrame(this._render.bind(this))
    }



}



