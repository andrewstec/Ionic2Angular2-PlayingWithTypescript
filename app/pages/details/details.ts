import {Page, Platform, NavController, NavParams} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/details/details.html'
})
export class Details {
	personDetails: string[];

  constructor(private nav: NavController, navParams: NavParams) {
  	this.personDetails = navParams.get('personDetails');
  }
}
