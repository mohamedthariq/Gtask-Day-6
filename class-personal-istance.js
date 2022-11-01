//class personnel

class Personal {
    constructor(firstname, lastname, age, gender, state, nationalist, address, education, job) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.state = state;
        this.nationalist = nationalist;
        this.address = address;
        this.education = education;
        this.job = job;
    }

    //Method
    personalData() {

        let Pdata = `Name: ${this.firstname} ${this.lastname} 
        Age: ${this.age}
        Gender: ${this.gender}
        State: ${ this.state }
        Nationalist: ${this.nationalist}
        Address: ${this.address}
        Education: ${this.education}
        Job: ${this.job}`

        return Pdata;

    }
}

// create object with data
let person1 = new Personal("Mohamed", "Thariq", 24, "Male", "TamilNadu", "Indian", "Uthamapalayam, Theni", "B.Tech/IT", "Software Engineer");

console.log(person1.personalData());

//output

// Name: Mohamed Thariq 
// Age: 24
// Gender: Male
// State: TamilNadu
// Nationalist: Indian
// Address: Uthamapalayam, Theni
// Education: B.Tech/IT
