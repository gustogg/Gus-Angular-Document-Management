import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../core/services/github.service';
import { IRepository } from '../../../core/interfaces/i-repository';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'], // changed 'styleUrl' to 'styleUrls' (correct property name)
})
export class RepoListComponent implements OnInit {
  repositories: IRepository[] = [];
  username: string = 'gustogg';

  // Single constructor to inject both services
  constructor(
    private githubService: GithubService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.githubService
      .getRepos(this.username)
      .subscribe((resp: IRepository[]) => {
        this.repositories = resp;
      });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
