import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  roles;

  constructor(private auth:AuthentificationService) { }

  ngOnInit() {
  }
  onRoles(){
    this.auth.getRoles().subscribe(
      data=>{this.roles=data["hydra:member"]
      console.log(data["hydra:member"]
        )}
    )

  }

}
