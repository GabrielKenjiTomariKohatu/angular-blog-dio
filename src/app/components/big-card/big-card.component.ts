import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  public photoCover: string = '';
  @Input()
  public cardTitle: string = '';
  @Input()
  public cardDescription: string = '';

  constructor() {}

  ngOnInit(): void {}
}
