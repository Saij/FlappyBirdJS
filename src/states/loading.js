if (!Game) Game = {};
if (!Game.states) Game.states = {};

Game.states.loading = function (game) {}

Game.states.loading.prototype = {
	preload: function(){ 
        let loadingBar = this.add.sprite(this.world.centerX, this.world.centerY, "loading");
        loadingBar.anchor.setTo(0.5,0.5);
        this.load.setPreloadSprite(loadingBar);
        
		this.game.load.spritesheet("img_bird", "assets/img_bird.png", 36, 36, 20);
		this.game.load.spritesheet("img_tree", "assets/img_tree.png", 90, 400, 2);

		this.game.load.image("img_ground", "assets/img_ground.png");

		this.load.bitmapFont("fnt_flappy", 'assets/fnt_flappy.png', 'assets/fnt_flappy.fnt');
	},
	create: function () {
		this.game.state.start("menu");
	}
}