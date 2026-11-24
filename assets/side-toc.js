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

  var last = -1;
  var autoOpened = null; // 스크롤로 자동 펼친 그룹 (직접 펼친 그룹은 건드리지 않음)
  function update() {
    var cur = -1;
    targets.forEach(function (t, i) {
      if (t && t.getBoundingClientRect().top <= 120) cur = i;
    });
    // 페이지 맨 아래에 닿으면 마지막 항목 강조
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      cur = targets.length - 1;
    }
    links.forEach(function (a, i) { a.classList.toggle('active', i === cur); });

    // 현재 항목이 바뀌면, 그 항목이 들어 있는 접힌 그룹을 펼치고 이전에 자동으로 펼친 그룹은 접음
    if (cur !== last) {
      var grp = cur >= 0 ? links[cur].closest('details.toc-group') : null;
      if (autoOpened && autoOpened !== grp) { autoOpened.open = false; autoOpened = null; }
      if (grp && !grp.open) { grp.open = true; autoOpened = grp; }
    }
    last = cur;
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
