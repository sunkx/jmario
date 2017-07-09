/**
 * Created by sunlin on 2017/7/3.
 */
import EventDispatcher from './EventDispatcher'

export default class ImageData extends EventDispatcher {

	constructor(src){
        super()
        this.loaded = false
        this.image = new Image()
        this.image.onload = ()=>{
            this.loaded = true
        }
        this.image.onerror = ()=>{
        }
        this.image.src = src
	}


}



