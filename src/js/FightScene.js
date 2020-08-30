/* eslint-disable no-mixed-operators */
/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import Player1 from './players/Player1'
import Player2 from './players/Player2'
import CollisionEngine from './utils/CollisionEngine'
import EventDispatcher from './utils/EventDispatcher'
import { gsap } from 'gsap'
import io from 'socket.io-client'

const THREE = window.THREE = require('three')
require('three/examples/js/loaders/FBXLoader')
const Zlib = require('three/examples/js/libs/inflate.min')
window.Zlib = Zlib.Zlib
//! https://github.com/mrdoob/three.js/blob/master/examples/webgl_animation_skinning_blending.html
const URL = window.location.href

export default class FightScene extends EventDispatcher {
  constructor () {
    super()
    this.objScene = []
    this.modelPath = { // assets are in public folder, but are copied from webpack thats why there isn't the word 'public' in the path
      // player: '/animations/dummy6.fbx',
      // player: '/animations/modelHitboxes.fbx'
      player: URL + '/animations/multiple_hiboxes_convexHull2.fbx'
    }
    this.actions = {}
    this.mixer = null
    this.player1 = null
    this.box = null
    this.manager = new THREE.LoadingManager() /// for loading progress
    this.collisionEngine = new CollisionEngine({
      THREEVector3: THREE.Vector3,
      THREEVector4: THREE.Vector4,
      THREEMatrix4: THREE.Matrix4,
      THREEBox3: THREE.Box3
    })
    this._setupSockets() // necessary to listen for sockets events in constructor
  }

