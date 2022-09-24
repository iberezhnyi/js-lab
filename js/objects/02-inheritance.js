class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name}, получает ${amount} опыта`);
    this.xp += amount;
  }
}

// *********************************************************************

// const mango = new Hero({ name: 'Mango', xp: 1000 });

// console.log(mango);
// mango.gainXp(1000);
// console.log(mango);

class Warrior extends Hero {
  constructor({ weapon, ...restProps } = {}) {
    super(restProps);

    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name}, атакует используя ${this.weapon}`);
  }
}

// *********************************************************************

class Berserk extends Warrior {
  constructor({ warcry, ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}

// *********************************************************************

class Mage extends Hero {
  constructor({ spells = [], ...restProps } = {}) {
    super(restProps);

    this.spells = spells;
  }

  cast() {
    console.log(`${this.name}, атакует используя ${this.spells}`);
  }
}

// *********************************************************************

const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'alebarda' });
console.log(mango);

console.log(mango.__proto__ === Warrior.prototype);
console.log('Warrior.prototype', Warrior.prototype);
console.log(Warrior.prototype.__proto__ === Hero.prototype);

mango.attack();
mango.gainXp(1000);

// *********************************************************************

const poly = new Mage({ name: 'Poly', xp: 500, spells: ['Staff of Grimm'] });
console.log(poly);
poly.cast();
poly.gainXp(1500);
console.log(poly);

// *********************************************************************

const ajax = new Berserk({ name: 'Ajax', xp: 500, weapon: 'axe', warcry: 'Waaaaaaaaaaah' });
console.log(ajax);

ajax.babyRage();
ajax.attack();
ajax.gainXp(2000);
console.log(ajax);
