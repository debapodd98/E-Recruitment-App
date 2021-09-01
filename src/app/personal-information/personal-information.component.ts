import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  model:any = {}
  isDisabled = true;
  isDisabled2 = true;
  isDisabled3 = true;
 

  constructor() { }

  ngOnInit() {
  }

  func()
  {
   this.isDisabled = false;
  }
  func2()
  {
    this.isDisabled2 = false;
  }
  func3()
  {
    this.isDisabled3 = false;
  }
  onSubmit() {
    alert(JSON.stringify(this.model))
  }
}
