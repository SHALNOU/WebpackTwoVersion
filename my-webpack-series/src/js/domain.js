export default class Character {
	constructor(name, health) {
		this.name = name;
		this.health = health;
	}

	attack(target) {
		console.log(`${this.name} attacks ${target}!`);
	}
}
