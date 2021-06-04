import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../servicos/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-regpassword',
  templateUrl: './regpassword.page.html',
  styleUrls: ['./regpassword.page.scss'],
})
export class RegpasswordPage implements OnInit {

  public email : string;
  public password : string;

  constructor(private auth : AuthService,private router : Router ) { }

  ngOnInit() {
  }

OnSubmitRegister(){
  this.auth.register(this.email, this.password).then( auth =>{
    this.router.navigate(['home'])
    console.log(this.auth)
  }).catch(err => console.log(err))
}

}
