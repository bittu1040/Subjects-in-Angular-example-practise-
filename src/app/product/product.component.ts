import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(
    private commonService: CommonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.commonService.showItem.next(true);
  }

  ngOnDestroy() {
    this.commonService.showItem.next(false);
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
  }
}
