function debounce(fn, wait) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), wait);
  };
}

var moreEfficient = debounce(function() {
  console.log("resize completed");
}, 1000);

window.addEventListener("resize", moreEfficient);
