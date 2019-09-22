const bdays = [
    {
        name: "John Doe",
        month: 1,
        day: 10
    }, {
        name: "Mac Donald",
        month: 2,
        day: 10
    }  
]

const isBirthday = (bdays) => {
    let date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    bdays.forEach(person => {
        if(person.month === month) {
            if(person.day === day){
                console.log("TODAY")
                console.log(person.name + "'s birthday is today!")
                console.log("------------------------------------")
            } else {
                console.log(person.name + "'s birthday is this month on the " + person.day)
            }
        }
    });
}

isBirthday(bdays)