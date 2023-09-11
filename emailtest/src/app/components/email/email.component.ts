import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailbackendService } from 'src/app/service/emailbackend.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
data={
  to:"",
  subject:"",
  message:""
}

flag=false;
constructor(private email:EmailbackendService,private snack:MatSnackBar){

}
doSubmitForm()
{
  console.log("try to submit form");
  console.log("DATA",this.data);

if(this.data.to=="" || this.data.to=="" || this.data.message=="")
{
  this.snack.open("Fields cannot be empty","OK");
  return;
}
this.flag=true;
  this.email.sendEmail(this.data).subscribe(
  response=> 
  {
    this.flag=false;
    console.log(response);
  },
  error=>{
    this.flag=false;
    console.log(error);
  }
  ); 
}

}
