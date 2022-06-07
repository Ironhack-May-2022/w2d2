// inheritance
class Animal {
	constructor(name, sound) {
		this.name = name
		this.sound = sound
	}
	makeSound() {
		console.log(this.sound)
	}
}

// class Cat {
// 	constructor(name, sound, number) {
// 		super(name, sound)
// 		this.numberOfLives = number
// 	}
// }

class Bird extends Animal {
	constructor(name, sound) {
		super(name, sound)
	}
	fly() {
		return 'hey i am flying'
	}
	// this is overriding the makeSound method in Animal
	makeSound() {
		// this calls the parent method 'makeSound'
		super.makeSound()
		return 'this is the bird sound'
	}
}

const pete = new Bird('pete', 'peep')
console.log(pete.makeSound())