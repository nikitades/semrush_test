import SWorker from './patched_simple_web_worker';

const worker = SWorker.create(
    [
        {
            message: 'findUsers',
            func: (usersDB, parameters) => {
                return usersDB.filter(user => {
                    let condID = !!parameters.id ? user.id === parameters.id : true;
                    let condAgeFrom = (!!parameters.age && !!parameters.age.from) ? user.age >= parameters.age.from : true;
                    let condAgeTo = !!parameters.age && !!parameters.age.to ? user.age <= parameters.age.to : true;
                    let condGender = !!parameters.gender ? user.gender === parameters.gender : true;

                    let occupationRegexes = !!parameters.occupation ? parameters.occupation.split(' ').map(word => {
                        return new RegExp(word, 'i');
                    }) : [];
                    let condOccupation = !!parameters.occupation ? user.company.split(' ').filter(word => {
                        let okCount = 0;
                        for (let i in occupationRegexes) if (!!word && word.match(occupationRegexes[i])) okCount++;
                        return !!okCount;
                    }).length > 0 : true;

                    let searchStrRegexes = !!parameters.searchStr ? parameters.searchStr.split(' ').map(word => {
                        return new RegExp(word, 'i');
                    }) : [];
                    let condSearchStr = !!parameters.searchStr ? user.name.split(' ').filter(word => {
                        let okCount = 0;
                        for (let i in searchStrRegexes) if (!!word && word.match(searchStrRegexes[i])) okCount++;
                        return !!okCount;
                    }).length > 0 : true;

                    let condFriends = !!parameters.inFriendsList ? parameters.inFriendsList.indexOf(user.id) !== -1 : true;
                    return condID && condAgeFrom && condAgeTo && condGender && condOccupation && condSearchStr && condFriends;
                });
            }
        }
    ]
);

export default worker;