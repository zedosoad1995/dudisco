import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { fadeAnimations } from './fade.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimations]
})


export class AppComponent {
  title = 'dudisco';

  imgsList = ['../assets/im1.jpg', '../assets/im2.jpg', '../assets/im3.jpg'];
  displayImgsList = ['../assets/im1.jpg'];
  index = 0;
  sub: any;
  something = true;

  constructor() {
    this.displayImgsList = [this.imgsList[this.index]];
  }

  ngOnInit() {
    const timer = interval(10000);
    this.sub = timer.subscribe(() => {
      this.index = (this.index + 1)%this.imgsList.length;
      this.displayImgsList = [this.imgsList[this.index]];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
