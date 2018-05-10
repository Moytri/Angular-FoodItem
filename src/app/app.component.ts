import { Component } from '@angular/core';

import { FoodItem } from './foodItem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'FoodItem';
  myFoodItems: FoodItem[];

  FOODITEMS: FoodItem[] = [
    { id: 1, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
    { id: 2, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
    { id: 3, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
    { id: 4, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
  ];

  constructor() {
    if(sessionStorage.getItem("food") == null) {
      sessionStorage.setItem("food", JSON.stringify(this.FOODITEMS));
    }

    this.myFoodItems = JSON.parse(sessionStorage.getItem("food"));
    
    //console.log(this.FOODITEMS[0].name);
  }  


}




