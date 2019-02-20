/* global CanvasRenderingObject2D */
// This file exposes a Masks object which has methods for different masks
// none, grayscale, sepia and invert. It also has a selectedMask property which is the currently
// selected mask.

(function closure(exports) {
  var Masks = {
    none: function none(tracker, canvas, ctx) {}

    // Guy Fawkes

    // Batman
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
