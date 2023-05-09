import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-rider',
  templateUrl: './home-rider.component.html',
  styleUrls: ['./home-rider.component.scss']
})
export class HomeRiderComponent implements OnInit {

  rider: any;

  constructor(
    private userService: UserService,
    public authService: AuthService){}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('user'))!=null){
      const user = JSON.parse(localStorage.getItem('user'));
      this.onGetRider(user.rider_Id);
    }
  }

  onGetRider(id: any){
    this.userService.getRider(id).subscribe({
      next: (res)=>{
        this.rider = res;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
}