  createScene (stage) { // TODO make an init function which is invoked in this class
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    this.camera.position.z = 550
    this.camera.position.y = 150
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor('#e5e5e5')
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    stage.appendChild(this.renderer.domElement)
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
    })
    const light = new THREE.PointLight(0xFFFFFF, 1, 1500)
    light.position.set(0, 100, 150)
    this.scene.add(light)

    this.init()
  }
  async init () {
    this.loadAssets()
    await this.handleLoadingProgress()
    this.collisionEngine.addElements([
      this.player1,
      this.player2
    ])
    this.startAnimation()
  }
  handleLoadingProgress () {
    return new Promise((resolve, reject) => {
      this.manager.onStart = function (url, itemsLoaded, itemsTotal) {
        // console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
      }
      this.manager.onLoad = function () {
        // console.log('Loading complete!')
        resolve('Loading complete!')
      }
      this.manager.onProgress = function (url, itemsLoaded, itemsTotal) {
        // console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
      }
      this.manager.onError = function (url) {
        // console.log('There was an error loading ' + url)
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(url)
      }
      window.loaderManager = this.manager // for debugging purposes should be deleted
    })
  }
  loadAssets () {
    const loader = new THREE.FBXLoader(this.manager)

    loader.load(this.modelPath.player, Object3D => { // TODO to load second player or find a way to clone the Object3D or copy and  load the file
      Object3D.name = 'player1'
      const mixer = new THREE.AnimationMixer(Object3D)
      this.player1 = new Player1(Object3D, mixer, THREE.LoopOnce)
      this.player1.Object3d.children.find(m => m.name === 'Beta_Surface').material.shininess = 10 // changing shininess of p1
      this.scene.add(Object3D)

      this.objScene.push({ Object3D, mixer, clock: new THREE.Clock() })
      this._getServerResponse(this.player1)
    }, undefined, error => {
      throw (error)
      // console.error(error)
    })
    loader.load(this.modelPath.player, Object3D => {
      Object3D.name = 'player2'
      // console.error(Object3D)
      const mixer = new THREE.AnimationMixer(Object3D)
      this.player2 = new Player2(Object3D, mixer, THREE.LoopOnce)
      this.player2.Object3d.children.forEach(mesh => {
        if (mesh.name === 'Beta_Surface' && mesh.type === 'SkinnedMesh') {
          mesh.material.color = {
            r: 0.2,
            g: 0.2,
            b: 0.7
          }
          mesh.material.shininess = 10
        }
      })

      this.scene.add(Object3D)
      this.objScene.push({ Object3D, mixer, clock: new THREE.Clock() })
    }, undefined, error => {
      throw (error)
    })
  }

  startAnimation () {
    this.collisionEngine.elements.forEach(player => {
      player.boxes3.forEach(box3 => this.scene.add(new THREE.Box3Helper(box3, 0x00ff00)))
    })

    const render = (time) => {
      this.objScene.forEach(({ mixer, clock }) => mixer.update(clock.getDelta()))
      const { player1: collidedPlayer1, player2: collidedPlayer2, collidedHitBoxes } = this.collisionEngine.getCollidedPlayers() // there are always be 2 collided elements

      this.player1.update(time, collidedPlayer2)
      this.player2.update(time, collidedPlayer1)

      if (collidedHitBoxes) this._handleHealth({ player1: collidedPlayer1, player2: collidedPlayer2, collidedHitBoxes })

      this.player1.handleRotationSwitch(this.player2.position.x)
      this.player2.handleRotationSwitch(this.player1.position.x)
      this.renderer.render(this.scene, this.camera)
    }
    // gsap.ticker.fps(5)
    window.ticker = gsap.ticker // for testing purposes should be removed later
    gsap.ticker.add(render)
  }
  onUserInput (data) {
    this.socket.emit('userInput', data)
    this._attachListeners(data)
  }
  _attachListeners ({ room }) {
    window.addEventListener('keyup', (data) => {
      if (data.code === 'KeyD') this.socket.emit('KeyDUp', { room })
      if (data.code === 'KeyA') this.socket.emit('KeyAUp', { room })
      if (data.code === 'KeyW') this.socket.emit('KeyWUp', { room })
      if (data.code === 'KeyS') this.socket.emit('KeySUp', { room })
      if (data.code === 'KeyG') this.socket.emit('KeyGUp', { room })
    })
    window.addEventListener('keydown', (data) => {
      if (data.code === 'KeyD') this.socket.emit('KeyDDown', { room })
      if (data.code === 'KeyA') this.socket.emit('KeyADown', { room })
      if (data.code === 'KeyW') this.socket.emit('KeyWDown', { room })
      if (data.code === 'KeyS') this.socket.emit('KeySDown', { room })
      if (data.code === 'KeyG') this.socket.emit('KeyGDown', { room })
    })
  }

  _setupSockets () {
    this.socket = io(URL)
    this.socket.on('roomCreated', ({ room, name }) => {
      console.warn(`socket with id: ${this.socket.id} connected in room: ${room} with name: ${name}`)
    })

    // const name = prompt('Enter your battle name!')
    // const room = prompt('Enter room name')
    // this.socket.emit('userInput', { name, room })
    console.error('userInput')
  }

  _getServerResponse (player) {
    this.socket.on('keyup', (e) => {
      console.error('client is recieving: keyupServe', e)
      player.logKeyUp(e)
    })
    this.socket.on('keydown', (e) => {
      console.error('client is recieving: keydownServe', e)

      player.logKeyDown(e)
    })
  }

  _handleHealth ({ player1, player2, collidedHitBoxes } = {}) {
    if (!collidedHitBoxes) return
    const isPlayer1Attacks = player1.activeActionName === 'mmaKick'
    const isPlayer2Attacks = player2.activeActionName === 'mmaKick'

    const player1Attacks = () => {
      const isSameAttack = player1.lastHit && player1.lastHit.actionName === player1.activeActionName
      if (!isSameAttack) {
        player2.removeHealth(20)
        this.dispatch('hit', { name: player2.name, health: player2.health })

        player1.lastHit = { actionName: player1.activeActionName }
      }
    }

    const player2Attacks = () => {
      const isSameAttack = player2.lastHit && player2.lastHit.actionName === player2.activeActionName
      if (!isSameAttack) {
        player1.removeHealth(20)
        this.dispatch('hit', { name: player1.name, health: player1.health })
        player2.lastHit = { actionName: player2.activeActionName }
      }
    }

    if (isPlayer1Attacks && isPlayer2Attacks) {
      if (player1.playingAnim.startTime < player2.playingAnim.startTime) player1Attacks()
      else player2Attacks()
    } else if (isPlayer1Attacks) player1Attacks()
    else if (isPlayer2Attacks) player2Attacks()
  }
}
