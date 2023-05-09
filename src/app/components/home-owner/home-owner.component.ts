import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-owner',
  templateUrl: './home-owner.component.html',
  styleUrls: ['./home-owner.component.scss']
})
export class HomeOwnerComponent implements OnInit{
 
  owner: any;
  
  constructor(
    private userService: UserService,
    public authService: AuthService){}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user')) != null){
      const user = JSON.parse(localStorage.getItem('user'));
      this.onGetOwner(user.restaurantOwner_Id);
    } 
  }


  onGetOwner(id: any){
    this.userService.getOwner(id).subscribe({
      next: (res)=>{
        this.owner = res;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

}
