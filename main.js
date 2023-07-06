const app = document.getElementById('typewriter');
 
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  
  .typeString('~100% diversión y entretenimiento garantizado~')
  .pauseFor(1000)
  //.deleteChars(10)
  .start();







