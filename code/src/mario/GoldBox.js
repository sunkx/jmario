/**
 * Created by sunlin on 2017/7/4.
 */
import AnimateSprite from '../core/AnimateSprite'
import Box from './Box'
import Gold from './Gold'

export default class GoldBox extends Box {
    constructor() {
        super(Gold)
    }
}

