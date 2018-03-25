import SWorker from './helpers/patched_simple_web_worker';

const worker = SWorker.create(
    [
        {
            message: 'findUsers',
            func: (usersDB, parameters) => {
                return usersDB.filter(user => {
                    let condAgeFrom = (!!parameters.age && !!parameters.age.from) ? user.age >= parameters.age.from : true;
                    let condAgeTo = !!parameters.age && !!parameters.age.to ? user.age <= parameters.age.to : true;
                    let condGender = !!parameters.gender ? user.gender === parameters.gender : true;
                    let condOccupation = !!parameters.occupation ? user.company === parameters.occupation : true;
                    let searchStrRegexes = !!parameters.searchStr ? parameters.searchStr.split(' ').map(word => {
                        return new RegExp(word, 'i');
                    }) : [];
                    let condSearchStr = !!parameters.searchStr ? user.name.split(' ').filter(word => {
                        let okCount = 0;
                        for (let i in searchStrRegexes) if (word.match(searchStrRegexes[i])) okCount++;
                        return !!okCount;
                    }).length > 0 : true;
                    return condAgeFrom && condAgeTo && condGender && condOccupation && condSearchStr;
                });
            }
        }
    ]
);

export default worker;