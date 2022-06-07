const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
console.log(squares.length)

let dice;

const player1 = {
	name: 'Bob',
	color: 'blue',
	position: 0,
	cash: 1000,
	move: function () {
		dice = 1 + Math.floor(Math.random() * 6)
		this.position = (this.position + dice) % squares.length
	},
	display: function () {
		// console.log(this)
		console.log('my name is: ', this.name)
	}
}
const player2 = {
	name: 'Alice',
	color: 'red',
	position: 0,
	cash: 1000
}
const player3 = {
	name: 'Foo',
	color: 'green',
	position: 0,
	cash: 1000
}

// roll the dice
dice = 1 + Math.floor(Math.random() * 6)

// moving the player
if ((player1.position + dice) > squares.length - 1) {
	player1.position += dice
} else {
	player1.position += dice - squares.length
}

// or shorter using modulo

player1.position = (player1.position + dice) % squares.length


console.log(player1.display())

class Player {
	constructor(name, color) {
		this.color = color;
		this.name = name;
		this.position = 0;
		this.cash = 1000;
	}
	greet() {
		return 'hi my name is ' + this.name
	}
}

// instantiate a new object based on the Player class
const player = new Player('alice', 'blue')
const anotherPlayer = new Player('bob', 'red')
console.log(player)
player.name = 'jan'
player.city = 'berlin'
console.log(player.greet())

// TODO: write the methods .getAge(), .addJoke() and .getRandomJoke()

let chuck = {
	firstName: 'Chuck',
	lastName: 'Norris',
	birthDate: new Date('1940-03-10'),
	jokes: [
		'Chuck Norris counted to infinity... Twice.',
		'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
	],
	displayInfo: function () {
		console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
	},
	getAge: function () {
		return new Date().getFullYear - this.birthday.getFullYear()
	},
	addJoke: function (joke) {
		this.jokes.push(joke)
	},
	getRandomJoke: function () {
		return this.jokes[Math.floor(Math.random() * this.jokes.length)]
	},
}

chuck.displayInfo();

console.log('getAge', chuck.getAge());

chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();


