import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images = [
    {
      src: 'material/slider.jpg', 
      alt: 'Description of image 1',
      title: 'Title for Image 1',
      caption: 'Caption for Image 1'
    },
    {
      src: 'material/slider1.jpg',
      alt: 'Description of image 2',
      title: 'Title for Image 2',
      caption: 'Caption for Image 2'
    },
    {
      src: 'material/slider2.jpg',
      alt: 'Description of image 3',
      title: 'Title for Image 3',
      caption: 'Caption for Image 3'
    }
   
  ];
}

