// jQuery Stuff
$(document).ready(function(){  
    $("#btnAboutMe").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    });
  });
  $(document).ready(function(){  
    $("#btnSkills").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    });
  });
