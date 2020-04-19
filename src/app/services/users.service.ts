
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  UsersService{
  get(user: {
  username: any; password: any; nom: any; email: any; //localhost:8000/api/bloquer/'+id;
    nci: any; telephone: any; profil: any;
  }) {
    throw new Error("Method not implemented.");
  }

  private _userUrl = "http://localhost:8080";

  constructor(private http : HttpClient) { }
  Headers = {headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) };

  getUsers() {

    return this.http.get<any>(this._userUrl+"/list/users",this.Headers);
  }

  postFile(
    username: string, 
    Nom: string,
    Email: string,
    Profil: string,
    Telephone: string,
    Nci: string,
    password: string
    ) {
    const endpoint = 'http://localhost:8000/api/register';
    const formData: FormData = new FormData();

    formData.append('username', username);
    formData.append('Nom', Nom);
    formData.append('Email', Email);
    formData.append('Profil', Profil);
    formData.append('Telephone', Telephone);
    formData.append('Nci', Nci);
    formData.append('password', password);
    return this.http.post(endpoint, formData,this.Headers);
  }
  monitor(id){

    const   _bloquerUser= 'http://localhost:8000/api/bloquer/'+id;
  
      return this.http.get(_bloquerUser) 
    }
}
