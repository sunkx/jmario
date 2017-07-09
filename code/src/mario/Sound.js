/**
 * Created by sunlin on 2017/7/4.
 */
import SoundHelper from '../core/SoundHelper'
import jumpWav from '../assets/jump.wav'
import dieWav from '../assets/die.wav'
import pangWav from '../assets/pang.wav'
import ringWav from '../assets/ring.wav'
import bangWav from '../assets/bang.wav'

const
    JUMP = Symbol('JUMP'),
    DIE = Symbol('DIE'),
    PANG = Symbol('PANG'),
    BANG = Symbol('BANG'),
    RING = Symbol('RING')

SoundHelper.load(JUMP, jumpWav)
SoundHelper.load(DIE, dieWav)
SoundHelper.load(PANG, pangWav)
SoundHelper.load(RING, ringWav)
SoundHelper.load(BANG, bangWav)

export default class Sound {

    constructor() {

    }

    static jump() {
        SoundHelper.play(JUMP)
    }

    static die() {
        SoundHelper.play(DIE)
    }

    static pang() {
        SoundHelper.play(PANG)
    }

    static ring() {
        SoundHelper.play(RING)
    }

    static bang() {
        SoundHelper.play(BANG)
    }

}
