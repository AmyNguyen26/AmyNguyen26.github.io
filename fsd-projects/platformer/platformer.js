$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    //(x, y, width, height)
    createPlatform(500, 0, 20, 290, "pink");
    createPlatform(400, 270, 100, 20, "pink");
    createPlatform(250, 610, 100, 20, "pink");
    createPlatform(100, 500, 100, 20, "pink");
    createPlatform(300, 400, 100, 20, "pink");
    createPlatform(650, 660, 25, 250, "pink");
    createPlatform(1005, 250, 100, 20, "pink");
    createPlatform(825, 530, 100, 20, "pink");
    createPlatform(1005, 390, 300, 20, "pink");

    // TODO 3 - Create Collectables
    createCollectable("steve", 450, 235);
    createCollectable("diamond", 730, 680, 0.1, 1.5);
    createCollectable("database", 1010, 220);
    
    // TODO 4 - Create Cannons
    createCannon("right", 540, 1700);
    createCannon("top", 620, 1700);
    createCannon("bottom", 1110, 1000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
