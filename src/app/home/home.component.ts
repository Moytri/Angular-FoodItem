import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../foodItem';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
	someFoodItems: FoodItem[];

	constructor() {
		if(sessionStorage.getItem("food")) {
			this.someFoodItems = JSON.parse(sessionStorage.getItem("food"));
		}
	}


}