import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { UserService } from 'src/user.service';
import { CardComponent } from '../Components/card/card.component';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})

export class DuelComponent implements OnInit {

  @ViewChildren(CardComponent)
  cards!: QueryList<CardComponent>;

  usernameOne: string = ""
  usernameTwo: string = ""
  totalPointsOne: number = 0
  totalPointsTwo: number = 0
  profile1: boolean = false;
  profile2: boolean = false;
  leftCard: boolean = false;
  rightCard: boolean = false;

  @Input()  userOne: string = ""
  @Input()  userImageSrcOne: string = ""
  @Input()  userBioOne: string = ""
  @Input()  userRealNameOne: string = ""
  @Input()  userLocationOne: string = ""
  @Input()  userTitlesOne: string[] = []
  @Input()  favLanguageOne: string = ""
  @Input()  totalStarsOne: string = ""
  @Input()  highestStarsOne: string = ""
  @Input()  publicReposOne: string = ""
  @Input()  perfectReposOne: string = ""
  @Input()  userFollowersOne: string = ""
  @Input()  userFollowingOne: string = ""
  @Input()  duelArgsOne: number[] = []

  @Input()  userTwo: string = ""
  @Input()  userImageSrcTwo: string = ""
  @Input()  userBioTwo: string = ""
  @Input()  userRealNameTwo: string = ""
  @Input()  userLocationTwo: string = ""
  @Input()  userTitlesTwo: string[] = []
  @Input()  favLanguageTwo: string = ""
  @Input()  totalStarsTwo: string = ""
  @Input()  highestStarsTwo: string = ""
  @Input()  publicReposTwo: string = ""
  @Input()  perfectReposTwo: string = ""
  @Input()  userFollowersTwo: string = ""
  @Input()  userFollowingTwo: string = ""
  @Input()  duelArgsTwo: number[] = []



  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  async onSubmit() {
    this.profile1 = false;
    this.profile2 = false;
    this.leftCard = false;
    this.rightCard = false;

    if (this.handleErrors()) {
      return;
    }

    let temp = document.getElementById("error");
    if (temp) {
      temp.textContent = ("");
    }

    try {
      this.duelArgsOne = [];
      this.duelArgsTwo = [];

      this.leftCard = true;
      this.rightCard = true;

      const data = [await this.userService.duelUsers(this.usernameOne, this.usernameTwo)];
      const users = data[0];

      if (Array.isArray(users)) {
        users.forEach((user, index) =>  {
          if (user && typeof user === 'object' && 'avatar_url' in user && 'bio' in user && 'username' in user && index === 0) {
            this.userOne = user['username'] as string;
            this.userImageSrcOne = user['avatar_url'] as string;
            this.userBioOne = user['bio'] as string;
            if ('name' in user) {
              this.userRealNameOne = user['name'] as string;
            }
            if ('location' in user) {
              this.userLocationOne = user['location'] as string;
            }
            if ('titles' in user) {
              this.userTitlesOne = user['titles'] as string[];
            }
            if ('favorite-language' in user) {
              this.favLanguageOne = user['favorite-language'] as string;
            }
            if ('total-stars' in user) {
              this.totalStarsOne = user['total-stars'] as string;
            }
            if ('highest-starred' in user) {
              this.highestStarsOne = user['highest-starred'] as string;
            }
            if ('public-repos' in user) {
              this.publicReposOne = user['public-repos'] as string;
            }
            if ('perfect-repos' in user) {
              this.perfectReposOne = user['perfect-repos'] as string;
            }
            if ('followers' in user) {
              this.userFollowersOne = user['followers'] as string;
            }
            if ('following' in user) {
              this.userFollowingOne = user['following'] as string;
            }
          }

          else if (user && typeof user === 'object' && 'avatar_url' in user && 'bio' in user && 'username' in user && index === 1) {
            this.userTwo = user['username'] as string;
            this.userImageSrcTwo = user['avatar_url'] as string;
            this.userBioTwo = user['bio'] as string;
            if ('name' in user && index) {
              this.userRealNameTwo = user['name'] as string;
            }
            if ('location' in user) {
              this.userLocationTwo = user['location'] as string;
            }
            if ('titles' in user) {
              this.userTitlesTwo = user['titles'] as string[];
            }
            if ('favorite-language' in user) {
              this.favLanguageTwo = user['favorite-language'] as string;
            }
            if ('total-stars' in user) {
              this.totalStarsTwo = user['total-stars'] as string;
            }
            if ('highest-starred' in user) {
              this.highestStarsTwo = user['highest-starred'] as string;
            }
            if ('public-repos' in user) {
              this.publicReposTwo = user['public-repos'] as string;
            }
            if ('perfect-repos' in user) {
              this.perfectReposTwo = user['perfect-repos'] as string;
            }
            if ('followers' in user) {
              this.userFollowersTwo = user['followers'] as string;
            }
            if ('following' in user) {
              this.userFollowingTwo = user['following'] as string;
            }
          }
        });
      }


      this.decideWinner()

      } catch (error) {
        let temp = document.getElementById("error");
        if (temp) {
          temp.textContent = ("ERROR: " + error);
        }
      }
  }

