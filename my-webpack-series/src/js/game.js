import { default as Character } from './domain';

export default class Game {
	constructor() {
		this.character = new Character('Hero', 100);
	}

	start() {
		console.log('game started');
		this.character.attack('Enemy');
	}
}


export class GameSavingData {
	constructor(data) {
		this.data = data;
	}
}

export function readGameSaving() {
	// Логика чтения сохраненных данных игры
	console.log('Reading game saving data...');
}

export function writeGameSaving() {
	// Логика записи сохраненных данных игры
	console.log('Writing game saving data...');
}
