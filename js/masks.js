(function closure(exports) {
  var Masks = {
    none: function none(tracker, canvas, ctx) {},
 
    // Guy Fawkes
    guy: function guy(tracker, canvas, ctx) {
      var mask = document.createElement("img");
      mask.src = '../images/robert-williams.png';  
      tracking.track(canvas, tracker, { camera: true, audio: true });
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          ctx.drawImage(mask, rect.x - 100, rect.y - 100, rect.width * 1.5, rect.height * 1.5);
        });
      });
    },
 
    // Batman
    batman: function batman(tracker, canvas, ctx) {
      var mask = document.createElement("img");
      mask.src = '../images/batman.png';  
 
      tracking.track(canvas, tracker, { camera: true, audio: true });
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          ctx.drawImage(mask, rect.x - 60, rect.y - 170, rect.width * 1.4, rect.height * 1.5);
        });
      });
    }
  };
 
  // Set the initial mask to none
  Masks.selectedMask = Masks.none;
 
  // When the mask selector changes we update the selectedMask
  var maskSelector = document.querySelector('#mask');
  maskSelector.addEventListener('change', function change() {
    Masks.selectedMask = Masks[maskSelector.value];
  });
 
  exports.Masks = Masks;
})(exports);
