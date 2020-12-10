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
    post: 0
};
for (var _i = 0, _a = persons.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
person.role.push('hee');
person.role.push(3);
console.log(person.role);
//enum
var hello;
(function (hello) {
    hello[hello["ADMIN"] = 0] = "ADMIN";
    hello[hello["SUPERADMIN"] = 1] = "SUPERADMIN";
})(hello || (hello = {}));
persons.post = hello.SUPERADMIN;
console.log(persons);
console.log(hello.ADMIN);
