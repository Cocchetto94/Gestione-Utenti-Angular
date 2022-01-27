import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-update-input',
  templateUrl: './update-input.component.html',
  styleUrls: ['./update-input.component.css']
})
export class UpdateInputComponent implements OnInit {

  @Input() userUpdate: User;
  @Output() userSaveUpdate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
saveUpdateUser(): void {
  this.userSaveUpdate.emit(this.userUpdate);
}
}
