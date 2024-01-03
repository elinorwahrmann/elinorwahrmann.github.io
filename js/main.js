// Zippy logic
document.addEventListener('DOMContentLoaded', function() {
  var zippyHeaders = document.querySelectorAll('.zippy-header');
  zippyHeaders.forEach(function(header) {
    header.addEventListener('click', function() {        
      // Check if this one is open already
      var content = this.nextElementSibling;
      if (content.style.height) {
        // Just close this one
        content.style.height = null;
        this.classList.remove('minus-sign');
        this.classList.add('plus-sign');
      } else {
        // Close others if needed first
        var openHeaders = document.querySelectorAll('.minus-sign');
        openHeaders.forEach(function(openHeader) {
          var openHeaderContent = openHeader.nextElementSibling;
          openHeaderContent.style.height = null;
          openHeader.classList.remove('minus-sign');
          openHeader.classList.add('plus-sign');
        });
        // Open this one
        content.style.height = content.scrollHeight + 'px';
        this.classList.remove('plus-sign');
        this.classList.add('minus-sign');
      }
    });
  });
});