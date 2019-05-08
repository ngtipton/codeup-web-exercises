const wait = time => {
    return new Promise((resolve) =>
        setTimeout(()=> resolve(), time)
    )
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 second'));



function getLastCommitDate(name) {
    fetch('https://api.github.com/users/' + name + '/events', {headers: {'Authorization': + 'gitHubKey'}})
        .then((response) => {
        response.json()
            .then((data) => {
            console.log("Your last commit was " + data[0].created_at);
        });
    });
}

getLastCommitDate('ngtipton');
