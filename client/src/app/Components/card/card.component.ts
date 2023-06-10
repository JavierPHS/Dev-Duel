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

  constructor() { }

  ngOnInit(): void {
  }

}
