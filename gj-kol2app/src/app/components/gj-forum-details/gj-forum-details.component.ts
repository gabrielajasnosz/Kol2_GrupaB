import {Component, OnInit} from '@angular/core';
import {GjDataService} from "../../services/gj-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'gj-forum-details',
  templateUrl: './gj-forum-details.component.html',
  styleUrls: ['./gj-forum-details.component.css']
})
export class GjForumDetailsComponent implements OnInit {

  public id?: string;
  public image?: string;
  public text?: string;
  public title?: string;

  constructor(private gjDataService: GjDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string | null;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });

    // @ts-ignore
    this.gjDataService.getOnePost(id).subscribe(res => {
      // @ts-ignore
      this.image = res['image'];
      // @ts-ignore
      this.text = res['text'];
      // @ts-ignore
      this.title = res['title'];
    });

  }

}
