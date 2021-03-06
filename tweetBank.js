const _ = require('lodash');

var data = [];
var ids = [];



function add(name, content) {
    var newId = function generateID() {
        do {
            id = Math.floor(Math.random() * 100) + 1;
        } while (ids.indexOf(id) > -1)
        ids.push(id);
        return id;
    }

    data.push({
        name: name,
        content: content,
        id: newId()
    });
    console.log(id);
}

function list() {
    return _.cloneDeep(data);
}

function find(properties) {
    return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
    add: add,
    list: list,
    find: find
};

const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
    module.exports.add(getFakeName(), getFakeTweet());
}

// module.exports.add('keziyah', 'i hate twitter')
// module.exports.add('fish', 'moar coffee pls #sleepdeprived #gha')
// module.exports.add('dan', '*clap clap clapclapclap* #listenupladies #gha')
//
// // var search = module.exports.find( ['name', 'keziyah'] )
//
// var search = find( function(user) {
// 	return user.content.includes("#gha") } )
//
// console.log(data);
