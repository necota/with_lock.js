var with_lock = (function(){
  var locks = {};

  return function(domain, fn){
    if(locks[domain]) return;
    locks[domain] = true;
    fn(function(){locks[domain] = false;});
  };
})();
