import {Component, Input} from '@angular/core';
import {Tag} from "../shared/tags/tag";
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  @Input()
  foodPageTags?:string[];

  @Input()
  JustifyContent:string = 'center';
  tags?: Tag[];


  constructor(private foodService: FoodService) {
  }

  ngOnInit():void {
    if (!this.foodPageTags){
      this.tags = this.foodService.getAllTags();
    }
  }
}
