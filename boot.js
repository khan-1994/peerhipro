(async function(){
  var parts = [];
  for (var i = 0; i < 8; i++) {
    var r = await fetch('p' + i + '.txt');
    if (!r.ok) { document.getElementById('app').innerHTML = '<p style="padding:20px">Missing p'+i+'.txt — upload failed</p>'; return; }
    parts.push(await r.text());
  }
  var s = document.createElement('script');
  s.text = parts.join('');
  document.body.appendChild(s);
})();
