import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gj-forum-item',
  templateUrl: './gj-forum-item.component.html',
  styleUrls: ['./gj-forum-item.component.css']
})
export class GjForumItemComponent implements OnInit {

  @Input() id?: number;
  @Input() image?: string;
  @Input() title?: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
