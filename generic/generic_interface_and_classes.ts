import {AccountPerson, newAccountPerson, PersonInfo} from "./learn1";

export interface LibraryCollection<T> {
    _items: T[];
    addItemToCatalog(item: T): void;
    removeItemFromCatalog(item: T): void;
}

const accountPersons: LibraryCollection<AccountPerson> = {
    _items: newAccountPerson,
    addItemToCatalog(item: AccountPerson) {
        this._items.push(item)
    },
    removeItemFromCatalog(item: AccountPerson) {
        this._items = this._items.filter((presentItem:AccountPerson) => presentItem.lastName === item.lastName)
    }
}

console.log(accountPersons._items)
accountPersons.addItemToCatalog({firstName: "new added", lastName: "last name", role: 33})
console.log(accountPersons._items)
accountPersons.removeItemFromCatalog({firstName: "Job", lastName: "peace", role: 1})
console.log(accountPersons._items)

// we can do the same thing in class

class Shelf<T extends PersonInfo> implements LibraryCollection<T> {
    _items!: T[];
    addItemToCatalog(item: T) {
        this._items.push(item)
    }
    removeItemFromCatalog(item: T) {
        this._items = this._items.filter((presentItem ) => presentItem.lastName === item.lastName)
    }
}
