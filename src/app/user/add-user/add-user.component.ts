import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      nom: ['', Validators.required],
      password: ['', Validators.required],
      nci: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      profil: ['', Validators.required]
    });

  }

  onSubmit () {
    this.apiService.createUser (this.addForm.value)
      .subscribe (data => {
        this.router.navigate (['list-user']);
      });
  }


}