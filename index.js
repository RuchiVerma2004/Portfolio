document.addEventListener('wheel', function(event) {
  const rightContainer = document.getElementById('right');
  if (event.deltaY !== 0) {
      rightContainer.scrollTop += event.deltaY;
      event.preventDefault(); // Prevent default scrolling
  }
});
