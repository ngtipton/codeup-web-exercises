const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(n => {if(n.languages.length >= 3){
    return n
}});

console.log(threeLanguages);

const email = users.map(n => n.email);

console.log(email);

const sumYears = users.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber.yearsOfExperience}, 0);

console.log(sumYears);
console.log(sumYears/users.length);

const longestEmail = users.reduce((largestEmail, currentNumber) => {
    if(largestEmail.length < currentNumber.email.length){
    largestEmail = currentNumber.email
}
return largestEmail;
},'');

console.log(longestEmail);

const instrNames = users.reduce((instructors, user) => {
    return instructors + user.name + ", ";
    }, 'Your Instructors are: ');

console.log(instrNames);

const langList = users.reduce((list, user) => {
    for (i=0; i < user.languages.length; i++){
    if (list.indexOf(user.languages[i]) < 0){
        list.push(user.languages[i])
    }
}
return list;
}, []);

console.log(langList);