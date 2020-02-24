import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = false;
  detailsText = 'Secret Password = "tuna"';
  clickTimes = []

  onClick() {
    this.displayDetails = !this.displayDetails;
    const today = new Date();
    const timeStamp  = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.clickTimes.push(timeStamp);
  }
}
