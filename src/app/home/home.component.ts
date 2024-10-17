import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
   hideEl(){
    setTimeout(()=>{
      let el = document.getElementsByClassName('size');
      console.log(el.item(0)?.classList.remove('show'));
    },500)
   }
  ngOnInit(): void {

}
}
