import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Homevar: string = "Home Works";
  @Input() message1!:string;
  @Output() messageSent = new EventEmitter<string>();

  sendMessage(){
    const messageToParent = "From child to Parent";
    this.messageSent.emit(messageToParent);
  }

  childMethod(){
    alert("child method");
  }

}
