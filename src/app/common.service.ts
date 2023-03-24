import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {

  constructor() { }
  showItem= new Subject<boolean>();
  userName= new Subject<string>();
}