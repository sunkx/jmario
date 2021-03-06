/**
 * Created by sunlin on 2017/7/4.
 */
import Scene from '../core/Scene'
import Sprite from '../core/Sprite'
import Brick from './Brick'
import BreakableBrick from './BreakableBrick'
import Mario from './Mario'
import Tortoise from './Tortoise'
import RedTortoise from './RedTortoise'
import Bugbear from './Bugbear'
import Fungus from './Fungus'
import Ground from './Ground'
import GroundRight from './GroundRight'
import GroundLeft from './GroundLeft'
import Tree from './Tree'
import Pillar from './Pillar'
import Grass from './Grass'
import Water from './Water'
import Gold from './Gold'
import Box from './Box'
import TortoiseBox from './TortoiseBox'
import BugbearBox from './BugbearBox'
import GoldBox from './GoldBox'
import FungusBox from './FungusBox'
import Exit from './Exit'
import Fish from './Fish'
import Skybox from './Skybox'
import Event from '../core/Event'
import Sound from './Sound'

const SCENE_DATA = [
	'02,13,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,11,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,15,00,00,00,00',
	'02,10,00,00,00,00,00,15,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,0,00,00,00,00,00',
	'02,00,00,00,19,00,00,00,00,00,00,00',
	'02,13,00,00,00,00,00,15,00,00,00,00',
	'02,00,00,00,00,00,00,15,00,00,00,00',
	'02,00,00,00,00,00,00,15,00,00,00,00',
	'02,00,00,00,21,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,15,00,00,00,00',
	'02,13,00,00,00,00,00,00,11,00,00,00',
	'02,13,00,00,00,19,00,00,00,00,00,00',
	'02,00,00,00,00,19,00,00,00,00,00,00',
	'02,00,00,00,00,19,00,00,00,00,00,00',
	'02,00,06,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,08,00,18,00,11,00,00,00,00,15,00',
	'02,00,00,00,00,00,00,00,00,00,15,00',
	'02,00,00,12,00,00,00,00,00,00,15,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'03,00,00,00,00,00,00,00,00,00,00,00',
	'14,00,00,00,00,00,00,00,00,00,00,00',
	'14,00,00,00,00,22,00,00,00,00,00,00',
	'14,00,00,00,00,00,00,00,00,00,00,00',
	'01,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,11,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,12,00,15,00,00,00,00,00,00',
	'02,00,00,00,00,15,00,00,00,00,00,00',
	'02,00,00,00,00,15,00,00,00,00,00,00',
	'02,00,06,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,15,00,00,00,00,00',
	'02,00,00,00,00,00,15,00,00,00,00,00',
	'02,00,00,00,00,00,15,00,00,00,00,00',
	'02,00,00,00,12,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,21,00,00,00,00',
	'02,00,12,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'03,00,00,00,00,00,00,00,00,15,00,00',
	'14,00,00,00,00,00,00,00,00,15,00,00',
	'14,00,04,04,00,00,00,00,00,15,00,00',
	'14,00,04,00,00,00,00,00,00,15,00,00',
	'14,00,04,00,00,04,04,00,00,15,00,00',
	'14,00,04,00,07,04,00,00,00,15,00,00',
	'14,00,04,00,00,04,00,07,00,15,00,00',
	'14,00,04,00,00,04,00,00,00,15,00,00',
	'14,00,04,00,00,04,04,00,00,15,00,00',
	'14,00,04,00,00,00,00,00,00,15,00,00',
	'14,00,04,04,00,00,00,00,00,00,00,00',
	'14,00,00,00,00,00,00,00,00,00,00,00',
	'01,00,00,00,00,00,00,00,00,00,00,00',
	'02,04,00,00,00,00,00,00,00,00,00,00',
	'02,13,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,04,04,00,00,00,00,00,00',
	'02,00,00,00,04,00,00,00,00,00,00,00',
	'02,00,00,00,04,00,00,04,04,00,00,00',
	'02,00,00,00,04,00,00,04,00,00,00,00',
	'02,00,00,00,04,00,07,04,00,00,00,00',
	'02,00,00,00,04,00,00,04,00,00,00,00',
	'02,00,00,00,04,04,00,04,00,07,15,00',
	'02,00,00,00,00,00,00,04,00,00,15,00',
	'02,00,06,00,00,00,00,04,00,00,15,00',
	'02,00,00,00,00,00,00,04,04,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,19,00,00,00,00,11,00,00,00',
	'02,00,06,00,00,00,00,00,00,00,00,00',
	'02,00,00,19,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,19,00,00,00,00,00,00',
	'02,00,00,00,00,19,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,12,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,13,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,11,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,00,20,00,00,00,00,00,00,00,00,00',
	'02,00,00,00,00,00,00,00,00,00,00,00',
	'02,04,00,00,00,00,00,00,00,00,00,00',
	'03,00,00,00,00,00,00,00,00,00,00,00',
	'14,00,00,00,00,00,00,00,00,00,00,00',

]

const
	OBJ_WIDTH = 40,
	OBJ_HEIGHT = 28,
	GAMAE_OBJS = {
		'01': GroundLeft,
		'02': Ground,
		'03': GroundRight,
		'04': Brick,
		'05': BreakableBrick,
		'06': Tortoise,
		'07': RedTortoise,
		'08': Bugbear,
		'09': Fungus,
		'10': Mario,
		'11': Tree,
		'12': Pillar,
		'13': Grass,
		'14': Water,
		'15': Gold,
		'16': Box,
		'17': TortoiseBox,
		'18': BugbearBox,
		'19': GoldBox,
		'20': Exit,
		'21': FungusBox,
		'22': Fish
	}

export default class DefaultScene extends Scene {

	constructor(options = {}) {
		super()
		this.name = 'DefaultScene'
		this.isLoaded = true
		this.description = 'A default scene'
		this.bgcolor = '#8ec3ba'
		this.main = null
		this.width = options.width
		this.height = options.height
		this._initScene()
	}

	_initScene() {
		let skybox = new Skybox()
		this.addChild(skybox)
		this.width = SCENE_DATA.length * OBJ_WIDTH
		SCENE_DATA.forEach((data, i) => {
			let ids = data.split(',')
			ids.forEach((id, n) => {
				if (GAMAE_OBJS[id]) {
					let obj = new GAMAE_OBJS[id]()
					obj.x = OBJ_WIDTH * i
					obj.y = OBJ_HEIGHT * (ids.length - n - 1)
					if (obj.isbg) {
						this.addChildAt(obj, 1)
					} else {
						this.addChild(obj)
					}
				}
			})
		})
	}

	update() {
		if (this.main) {
			this.main.x = this.main.x < 0 ? 0 : this.main.x
			this.main.x = this.main.x > this.width - this.main.width ? this.width - this.main.width : this.main.x
			let range = this.game.width * 0.3
			if (this.main.x + this.x < range) {
				let nx = range - this.main.x
				this.x = nx > 0 ? 0 : nx
			}
			if (this.main.x + this.x > this.game.width - range) {
				let nx = this.game.width - range - this.main.x
				this.x = nx < this.game.width - this.width ? this.game.width - this.width : nx
			}
		}
	}

}


