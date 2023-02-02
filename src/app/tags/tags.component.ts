import { Component } from '@angular/core';
import {Tag} from "../shared/tags/tag";
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags: Tag[] = []


  constructor(private foodService: FoodService) {
  }

  ngOnInit():void {
    this.tags = this.foodService.getAllTags();
  }
}
