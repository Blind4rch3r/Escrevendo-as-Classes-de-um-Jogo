// For data input
const input = require('readline-sync')

// Hero Class
class HeroType {
	constructor(heroName, heroAge, heroType) {
		this.heroName = heroName
		this.heroAge = heroAge
		this.heroType = heroType.toLowerCase()		// Normalize heroType to lowercase
		this.attackType = this.determineAttackType()
	}

	determineAttackType() {
		switch (this.heroType) {
			case "mago":
				return "magia"
            		case "guerreiro":
				return "espada"
            		case "monge":
				return "artes marciais"
            		case "ninja":
                		return "shuriken"
            		default:
                		return "INVALID ATTACK!"
		}
	}

	toAttack() {
        	if (this.attackType === "INVALID ATTACK!") {
			console.log(`- ${this.heroType} - is an INVALID TYPE HERO!`)
        	}
		else {
            		console.log(`O ${this.heroType} atacou usando ${this.attackType}.`)
        	}
    	}
}


function main() {
	do {
        	let heroName = input.question('What is your Hero Name: ')
        	let heroAge = input.questionInt('What is your Hero Age: ')
        
		while (heroAge <= 0) {
        		heroAge = input.questionInt('Please enter a valid age: ')	// hero age should be a positive number
        	}
        
		let heroType = input.question('What is your Hero Type [Mago, Guerreiro, Monge, Ninja]: ')

        	let newHero = new HeroType(heroName, heroAge, heroType);
        	newHero.toAttack();

        	let exitMenu = input.question('Deseja criar um novo heroi? [Y/N] ')
        	if (exitMenu.toLowerCase() === 'n') break

    	} while (true)
}


// Start the program
main()
