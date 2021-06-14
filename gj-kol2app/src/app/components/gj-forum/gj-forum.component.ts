import { Component, OnInit } from '@angular/core';
import {GjDataService} from "../../services/gj-data.service";

@Component({
  selector: 'gj-forum',
  templateUrl: './gj-forum.component.html',
  styleUrls: ['./gj-forum.component.css']
})
export class GjForumComponent implements OnInit {

  public posts$: any;

  constructor(private gjDataService: GjDataService) {
  }
  ngOnInit(): void {
    this.gjDataService.getAllPosts().subscribe(response => {
      this.posts$ = response;
    });
  }

}
