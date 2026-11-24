// 왼쪽 고정 목차: 좁은 화면에서 접기, 현재 위치 강조
(function () {
  var box = document.querySelector('.side-toc');
  if (!box) return;
  var narrow = window.matchMedia('(max-width: 1179px)');
  if (narrow.matches) box.open = false;

  var links = Array.prototype.slice.call(box.querySelectorAll('a[href^="#"]'));
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      if (narrow.matches) box.open = false;
    });
  });

  var targets = links.map(function (a) {
    return document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
  });

  function update() {
    var cur = -1;
    targets.forEach(function (t, i) {
      if (t && t.getBoundingClientRect().top <= 120) cur = i;
    });
    links.forEach(function (a, i) { a.classList.toggle('active', i === cur); });
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
