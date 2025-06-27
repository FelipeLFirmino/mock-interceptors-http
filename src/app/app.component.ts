import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mock-interceptor-demo';

  users: { id: number; name: string; }[] = [];

  
  userService = inject(UserService);


  ngOnInit() {
    this.userService.getUsers().subscribe(us => this.users = us);
  }
}
