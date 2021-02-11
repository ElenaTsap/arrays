//-----evening task

let newClass = [];

let studentsNo = prompt('How many students would you like to have?');

for (let i = 1; i <= studentsNo; i++) {
    let name = prompt(`Give me the first name for student no: ${i}`);
    let lastName = prompt(`Give me the last name for ${name}`);
    let age = prompt(`Give me the age for ${name} ${lastName}`);


    let skills = [];
    let skillNo = 0;
    do {
        skills[skillNo] = prompt('Please add a skill:');
        skillNo++

        addSkill = prompt('Would you like to add another skill?')
    } while (addSkill == 'yes');
    newClass[(i-1)]= {name, lastName, age, skills};
   /*  newClass.push({name, lastName, age, skills}); */
}

console.log(newClass);