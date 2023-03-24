import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  userName: string= ""
  constructor(private commonService: CommonService) {
    this.commonService.userName.subscribe((res)=>{
      this.userName= res
    })
   }
  ngOnInit() {
  }


  onClick(uname){
    console.log(uname.value)
    this.commonService.userName.next(uname.value);
  }
}