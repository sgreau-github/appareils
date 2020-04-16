import {User} from '../models/user.model';
import { Subject } from 'rxjs';
import { timingSafeEqual } from 'crypto';

export class UserService {
  private users: User[] = [
    {
      firstName: 'toto',
      lastname: 'dffdfd',
      drinkPreference: 'coca',
      email: 'toto@gmail.com',
      hobbies: ['coder', 'jeux']
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

}
