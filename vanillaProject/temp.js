function drawDog() {
    // Get the canvas element from the DOM
    const canvas = document.getElementById('canvas');
    // Get the 2D context from the canvas
    const context = canvas.getContext('2d');
  
    // Start drawing
    context.beginPath();
    // Draw the head
    context.arc(150, 100, 50, 0, 2 * Math.PI);
    // Draw the eyes
    context.moveTo(120, 80);
    context.arc(125, 80, 5, 0, 2 * Math.PI);
    context.moveTo(170, 80);
    context.arc(175, 80, 5, 0, 2 * Math.PI);
    // Draw the mouth
    context.moveTo(125, 120);
    context.arc(150, 120, 25, 0, Math.PI);
    // Draw the body
    context.moveTo(150, 150);
    context.lineTo(150, 230);
    // Draw the legs
    context.moveTo(150, 230);
    context.lineTo(100, 270);
    context.moveTo(150, 230);
    context.lineTo(200, 270);
    // Draw the tail
    context.moveTo(150, 150);
    context.lineTo(90, 120);
    // Set the line width and color
    context.lineWidth = 5;
    context.strokeStyle = '#000000';
    // Stroke the drawing
    context.stroke();
  }