import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isAuth = false;
  secondes: number;
  counterSubscription: Subscription;

  constructor(private appareilService : AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  } 
  
  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe((value: number) => {
      this.secondes = value;
    });

   
  }





}
