carousel = (function(){
  var box = document.querySelector('.time-slots-header');
  var dateContainer = document.querySelector('.carousel-dates');
  var next = box.querySelector('.time-slots-header-right');
  var prev = box.querySelector('.time-slots-header-left');
  var items = box.querySelectorAll('.date-heading');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  // box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('date-heading--active');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('date-heading--active');
    console.log('Next')
  }
  next.addEventListener('click', function(ev) {
    console.log('Next');
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    console.log('Prev');
    navigate(-1);
  });
  navigate(0);
})();