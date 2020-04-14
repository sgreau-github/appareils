import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AppareilService } from "src/app/services/appareil.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {
  public defaultOnOff: string;

  constructor(private appareilService: AppareilService,
              private router: Router) { }

  ngOnInit() {
    this.defaultOnOff = 'éteint';
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }
}
