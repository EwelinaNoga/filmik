'use strict';

 var v = document.getElementsByTagName('video')[0];
      
      v.addEventListener('timeupdate', function()
      {
        var p = document.getElementsByTagName('progress')[0];
        p.value = 100*this.currentTime/this.duration;
      });