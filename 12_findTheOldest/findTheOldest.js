const findTheOldest = function(people) {
    
    
    
    let currentYear = new Date().getFullYear();

    people.sort(function(b, a)
    {return ((a.yearOfDeath??currentYear) - a.yearOfBirth) - ((b.yearOfDeath??currentYear) - b.yearOfBirth)});
    
    console.log(people)
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
