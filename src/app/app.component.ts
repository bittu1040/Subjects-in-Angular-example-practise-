import { ChangeDetectorRef, Component, OnInit, VERSION } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonService } from './common.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
 
  showItem= false;
  userName= ""
  constructor(private commonService: CommonService, private cd:ChangeDetectorRef) {
    this.commonService.userName.subscribe((res)=>{
      this.userName= res;
    })
  }

  ngOnInit(){
    this.commonService.showItem.subscribe((res)=>{
      this.showItem= res;
      this.cd.detectChanges();
    })

  }
}
