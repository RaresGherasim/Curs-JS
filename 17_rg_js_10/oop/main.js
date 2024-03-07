console.log(`OOP is comming...`);

const sudents = [];

//sudents.push(`Peppa`);//

//const amongUsCharacter = {
//    name: "Red",
//    avatar: `🚗`,
//    isImpostor: false,
//    sayHello(){
//        console.log(`Hey! I am ${this.name}`);
//    }
//};//
//

//const amongUsOherCharacter = {
//    name: "Blue",
//    avatar: `🎈`,
//    isImpostor: false,
//    sayHello(){
//        console.log(`Hey! I am ${this.name}`);
//    }
//};

//console.log(amongUsCharacter);

function characterFactory(name, avatar){
    return {
        name,
        avatar,
        isImpostor: false,
        sayHello(){
            console.log(`Hey! I am ${this.name}`);
        }
    }
};

class AmongUsCharacters {
    constructor(charName, charAvatar){
        console.log('A new AmongUs character will be created...');
        this.name = charName;
        this.avatar = charAvatar;
        this.isImpostor = false;
    }
    sayHello(){
        console.log(`Hey! I am ${this.name}`);
    }
};

const amongUsChar1 = new AmongUsCharacters("Red", `🚗`);
const amongUsChar2 = new AmongUsCharacters("Blue", `🎈`);
const amongUsChar3 = new AmongUsCharacters("Green", `🫒`);