(function(){
  'use strict';

  $(document).ready(function(){

  $.ajax({
    url: "https://api.github.com/users/schnetthappens",
    }).then(function(data){
      $('.holds-sidebar').prepend(JST['user'](data));
    console.log(data);
  });

  $.ajax({
    url: "https://api.github.com/users/schnetthappens/repos",
    }).then(function(data){
      $('.holds-repos').prepend(JST['repo'](data));
    console.log(data);
  });
});

})();
