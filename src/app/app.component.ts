import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dudisco';

  imgsList = ['../assets/im1.jpg', '../assets/im2.jpg', '../assets/im3.jpg'];

  constructor() { }

  setBackgroundImgs(num: number) {
    let styles = {
      'background-image': 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("' + this.imgsList[num + 1] + '") , url("' + this.imgsList[num + 2] + '")',
    };
    return styles;
  }
}
