//Animation
/*
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
*/
//Dark Mode
/*
var container = document.getElementsByClassName('container')[0];

document.getElementById('toggler').addEventListener('change', (event) => {
  console.log(toggler)
  event.target.checked ? container.setAttribute('data-theme', 'default') : container.setAttribute('data-theme', 'dark');
});
*/
var themeSwitch = document.getElementById('themeSwitch');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });

  function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribute
    darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'default');
  };

  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection
    } else {
      document.body.removeAttribute('data-theme');
      localStorage.removeItem('themeSwitch'); // reset theme selection
    }
  };
}
