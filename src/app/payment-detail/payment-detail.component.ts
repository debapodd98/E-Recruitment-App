import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public message: string;
  
  public selectedFiles;
  url: any;

  preview(files) {
    if(files.length === 0)
    return;
    var mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

detectFiles(event)
{
  this.selectedFiles=event.target.files;
  if(event.target.files && event.target.files[0])
  {
    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }
}


  constructor() { }

  ngOnInit() {
  }

}
