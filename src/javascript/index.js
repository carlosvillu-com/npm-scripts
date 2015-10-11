import "babel/polyfill";
import User from './user';

(async function printUser(){
  const user = await User.new();
  document.querySelector('#username').innerHTML = user.username;
  document.querySelector('#email').innerHTML = user.email;
  document.querySelector('#thumbnail').src = user.thumbnail;
}());
