(async function(){
  var parts = [];
  for (var i = 0; i < 3; i++) {
    parts.push(await fetch('partjs' + i + '.js').then(function(r){ return r.text(); }));
  }
  var s = document.createElement('script');
  s.text = parts.join('');
  document.body.appendChild(s);
})();
