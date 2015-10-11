export default class User {
  static new(){
    return fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(response => new User(response.results[0].user))
  }

  constructor({username, email, picture} = {}){
    this.username = username;
    this.email = email;
    this.thumbnail = picture.thumbnail
  }
}
