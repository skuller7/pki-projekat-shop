import { Injectable } from '@angular/core';
import { UserModel } from './model/user.model';
import bcrypt from "bcrypt";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private retriveAllUsers(): UserModel[] {
    let json = localStorage.getItem('users')
    if (json == null) {
      localStorage.setItem('users', JSON.stringify([]))
      json = localStorage.getItem('users')
    }

    return JSON.parse(json!)
  }

  public createUser(model: UserModel) {
    model.password = bcrypt.hashSync(model.password, 12)

    const arr = this.retriveAllUsers()
    if (arr.find(user=>user.email = model.email))
      throw new Error('EMAIL_EXISTS')

    arr.push(model)
    localStorage.setItem('users', JSON.stringify(arr))

  }

  public login(email: string, password: string) {
    const arr = this.retriveAllUsers()
    const usr = arr.find(user => user.email== email && bcrypt.compareSync(password, user.password))

    if (usr == undefined)
      throw new Error('AUTHENTICATION_FAILED')

    sessionStorage.setItem('active', usr.email)

  }

  public getCurrentUser() {
    if (!sessionStorage.getItem('active'))
      throw new Error('NO_ACTIVE_USER')

    const email = sessionStorage.getItem('active')
    const arr = this.retriveAllUsers()
    const usr = arr.find(user => user.email == email)
    
    if (usr == undefined)
      throw new Error('NO_ACTIVE_USER')
      
    return usr

  }

  public changePassword(password: string) {
    const active = this.getCurrentUser()
    active.password = bcrypt.hashSync(password, 12)
    const all = this.retriveAllUsers()
    
    // all.find(user=>user.email = usr.email)
    for (let user of all)
      if (user.email == active.email) {
        user = active
      }

    localStorage.setItem('users', JSON.stringify(all))

  }



  public logout() {
      const usr = this.getCurrentUser()
      sessionStorage.removeItem('active')
  }




  constructor() { }

}
