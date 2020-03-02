var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 500, "y": groundY + - 110 },
                { "type": "sawblade", "x": 900, "y": groundY + - 110 },
                { "type": "enemy", "x": 1100, "y": groundY + - 65 },
                { "type": "sawblade", "x": 1500, "y": groundY + - 110 },
                { "type": "spikes", "x": 1200, "y": groundY },
                { "type": "spikes", "x": 1700, "y": groundY },
                { "type": "spikes", "x": 2000, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
       
        
        function createSawBlade (x, y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
        
            game.addGameItem(sawBladeHitZone);   
        
            var obstacleImage = draw.bitmap('img/PigsDontFly.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -45;
            obstacleImage.y = -40;
            obstacleImage.scaleX = 3;
            obstacleImage.scaleY = 3;
        }
        
 
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItemObject = levelData.gameItems[i];
                if (gameItemObject.type === 'sawblade') {
                    createSawBlade(gameItemObject.x, gameItemObject.y)
                }
                 if (gameItemObject.type === 'spikes') {
                    createSpikes(gameItemObject.x, gameItemObject.y)
                }
                 if (gameItemObject.type === 'enemy') {
                    createEnemy(gameItemObject.x, gameItemObject.y)
                }
        }
                
        function createSpikes(x,y) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
        
            game.addGameItem(sawBladeHitZone);   
        
            var obstacleImage = draw.bitmap('img/lovesting.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -42.5;
            obstacleImage.y = -25;
            obstacleImage.scaleX = 3;
            obstacleImage.scaleY = 3;
            
            
            
        };
                            
         function createEnemy(x,y){
            var enemy = game.createGameItem('enemy', 25);
            enemy.x = x;
            enemy.y = y;
            enemy.velocityX = -1;
            
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            
            enemy.addChild(redSquare);
            game.addGameItem(enemy);
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-30);
                enemy.fadeOut();
            };
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.fadeOut();
            };
        }
        function createReward (x,y) {
            var reward = game.createGameItem('reward', 17);
                reward.x = x;
                reward.y = y;
                reward.velocityX = -2;
                
            var blueSquare = draw.bitmap('img/jewel.png');
                blueSquare.x = -17.5;
                blueSquare.y = -17.5;
              blueSquare.scaleX = 0.25;
            blueSquare.scaleY = 0.25;
                
            reward.addChild(blueSquare);
            
            game.addGameItem(reward);
            
            reward.onPlayerCollision = function() {
                game.increaseScore(50);
                reward.fadeOut();
            };
        }
        
            createReward(1000, groundY - 100);
            createReward(1400, groundY - 100);
            createReward(2200, groundY - 100);
            createReward(2700, groundY - 100);
            createReward(3200, groundY - 100);
            createReward(3800, groundY - 100);
                
            // code to do something with each element
        


        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
