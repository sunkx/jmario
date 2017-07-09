/**
 * Created by sunlin on 2017/7/2.
 */
import EventDispatcher from './EventDispatcher'

export default class DisplayObject extends EventDispatcher {

    constructor() {
        super()
        this._game = null
        this.parent = null
        this.children = []
        this._x = 0
        this._y = 0
        this._width = 0
        this._height = 0
        this.visible = true
        this.alpha = 1
        this.zIndex = 12
        this.bgcolor = null
    }

    set x(value) {
        this._x = value
    }

    get x() {
        return this._x
    }

    set y(value) {
        this._y = value
    }

    get y() {
        return this._y
    }

    set width(value) {
        this._width = value
    }

    get width() {
        return this._width
    }

    set height(value) {
        this._height = value
    }

    get height() {
        return this._height
    }
    get game() {
        let top = this
        while (top.parent) {
            if (top._game != null) {
                return top._game
            }
            top = top.parent
        }
        return top._game
    }

    set game(value) {
        this._game = value
    }

    onAdd(parent) {

    }

    addChild(child) {
        if (child.parent !== null) {
            child.parent.removeChild(child)
        }
        child.parent = this
        this.children.push(child)
        child.onAdd(this)
    }

    addChildAt(child, index) {
        if (child.parent !== null) {
            child.parent.removeChild(child)
        }
        child.parent = this
        this.children.splice(index, 0, child)
    }

    removeChild(child) {
        this.children = this.children.filter((item) => {
            return item !== child
        })
        child.parent = null
    }

    removeChildAt(index) {
        child.parent = null
    }

    update() { }

    //parent x,y
    draw(ctx, x = 0, y = 0) {
        if (this.update) {
            this.update()
        }
        this.children.forEach((item) => {
            if (item.visible) {
                item.draw(ctx, x + this.x, y + this.y)
            }
        })
    }

    rect(x, y) {
        return [x + this.x, y + this.y, this.width, this.height]
    }



}










