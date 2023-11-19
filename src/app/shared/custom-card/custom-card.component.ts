import { Component, Input, OnInit } from '@angular/core';
import { CustomCardType } from 'src/app/types/custom-card.type';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent implements OnInit {

  @Input() data!: CustomCardType;
  constructor() { }
  ngOnInit() { }

}
