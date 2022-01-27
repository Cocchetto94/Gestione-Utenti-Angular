import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from '../classes/user';

@Component({
  selector: 'app-create-input',
  templateUrl: './create-input.component.html',
  styleUrls: ['./create-input.component.css']
})
export class CreateInputComponent implements OnInit {



  user: User = new User();

@Output() userCreate = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  createUser() {
    alert(this.user.name + ' ' + this.user.username);
    this.userCreate.emit(this.user);
    this.user = new User();
  }

 
}
