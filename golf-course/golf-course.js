class GolfCourse {
    constructor(name, difficulty, openings, features){
        this.name = name
        this.difficulty = difficulty
        this.openings = openings
        this.features = features
        this.currentlyPlaying = []
    }
 checkInGroup(group) {
        if (group.length <= this.openings) {
            for (var i = 0; i < group.length; i++) {
                this.currentlyPlaying.unshift(group[i].name);
            }
            console.log('CP', this.currentlyPlaying)
            this.openings -= group.length;
            console.log('2 GL', this.group)
            console.log('3', this.openings)
            return "You're checked in. Have fun!";
        } else {
            return "Sorry, we are currently booked! Please come back later.";
        }
    }
}


//     checkInGroup(golfer){
//         var group1 = golferInfo.name.length
//         console.log(golferInfo.name.length)
//         if (golferInfo.name < 5) this.currentlyPlaying.push(group);
//         console.log(this.currentlyPlaying)
//     }

// }
    
//create a function that is taking in a paramer of a group and checking in the group. 
//The group is divided based on numbers and the group is put into the empty array.
module.exports = GolfCourse;
