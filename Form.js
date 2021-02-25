class Form{
    constructor(){

        this.input = createInput("Name");
        this.button = craeteButton('Play');
        this.greeting = createElement('h2');

    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }
    display(){

        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(580,90);

        //var input = createInput("Name");
        this.input.position(600,200);

        //var button = createButton('Play');
        this.button.position(700,240);

        //var greeting = createElement('h3');

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello" + player.name);
            this.greeting.position(580,250);

        });

    }
}