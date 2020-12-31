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
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
        return this;
    }
    addStatIncrease(target){
        if(target instanceof Unit){
            if(power){
                target.power += this.power;
                return this;
            }
            else if(this.resilience){
                target.resilience += this.resilience;
                return this;
            }
        }
        else{
            throw new Error( "Target must be a unit!" );
        }
    }
}