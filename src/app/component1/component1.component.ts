import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor( private commonService: CommonService) {
    this.commonService.userName.subscribe((res)=>{
      this.userName= res;
    })
   }
userName: string;
  ngOnInit() {
  }

  onClick(uname){
console.log(uname.value)
this.commonService.userName.next(uname.value)
  }

}