import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-qualification',
  templateUrl: './professional-qualification.component.html',
  styleUrls: ['./professional-qualification.component.css']
})
export class ProfessionalQualificationComponent implements OnInit {
  isDisabled4 = true;
  isDisabled5 = false;
  isDisabled6 = false;
  isDisabled7 = false;
  isDisabled8 = false;
  isDisabled9 = true;

  constructor() { }

  ngOnInit() {
  }

  func4()
  {
    this.isDisabled4 = false;
  }
  func5()
  {
    this.isDisabled5 = true;
    this.isDisabled6 = false;
  }
  func6()
  {
    this.isDisabled6 = true;
    this.isDisabled5 = false;
  }
  func7()
  {
    this.isDisabled7 = true;
    this.isDisabled8 = false;
  }
  func8()
  {
    this.isDisabled8 = true;
    this.isDisabled7 = false;
  }
  func9()
  {
    this.isDisabled4 = true;
  }
  function1()
  {
    this.isDisabled9 = false;
  }
}
