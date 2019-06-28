import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip2',
  templateUrl: './trip2.component.html',
  styleUrls: ['./trip2.component.scss']
})
export class Trip2Component implements OnInit {

  indonesia : string

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {


    this.route.queryParams

      .subscribe(params => {
        console.log(params);

        
        this.indonesia = params.indonesia;
  
      });
    }

}
