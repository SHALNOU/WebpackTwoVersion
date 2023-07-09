
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

const game = new Game();
game.start();

// const character = new Character('Hero', 100);
// character.attack('Enemy');

const gameData = new GameSavingData({ level: 5, score: 1000 });

loadGame();
saveGame();




export default class Post {
	constructor(title) {
		this.title = title,
			this.date = new Date()
	}

	tiString() {
		return JSON.stringify({
			title: this.title,
			date: this.date.toJSON()
		})
	}
}

