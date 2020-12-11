"use strict";
var how = "tony"; // Not necessary because js infare types
h = 3;
console.log(how);
console.log(h);
// Objects
var person = {
    name: "jdjd",
    age: 30,
    role: [3, 'thid']
};
// is the same as this below and better
var persons = {
    name: "jdjd",
    age: 30,
    hobbies: ['dkd', 'sport', 'chess'],
    role: [3, "author"],
    post: 0,
};
for (var _i = 0, _a = persons.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby, ">>>>");
}
person.role.push('hee');
person.role.push(3);
console.log(person.role);
//enum
var Hello;
(function (Hello) {
    Hello[Hello["ADMIN"] = 1] = "ADMIN";
    Hello[Hello["SUPERADMIN"] = 2] = "SUPERADMIN";
})(Hello || (Hello = {}));
persons.post = Hello.SUPERADMIN;
console.log(persons);
console.log(Hello.ADMIN);
favoriteActivities = ['sport', 'something'];
anyStuff = [3, favoriteActivities, "favor"];
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    return input1.toString() + input2.toString();
}
