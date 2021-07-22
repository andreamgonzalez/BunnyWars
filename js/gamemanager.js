let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFright();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Nanner":
                player = new Player(classType, 200, 0, 200, 100, 50);
            break;
            
            case "Snowball":
                player = new Player(classType, 100, 0, 111, 100, 50);
            break;
            case "Thumper":
                player = new Player(classType, 200, 0, 200, 100, 200);
            break;
            case "Chestnut":
                player = new Player(classType, 80, 0, 200, 100, 90);
            break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src=images/players/' + 
        classType.toLowerCase() + '.png" class="player"> <div><h3> ' + classType 
        + '</h3> <p>Health: ' + player.health + 
        '</p><p>Mana: ' + player.mana + 
        '</p><p>Strength: ' + player.strength + 
        '</p><p>Agility: ' + player.agility + 
        '</p><p>Speed: ' + player.speed + '</p></div>' ;
    },
    setPreFright: function() {
        let getHeader = documents.querySelector(".header");
        let getActions = documents.querySelector(".actions");
        let getArena = documents.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an enemy!';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()"> Search for an enemy!</a>'
        getArena.style.visibility = "visible";
    }, 
    setFight: function () {
        let getHeader = documents.querySelector(".header");
        let getActions = documents.querySelector(".actions");
        let getEnemy = documents.querySelector(".enemy");
        //Create Enemy!
        let enemy00 = new Enemy("Banana", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Chocolate", 200, 0, 150, 100, 80);
        let chooseRandomEnemy = Math.floor(Math.random()* Math.floor(2));
        switch (chooseRandomEnemy) {
            case 0: 
                enemy = enemy00;
            break;
            case 1:
                enemy= enemy01;
            break;
        }
        getHeader.innerHTML = '<p><Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-attack" onclick="PlayerMoves.calcAttack()"> Attack!</a>';
        getEnemy.innerHTML = '<img src="images/enemies/' + enemy.enemyType.toLowerCase + '.png" alt="' + enemy.enemyType + '"class="image-enemy"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}