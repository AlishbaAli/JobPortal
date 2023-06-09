import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  banner ={
    heading : "Job Portal",
    subHeading: "Get your dream Job",
    btnText: "Apply Now"
  }
  constructor(private router: Router){

  }
  handleClick(){
    this.router.navigateByUrl('/jobs')

  }

}
