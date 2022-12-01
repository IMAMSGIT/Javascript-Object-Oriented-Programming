//  in order to create mltiple objects without hardcoding
// we need it when an object has at least one method/behvior
// because if there is problem in one method, we have to fix multiple places

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("Draw");
    },
  };
}
const circle = createCircle(23, () => "NO");
