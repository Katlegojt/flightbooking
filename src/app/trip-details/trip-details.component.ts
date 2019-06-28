import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {
  SanFrancisco:string
  Bali: string
  indonesia : string

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {


    this.route.queryParams

      .subscribe(params => {
        console.log(params);

        this.SanFrancisco = params.SanFrancisco;
        this.Bali = params.Bali;
        this.indonesia = params.indonesia;
  
      });
    }
}
