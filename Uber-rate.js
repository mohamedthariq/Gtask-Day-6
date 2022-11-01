//Uber Rate

class UberRate {
    constructor(km, toll, waiting, defaultFee = 50) {
        this.defaultFee = defaultFee;
        this.km = km;
        this.toll = toll;
        this.waiting = waiting;
    }

    //Method
    rateCharge() {

        let kms = this.km;
        if (kms <= 9) {
            kms = kms * 10;
        } else if (kms <= 19) {
            kms = kms * 15;
        } else {
            kms = kms * 20;
        }
        let toll = this.toll * 40;
        let waiting = this.waiting * 50;
        let defaultFee = this.defaultFee;
        let rideprice = defaultFee + kms + toll + waiting;
        console.log("Total - " + rideprice);

        let rideData =
            `KM: ${this.km}
        Toll: ${this.toll}
        Waiting: ${this.waiting}
            DefaultFee: ${ this.defaultFee }`

        return rideData;

    }
}

//let ride = new UberRate(km, tollcorssed, waiting time);

let ride1 = new UberRate(11, 2, 3);

console.log(ride1.rateCharge());

//output

// Total Bill - 360  

// Detail Bill:      
// KM: 8km
// Toll: 2
// Waiting: 3hrs
// DefaultFee: 50

//Uber Rate
