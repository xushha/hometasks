const contacts = [{
    name: "Serhii",
    phone: "+380999999999",
    email: "example@email.com",
},
]
function Contact({id,name, phone, email}){
    this.name = name;
    this.phone = phone;
    this.email = email;

}
function Book(contacts) {
    this.contacts = contacts;
    Book.prototype.find = (name) => {
        for (let i = 0; i < this.contacts.length; i++){
            if (contacts[i].name === name){
                console.log(contacts[i]);
            }
        }
    };

    Book.prototype.add = (contacts) => {
        this.contacts.push(contacts);
    };

    Book.prototype.remove = (id) => {
       if (this.contacts.findIndex(el => el === id)){
           contacts.splice(id, 1);
       }
    };
}


const book = new Book(contacts);

const contact2 = new Contact({
    name: 'Ksu',
    phone: '0985369408',
    email: 'chabanenkoksenia3@gmail.com'
});
const contact3 = new Contact({
    name: 'Bogdan',
    phone: '0937722448i8',
    email: 'bestboyfriend@gmail.com'
});
book.add(contact2);
book.add(contact3);
// book.find('Ksu');
book.remove(2);
console.log(book);
