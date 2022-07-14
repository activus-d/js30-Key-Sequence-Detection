let pressed = []
let wordCheck = 'wesboss'
window.addEventListener('keyup', checkPressed)
  function checkPressed(e) {
    pressed.push(e.key)
    pressed.splice(-wordCheck.length - 1, pressed.length - wordCheck.length)
    console.log(pressed)
    pressed.join('') === wordCheck ? (console.log('DING!!!!!!!'), cornify_add()) : ''
    
  }