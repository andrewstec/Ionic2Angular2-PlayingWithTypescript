import {Page, Platform, Storage, SqlStorage} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {
	storage:Storage;
	platform:Platform;
  input_firstname: string;
  input_lastname: string;
  input_city: string;

  constructor(platform: Platform) {
  	this.platform = platform;
  	this.platform.ready().then(()=>{
  		this.storage = new Storage(SqlStorage);
  	});
  	}

  	//add begins here
  add() {
  	this.platform.ready().then(()=>{
  		this.storage.query("INSERT INTO people (firstname, lastname, city) VALUES('" + this.input_firstname + "' , '" + this.input_lastname + "' , '" + this.input_city + "')")
  		.then((data)=>{
  			console.log(JSON.stringify(data.res));
  			console.log("successfully added");
  		}, (error)=>{
  			console.log("There was an error: " + JSON.stringify(error.error));
  		});
  	});
  }
  //add ends here


}
