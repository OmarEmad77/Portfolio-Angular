import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  link:string[]=["https://www.catchpoint.com/blog/optimizing-website-performance-harnessing-the-power-of-image-lazy-loading","https://paulserban.eu/blog/post/javascript-es6-features-every-developer-should-know/","https://www.simplilearn.com/tutorials/css-tutorial/css-grid-vs-flexbox"]
goToLinkOne() {
  window.open(this.link[0]);
}
goToLinkTwo() {
  window.open(this.link[1]);
}
goToLinkThree() {
  window.open(this.link[2]);
}
}
