import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() passedUsername: string = ""
  @Input()  passedUserImageSrc: string = ""
  @Input() passedUserBio: string = ""
  @Input() passedUserRealName: string = ""
  @Input() passedUserLocation: string = ""
  @Input()  passedUserTitles: string[] = []
  @Input()  passedFavLanguage: string = ""
  @Input()  passedTotalStars: string = ""
  @Input()  passedHighestStars: string = ""
  @Input()  passedPublicRepos: string = ""
  @Input()  passedPerfectRepos: string = ""
  @Input()  passedUserFollowers: string = ""
  @Input()  passedUserFollowing: string = ""
  @Input()  passedDuelArgs: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  changeColors() {
    //console.log(this.passedDuelArgs)
    this.passedDuelArgs.forEach((value, index) => {
      console.log(index);
      switch (index) {
        case 0:
          let temp1 = document.getElementById('label-total-stars') as HTMLElement;
          (value > 0)
          ? temp1.style.setProperty('background', '#b3ffb9')
          : temp1.style.setProperty('background', '#ffb3b3')
          break;
        case 1:
          let temp2 = document.getElementById('label-highest-stars') as HTMLElement;
          (value > 0)
          ? temp2.style.setProperty('background', '#b3ffb9')
          : temp2.style.setProperty('background', '#ffb3b3')
          break;
        case 2:
          let temp3 = document.getElementById('label-public') as HTMLElement;
          (value > 0)
          ? temp3.style.setProperty('background', '#b3ffb9')
          : temp3.style.setProperty('background', '#ffb3b3')
          break;
        case 3:
          let temp4 = document.getElementById('label-perfect') as HTMLElement;
          (value > 0)
          ? temp4.style.setProperty('background', '#b3ffb9')
          : temp4.style.setProperty('background', '#ffb3b3')
          break;
        case 4:
          //console.log(value)
          let temp5 = document.getElementById('label-followers') as HTMLElement;
          (value > 0)
          ? temp5.style.setProperty('background', '#b3ffb9')
          : temp5.style.setProperty('background', '#ffb3b3')
          break;
        case 5:
          let temp6 = document.getElementById('label-following') as HTMLElement;
          (value > 0)
          ? temp6.style.setProperty('background', '#b3ffb9')
          : temp6.style.setProperty('background', '#ffb3b3')
          break;
        default:
          break;
      }
    })
  }

}