  decideWinner() {

    const diff1 = Number(this.totalStarsOne) - Number(this.totalStarsTwo);
    if (diff1 > 0){
      this.duelArgsOne.push(diff1 * 5);
      this.duelArgsTwo.push(0);
    } else {
      this.duelArgsOne.push(0);
      this.duelArgsTwo.push(diff1 * -5);
    }

    const diff2 = Number(this.highestStarsOne) - Number(this.highestStarsTwo);
    if (diff2 > 0){
      this.duelArgsOne.push(diff2 * 3);
      this.duelArgsTwo.push(0);
    } else {
      this.duelArgsOne.push(0);
      this.duelArgsTwo.push(diff2 * -3);
    }

    const diff3 = Number(this.publicReposOne) - Number(this.publicReposTwo);
    if (diff3 > 0){
      this.duelArgsOne.push(diff3 * 20);
      this.duelArgsTwo.push(0);
    } else {
      this.duelArgsOne.push(0);
      this.duelArgsTwo.push(diff3 * -20);
    }

    const diff4 = Number(this.perfectReposOne) - Number(this.perfectReposTwo);
    if (diff4 > 0){
      this.duelArgsOne.push(diff4 * 30);
      this.duelArgsTwo.push(0);
    } else {
      this.duelArgsOne.push(0);
      this.duelArgsTwo.push(diff4 * -30);
    }

    const diff5 = Number(this.userFollowersOne) - Number(this.userFollowersTwo);
    if (diff5 > 0){
      this.duelArgsOne.push(diff5 * 4);
      this.duelArgsTwo.push(0);
    } else {
      this.duelArgsOne.push(0);
      this.duelArgsTwo.push(diff5 * -4);
    }

    const diff6 = Number(this.userFollowingOne) - Number(this.userFollowingTwo);
    if (diff6 > 0){
      this.duelArgsOne.push(diff6);
      this.duelArgsTwo.push(0);
    } else {
      this.duelArgsOne.push(0);
      this.duelArgsTwo.push(diff6 * -1);
    }
    
    this.duelArgsOne.forEach( (element) => {
      this.totalPointsOne += element;
    })

    this.duelArgsTwo.forEach( (element) => {
      this.totalPointsTwo += element;
    })

    this.cards.forEach(cardInstance => cardInstance.changeColors());
    (this.totalPointsOne > this.totalPointsTwo)
      ? this.profile1 = true
      : this.profile2 = true
  }

  handleErrors(): boolean {
    let temp = document.getElementById("error");
    if (this.usernameOne === this.usernameTwo && temp !== null) {
      temp.textContent = "ERROR: You entered the same username twice. Try again.";
      return true;
    }
    if (temp !== null && (this.usernameOne === "" || this.usernameTwo === "")) {
      temp.textContent = "ERROR: You need to enter two usernames. Try again.";
      return true;
    }
    return false;
  }
}
