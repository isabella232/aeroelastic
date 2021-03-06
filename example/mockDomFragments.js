const {h, render} = require('ultradom')

const {
        devColor
      } = require('./mockConfig')

const dom = require('../src/dom')

const renderIntoRoot = frag => render(frag, document.body)

/**
 * Pure functions: fragment makers (PoC: React DOM fragments)
 */

// renders a shape excluding its control points
const makeShapeFrags = (shapes, hoveredShape, selectedShapes) => shapes.map(shape => {
  const dragged = selectedShapes.find(id => id === shape.id)
  //if(shape.id.slice(0, 7) === 'newRect') debugger
  return h('div', {
    id: shape.id,
    class: 'rectangle',
    //onclick: ({clientX, clientY}) => console.log('clicked on', shape.id, 'at', clientX, clientY),
    style: {
      transform: dom.matrixToCSS(shape.transformMatrix),
      width: dom.px(2 * shape.a),
      height: dom.px(2 * shape.b),
      marginLeft: dom.px(-shape.a),
      marginTop: dom.px(-shape.b),
      background: shape.backgroundImage,
      backgroundColor: shape.backgroundColor,
      outline: shape.type === 'annotation' ? 'none' : (false && dragged ? `1px solid ${devColor}` : null),
      opacity: dragged || (shape.id === hoveredShape && hoveredShape.id) ? 0.95 : 0.95
    }
  })
})

const makeUid = () => 1e11 + Math.floor((1e12 - 1e11) * Math.random())

// the substrate is responsible for the PoC event capture, and doubles as the parent DIV of everything else
// the stupid queue is added only to let reliable event repetition (via a timer); without this, if the keys
// are released in the order they were pressed, the repetition stops
const makeSubstrateFrag = commit => {
  let timer
  let downQueue = []
  return shapeFrags => {
    return h('div', {
        id: 'root',
        tabindex: '0', // needed for the div to register keyboard events
        onmousemove: event => commit('cursorPosition', {x: event.clientX, y: event.clientY, uid: makeUid()}),
        onmouseup: event => commit('mouseEvent', {event: 'mouseUp', x: event.clientX, y: event.clientY, uid: makeUid()}),
        onmousedown: event => commit('mouseEvent', {event: 'mouseDown', x: event.clientX, y: event.clientY, uid: makeUid()}),
        onkeydown: ({code}) => {
          //window.clearInterval(timer)
          //timer = window.setInterval(() => {commit('keyboardEvent', {event: 'keyDown', code: downQueue[downQueue.length - 1], uid: makeUid()})}, 1000 / 60 * 2)
          if(downQueue[downQueue.length - 1] !== code) downQueue.push(code)
          return commit('keyboardEvent', {event: 'keyDown', code, uid: makeUid()})
        },
        onkeyup: ({code}) => {
          //window.clearInterval(timer)
          //timer = window.setInterval(() => {commit('keyboardEvent', {event: 'keyDown', code: downQueue[downQueue.length - 1], uid: makeUid()})}, 1000 / 60 * 2)
          downQueue.splice(downQueue.indexOf(code), 1)
          return commit('keyboardEvent', {event: 'keyUp', code, uid: makeUid()})
        },
        oncreate: element => element.focus() // this is needed to capture keyboard events without clicking on it first
      },
      shapeFrags,
      'Operations:',
      h('li', {id: 'text1'}, 'mouse click: select rectangle to manipulate'),
      h('li', {id: 'text2'}, 'W, A, S, D: translate along X / Y'),
      h('li', {id: 'text3'}, 'F, C: translate along Z'),
      h('li', {id: 'text4'}, 'X, Y, Z: rotate around X, Y or Z respectively'),
      h('li', {id: 'text5'}, 'I, J, K, L: scale (increase/decrease) along X / Y'),
      h('li', {id: 'text6'}, 'P: toggle perspective viewing'),
      h('li', {id: 'text7'}, 'E, R, T, G: shear along x / Y')
    )
  }
}

module.exports = {
  renderIntoRoot,
  makeShapeFrags,
  makeSubstrateFrag
}