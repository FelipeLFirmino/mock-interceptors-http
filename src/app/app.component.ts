import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from './services/user.service';
import { Auth } from './models/auth.model';
import { MeService} from './services/me.service';
import { OrganizationModel } from './models/organization.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mock-interceptor-demo';

  user:Auth = {name: "", email:""};
  organizations!: OrganizationModel[];
  
  userService = inject(UserService);
  meService = inject(MeService)

  ngOnInit() {
    this.meService.checkUser().subscribe(us => this.user = us);
    this.meService.getUserOrganizations().subscribe((org) => this.organizations = org)
  }
}
