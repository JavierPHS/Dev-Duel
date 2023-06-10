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

  // @Input()  username: string[] = []
  // @Input()  userImageSrc: string[] = []
  // @Input()  userBio: string[] = []
  // @Input()  userRealName: string[] = []
  // @Input()  userLocation: string[] = []
  // @Input()  userTitles: UserTitles = { userOne: [], userTwo: [] }
  // @Input()  favLanguage: string[] = []
  // @Input()  totalStars: string[] = []
  // @Input()  highestStars: string[] = []
  // @Input()  publicRepos: string[] = []
  // @Input()  perfectRepos: string[] = []
  // @Input()  userFollowers: string[] = []
  // @Input()  userFollowing: string[] = []

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

  // async onSubmit() {
  //   try {
  //     const data = [await this.userService.duelUsers(this.usernameOne, this.usernameTwo)];
  //     data.forEach((user, index) =>  {
  //       if (user && typeof user === 'object' && 'avatar_url' in user && 'bio' in user) {
  //         this.userImageSrc[index] = user['avatar_url'] as string;
  //         this.userBio[index] = user['bio'] as string;
  //         if ('name' in user) {
  //           this.userRealName[index] = user['name'] as string;
  //         }
  //         if ('location' in user) {
  //           this.userLocation[index] = user['location'] as string;
  //         }
  //         if ('titles' in user && index === 0) {
  //           this.userTitles.userOne.push(user['titles'] as string);
  //         }
  //         else if ('titles' in user && index === 1) {
  //           this.userTitles.userTwo.push(user['titles'] as string);
  //         }
  //         if ('favorite-language' in user) {
  //           this.favLanguage[index] = user['favorite-language'] as string;
  //         }
  //         if ('total-stars' in user) {
  //           this.totalStars[index] = user['total-stars'] as string;
  //         }
  //         if ('highest-starred' in user) {
  //           this.highestStars[index] = user['highest-starred'] as string;
  //         }
  //         if ('public-repos' in user) {
  //           this.publicRepos[index] = user['public-repos'] as string;
  //         }
  //         if ('perfect-repos' in user) {
  //           this.perfectRepos[index] = user['perfect-repos'] as string;
  //         }
  //         if ('followers' in user) {
  //           this.userFollowers[index] = user['followers'] as string;
  //         }
  //         if ('following' in user) {
  //           this.userFollowing[index] = user['following'] as string;
  //         }
  //       }
  //     });
      
  //     } catch (error) {
  //       console.log('Error when fetching assigning Image and Bio');
  //     }
  // }

  async onSubmit() {
    try {
      const data = [await this.userService.duelUsers(this.usernameOne, this.usernameTwo)];
      const users = data[0];

      if (Array.isArray(users)) {
        users.forEach((user, index) =>  {
          console.log(user);
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
        console.log('Error when fetching assigning Image and Bio');
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

    if (this.totalPointsOne > this.totalPointsTwo) {

    }
  }
}
