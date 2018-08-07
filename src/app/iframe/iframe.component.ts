import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {

  public sourceUrl: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.router);
    console.log(this.activatedRoute);
    this.activatedRoute.data.subscribe(
      data => {
        this.sourceUrl = data['url'];
      }
    );
  }

}
