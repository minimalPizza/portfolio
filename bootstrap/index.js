
var pizza_anim = document.getElementById('minimal-pizza');
var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'data.json'
})
var isComplete = true;

pizza_anim.addEventListener('mouseenter', function() {
  if (isComplete) {
    animation.goToAndPlay(0);
    isComplete = false;
  }
});

animation.addEventListener('complete', function(){
  isComplete = true;
})
