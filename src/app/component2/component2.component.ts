import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  userName: string;
  constructor(private commonservice: CommonService) {
    this.commonservice.userName.subscribe((res)=>{
      this.userName= res;
    })
   }

  ngOnInit() {
  }

  onSubmit(uname){
    console.log(uname.value)
    this.commonservice.userName.next(uname.value)
  }

}