import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }  from '@angular/router';
import { FoodItem } from '../foodItem';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent implements OnInit {

  id: number;
  details: FoodItem;


  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
      	this.route.params.forEach((params: Params) => {
        let localID = params['id'];
        this.id = localID;

    		let localDeatils = this.getDetails(this.id);
        	this.details = localDeatils;
        });
  }

  	getDetails(id: number) { 

  		var someFoodItems;

   		if(sessionStorage.getItem("food")) {
			someFoodItems = JSON.parse(sessionStorage.getItem("food"));
		}

  		for (var i = 0; i < someFoodItems.length; i++) {  		
        	if (someFoodItems[i].id == id) { 
           		 return someFoodItems[i];
           	} 
        }
    }

}
