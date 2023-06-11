import { Component, OnInit, Input, ElementRef } from '@angular/core';

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

  totalStarPoints: string = "";
  highestStarPoints: string = "";
  publicPoints: string = "";
  perfectPoints: string = "";
  followerPoints: string = "";
  followingPoints: string = "";

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  changeColors() {
    this.totalStarPoints = '';
    this.highestStarPoints = '';
    this.publicPoints = '';
    this.perfectPoints = '';
    this.followerPoints = '';
    this.followingPoints = '';
    
    this.passedDuelArgs.forEach((value, index) => {
      switch (index) {
        case 0:
          this.setLabelBackground('label-total-stars', value);
          if (value > 0) {
            this.totalStarPoints = ("+"+value);
          }
          break;
        case 1:
          this.setLabelBackground('label-highest-stars', value);
          if (value > 0) {
            this.highestStarPoints = ("+"+value);
          }
          break;
        case 2:
          this.setLabelBackground('label-public', value);
          if (value > 0) {
            this.publicPoints = ("+"+value);
          }
          break;
        case 3:
          this.setLabelBackground('label-perfect', value);
          if (value > 0) {
            this.perfectPoints = ("+"+value);
          }
          break;
        case 4:
          this.setLabelBackground('label-followers', value);
          if (value > 0) {
            this.followerPoints = ("+"+value);
          }
          break;
        case 5:
          this.setLabelBackground('label-following', value);
          if (value > 0) {
            this.followingPoints = ("+"+value);
          }
          break;
        default:
          break;
      }
    });
  }

  private setLabelBackground(labelId: string, value: number) {
    const labelElement = this.elementRef.nativeElement.querySelector(`#${labelId}`);
    if (labelElement) {
      labelElement.style.setProperty('background', value > 0 ? '#b3ffb9' : '#ffb3b3');
    }
  }

}
