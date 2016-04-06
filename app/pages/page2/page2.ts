import {Page, NavController, NavParams, Platform, Storage, SqlStorage} from 'ionic-angular';
import {Details} from "../details/details";

@Page({
  templateUrl: 'build/pages/page2/page2.html',
})
export class Page2 {
	storage: Storage;
	platform: Platform;
	people: string[];
	personDetails: Array<{firstname: string, lastname: string, city: string, id: number}>;

  constructor(platform: Platform, private nav: NavController, navParams: NavParams) {
  	this.platform = platform;
  	this.people = [];
    this.personDetails = [];
  	this.storage = new Storage(SqlStorage);
  	this.platform.ready().then(()=>{
  		this.list();
  	})
  	}

  	//list people begins here
  	list() {
  		this.platform.ready().then(()=>{
  			this.storage.query("SELECT * FROM people")
  			.then((data)=>{
  				this.people = [];
  				console.log(JSON.stringify(data.res));
  				console.log("Length of the data query: " + data.res.rows.length);
  				for (var i = 0; i < data.res.rows.length; i++ ) {
  					this.people.push(data.res.rows.item(i).lastname + ", " + data.res.rows.item(i).firstname);
            this.personDetails.push({
            firstname: data.res.rows.item(i).firstname,
            lastname: data.res.rows.item(i).lastname, 
            city: data.res.rows.item(i).city,
            id: i
            });
            console.log(JSON.stringify(this.personDetails));
  				}
  				}, (error)=>{
  					console.log(JSON.stringify(error.error));
  				}
  			);
  		})
  	}
  	//list people ends here

  	personTapped(person){
  		this.nav.push(Details, {
  			personDetails: person
 		 });
  	}


}
