
const number2 = 4; 
let number3 = 5; 

number2 = 7; 
number3 = 11; 

let techTeam: string[] = ["Elmer","Bryan","Alejandro"];





techTeam.push("Tino");
console.log(techTeam);

techTeam.splice(2,1);
console.log(techTeam); 
console.log(techTeam[0]);
console.log(techTeam[techTeam.length-1])

for(let counter = 0; counter < techTeam.length; counter++){
    console.log(techTeam[counter]);
    if(counter % 2 == 0){
        console.log(counter + " is even");
    }
    else{
        console.log(counter + " is odd");
    }
}
let person = {
    name : "Elmer",
    age : 19, 
    birthday: "July 7"

}
class Dog{
    public name: string; 
    public age: number;
    private homeAddress: string;
    public legs: number = 4; 
    constructor(newName:string, newAge: number, newHomeAddress: string){
        this.name = newName; 
        this.age = newAge; 
        this.homeAddress = newHomeAddress; 
    
    } 
    
}

let einstein : Dog =  new Dog("einstein", 19, "Rosemary Drive");
console.log(einstein.name);
console.log(einstein.age);

console.log(einstein.homeAddress);
