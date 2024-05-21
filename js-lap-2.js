// this is lap two

// Q1
eatsPlants =true
eatsAnimals=false
caw=true
let animalIs= caw==eatsPlants?"herbivore"
:caw==eatsAnimals? "carnivore"
:caw==eatsAnimals || caw==eatsPlants? "omnivore" : "undefined"

console.log(animalIs)

// Q2

var musicians =1
if (musicians <= 0){
    console.log("not a group")
} else if(musicians==1){
    console.log("solo")
} else if (musicians==2){
    console.log("duet")
} else if (musicians ==3){
    console.log("trio")
} else if(musicians == 4){
    console.log("quartet")
} else {
    console.log("this is a large group")
}

// Q3
var room="billiards room"
var suspect="Mr. Parkes"
var weapon=""
var solved=false
if(room=="ballroom" && suspect=="Mr. Kalehoff"){
    weapon="poison"
    solved=true
} else if(room=="gallery" && suspect=="Ms. Van Cleve"){
    weapon="trophy"
    solved=true
} else if(room =="billiards room" && suspect=="Mrs. Sparr"){
    weapon="pool"
    solved = true
} else if (room=="dining room" && suspect=="Mr. Parkes"){
    weapon="knife"
    solved =true
} else {
    solved = false
}
if (solved == true){
console.log(`${suspect} did it in the ${room} with the ${weapon}!`)} else {
    console.log("not solved")
}

var room="billiards room"
var suspect="Mrs. Sparr"
var weapon=""
if(room=="ballroom" && suspect=="Mr. Kalehoff"){
    weapon="poison"
    solved=true
} else if(room=="gallery" && suspect=="Ms. Van Cleve"){
    weapon="trophy"
    solved=true
} else if(room =="billiards room" && suspect=="Mrs. Sparr"){
    weapon="pool"
    solved = true
} else if (room=="dining room" && suspect=="Mr. Parkes"){
    weapon="knife"
    solved =true
} else {
    solved = false
}
if (solved == true){
console.log(`${suspect} did it in the ${room} with the ${weapon}!`)} else {
    console.log("not solved")
}
if (solved == true){
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`)} else {
        console.log("not solved")
    }

// Q4

var balance
var checkBalance
var isActive