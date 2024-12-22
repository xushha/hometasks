const contacts = [{
    name: "Serhii",
    phone: "+380999999999",
    email: "example@email.com",
}];

function Contact({ name, phone, email }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts;
}

Book.prototype.find = function (name) {
    for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name === name) {
            console.log(this.contacts[i]);
            return;
        }
    }
    console.log('Contact not found');
};

Book.prototype.add = function (contact) {
    this.contacts.push(contact);
};

Book.prototype.remove = function (id) {
    if (this.contacts.findIndex(el => el === id)){
        contacts.splice(id, 1);
    }
};

const otherContacts = [];

const book = new Book(contacts);
const otherBook = new Book(otherContacts);

const contact2 = new Contact({
    name: 'Ksu',
    phone: '09767654748',
    email: 'ksu@gmail.com',
});
const contact3 = new Contact({
    name: 'Bogdan',
    phone: '0936543559',
    email: 'bogdan@gmail.com'
});
const contact4 = new Contact({
    name: 'Masha',
    phone: '08735628782',
    email: 'masha@gmail.com'
});
const contact5 = new Contact({
    name: 'Ivan',
    phone: '0987287282',
});

otherBook.add(contact5);
otherBook.add(contact4);
// otherBook.find('Ivan');
// console.log(otherBook);
book.add(contact2);
book.add(contact3);
book.remove(1);
// console.log(otherBook);
console.log(book);
