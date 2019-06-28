import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  SanFrancisco: string = "sanfransco"
  Bali : string = "bali"
  indonesia : string = "Indonesia"
  

  constructor(private router: Router) { }


  ngOnInit() {
  }
  

  details() {

    this.router.navigate(['/menu/tripdetails'], {
      queryParams: {
        SanFrancisco: this.SanFrancisco
      }
    })



  }
  Indonesia(){


    this.router.navigate(['/menu/trip2'], {
      queryParams: {
        indonesia: this.indonesia
      }
    })
  }
}
