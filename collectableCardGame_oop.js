class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
        return this;
    }
    summonCard(){
        console.log(`Summoning Card Name: ${this.name}, and this Card's Cost is ${this.cost}`);
        return this;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
        return this;
    }

    attack(target){
        if(target instanceof Unit){
            target.resilience -= this.power;
            return this;
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effects extends Card{
    constructor(name, cost, text, stat, power, resilience){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.power = power;
        this.resilience = resilience;
        return this;
    }
    cardEffect(target){
        if(target instanceof Unit){
            if(this.stat == "Power"){
                target.power += this.power;
                return this;
            }
            else if(this.stat == "Resilience"){
                target.resilience += this.magnitude;
                return this;
            }
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effects("Hard Algorithm", 2, "increase target's resilience by 3", "Resilience", 0, 3);
const unhandledPromiseRejection = new Effects("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "Resilience", 0, -2);
const pairProgramming = new Effects("Pair Programming", 3, "increase target's power by 2", "Power", 2, 0);

redBeltNinja.summonCard()
blackBeltNinja.summonCard()