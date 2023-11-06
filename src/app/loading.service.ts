import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSub = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSub.asObservable();


  hide(): void {
    this.loadingSub.next(false);
  }
  
  show(): void {
    this.loadingSub.next(true);
  }

}
