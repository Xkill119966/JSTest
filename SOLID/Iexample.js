function SpeedControl() {
  this.engine = () => {}

  this.break = () => {}

function AudioControl() {
  this.playAudio = () => {}
  this.ejectCd = () => {}
}

function Car() {
  this.speed = new SpeedControl();
  this.audio = new AudioControl();
}
