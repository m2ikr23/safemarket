
import { Component,OnInit,Input } from '@angular/core';


/**
 * Generated class for the CustomHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent implements OnInit {

 

 @Input()
  titulo:string=""
  constructor() {
  
 
  }
  ngOnInit() {
 
  }


}
