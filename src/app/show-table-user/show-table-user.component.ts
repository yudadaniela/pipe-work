import { Component, OnInit } from '@angular/core';
import { ServiceService } from "./service/service.service";

@Component({
  selector: 'app-show-table-user',
  templateUrl: './show-table-user.component.html',
  styleUrls: ['./show-table-user.component.css']
})
export class ShowTableUserComponent implements OnInit {
  data:Array<any>=[]
  red:string='red'
  blue:string='blue'
  constructor(
     private showService:ServiceService
  ){}
  ngOnInit(): void {
    this.data=this.showService.getUser()
    console.log(this.data);
    
  }
 

}
