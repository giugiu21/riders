import { RestaurantOwner } from './../../models/restaurant-owner.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
//import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { pipe, take } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //providers: [MessageService],
})
export class HomeComponent {

  loginError: string;
  

  constructor(
    public authService: AuthService,
    //private messageService: MessageService,
    private userService: UserService,
    private router: Router){}
 

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  }) 

  registrationForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.requiredTrue),
    password: new FormControl('', Validators.required),
  }) 

  onSubmitLogin(){
    const user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
    };
    this.authService.login(user.username, user.password).subscribe({
      next: (res) =>{
        if(res){
          this.authService.saveStorage(res);
          
          //this.messageService.add({severity: 'success', summary: 'Success!', detail: 'Il Login è andato a buon fine', life: 3000});

          if(res.rider_Id != 0){
            this.router.navigate(['rider-home']);
          }
        
          if(res.restaurantOwner_Id != 0){
            this.router.navigate(['owner-home']);
          }
        }
        else{
          this.loginError = "Email o password errati";
          //this.messageService.add({severity: 'error', summary: 'Errore!', detail: 'Il Login non è andato a buon fine', life: 3000});
        }
      },
      error: (err) =>{
        console.log(err);
        this.loginError = "Email o password errati";
       // this.messageService.add({severity: 'error', summary: 'Errore!', detail: 'Il Login non è andato a buon fine', life: 3000});
      }
  });
  
  
}  

onSubmitRegistration(){
}

}   