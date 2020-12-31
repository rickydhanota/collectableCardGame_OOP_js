class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
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
        target.resilience -= this.power;
        return this;
    }
}

class Effects extends Card{
    constructor(name, cost){
        super(name, cost);
        return this;
    }
}