import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  @Input() user: User;

  @Output() userDelete = new EventEmitter(); //  emittitore di eventi 
  

  @Output() userUpdate = new EventEmitter(); //  emittitore di eventi 
  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(user: User): void {
   // alert(user.name);
    this.userDelete.emit(user);
  }
  updateUser(user: User): void {
   
    this.userUpdate.emit(user);
  }
}
