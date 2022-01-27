import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

updateForm = false;
  users: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
     
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
     
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
      
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
      
    }
    
  ];
  userUpdate: User = new User;
  user: User;
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteUser(user: User): void {
    alert(user.name);
   const index =  this.users.indexOf(user);
this.users.splice(index, 1);
   
  }

  onUpdateUser(user: User): void {
   
  this.updateForm = true;
  const userCopy = Object.assign({}, user); // copia oggetto
  this.user = userCopy;

//this.users.(index, 1);
   
  }

  onCreateUser(user: User): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  onUserSaveUpdate(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    this.users.splice(index, 1, user);
    this.updateForm = false;
  }
}
