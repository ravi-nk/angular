import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mueseum-whats-on',
  templateUrl: './mueseum-whats-on.component.html',
  styleUrls: ['./mueseum-whats-on.component.css']
})
export class MueseumWhatsOnComponent implements OnInit {
  myFunctions(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  
   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  
  
  }
  constructor() { }

  ngOnInit(): void {
  }

}
