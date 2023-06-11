import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  card: boolean = false;

  @Input()  user: string = ""
  @Input()  userImageSrc: string = ""
  @Input()  userBio: string = ""
  @Input()  userRealName: string = ""
  @Input()  userLocation: string = ""
  @Input()  userTitles: string[] = []
  @Input()  favLanguage: string = ""
  @Input()  totalStars: string = ""
  @Input()  highestStars: string = ""
  @Input()  publicRepos: string = ""
  @Input()  perfectRepos: string = ""
  @Input()  userFollowers: string = ""
  @Input()  userFollowing: string = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {

    if (this.handleErrors()) {
      return;
    }

    let temp = document.getElementById("error");
    if (temp) {
      temp.textContent = ("");
    }

    try {
    const data = await this.userService.inspectUser(this.username);

    if (data && typeof data === 'object' && 'avatar_url' in data && 'bio' in data && 'username' in data) {
      this.user = data['username'] as string;
      this.userImageSrc = data['avatar_url'] as string;
      this.userBio = data['bio'] as string;
      if ('name' in data) {
        this.userRealName = data['name'] as string;
      }
      if ('location' in data) {
        this.userLocation = data['location'] as string;
      }
      if ('titles' in data) {
        this.userTitles = data['titles'] as string[];
      }
      if ('favorite-language' in data) {
        this.favLanguage = data['favorite-language'] as string;
      }
      if ('total-stars' in data) {
        this.totalStars = data['total-stars'] as string;
      }
      if ('highest-starred' in data) {
        this.highestStars = data['highest-starred'] as string;
      }
      if ('public-repos' in data) {
        this.publicRepos = data['public-repos'] as string;
      }
      if ('perfect-repos' in data) {
        this.perfectRepos = data['perfect-repos'] as string;
      }
      if ('followers' in data) {
        this.userFollowers = data['followers'] as string;
      }
      if ('following' in data) {
        this.userFollowing = data['following'] as string;
      }
      
      this.card = true;
    }
    
    } catch (error) {
      let temp = document.getElementById("error");
      if (temp) {
        temp.textContent = ("ERROR: "+error);
      }
    }
  }

  handleErrors(): boolean {
    let temp = document.getElementById("error");
    if (temp !== null && this.username === "") {
      temp.textContent = "ERROR: You need to enter two usernames. Try again.";
      return true;
    }
    return false;
  }
}
