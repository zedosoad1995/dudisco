import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export const fadeAnimations =
trigger('imagesSlideshow', [
  state('void', style({opacity: 0})),
  transition(':enter', [
    animate(2000)
  ]),
  transition(':leave', [
    animate(2000)
  ]),
]);
