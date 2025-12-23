//your JS code here. If required.
const line = document.getElementById('line');
let currentAngle = 0;

// Set an interval to run every 20 milliseconds
setInterval(() => {
  // 1. Increase the angle by 2 degrees
  currentAngle += 2;
  
  // 2. Apply the rotation to the element's CSS transform
  line.style.transform = `rotate(${currentAngle}deg)`;
  
  // Optional: Reset angle at 360 to prevent the number from growing infinitely
  if (currentAngle >= 360) {
    currentAngle = 0;
  }
}, 20);
