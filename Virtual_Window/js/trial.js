$(document).ready(function() {
    window.controller = new Leap.Controller({enableGestures: true});
    var swiper = controller.gesture('swipe');
    var tolerance = 50;
    var cooloff = 300;
    var x = 2, y = 2;
    var updateHighlight = function() {
      $('.container').removeClass('window');
      $('.container').addClass('window');
    }
    var slider = _.debounce(function(xDir, yDir) {
      x += xDir;
      x = (x + 5) % 5;
      y += yDir;
      y = (y + 5) % 5;
      updateHighlight();
    }, cooloff);
    swiper.update(function(g) {
      if (Math.abs(g.translation()[0]) > tolerance || Math.abs(g.translation()[1]) > tolerance) {
        var xDir = Math.abs(g.translation()[0]) > tolerance ? (g.translation()[0] > 0 ? -1 : 1) : 0;
        var yDir = Math.abs(g.translation()[1]) > tolerance ? (g.translation()[1] < 0 ? -1 : 1) : 0;
        slider(xDir, yDir);
      }
    });
    controller.connect();
    updateHighlight();
  })