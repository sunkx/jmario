/**
 * Created by sunlin on 2017/7/5.
 */
import EventDispatcher from './EventDispatcher'

let audios = {}

class Sound extends EventDispatcher {

	constructor(src){
        super()
        this.loaded = false
        this.audio = new Audio()
        this.audio.preload = 'auto'
        this.audio.onload = ()=>{
            this.loaded = true
        }
        this.audio.onerror = ()=>{
            this.loaded = false
        }
        this.audio.src = src
	}

    play(){
        this.audio.play()
    }
}

export default class SoundHelper {

    static load(key, src){
        audios[key] = new Sound(src)
    }

    static play(key){
        if(audios[key]){
            audios[key].play()
        }
    }

}



