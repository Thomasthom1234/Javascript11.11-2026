let username = "Ole";
let usage = 19;
let userIsLoggedIn = false;
let userIsBlocked = false;
let gotoPage = "";

if (username !== "" && usage >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  gotoPage = "/home";
  console.log("Velkommen," + username);
} else {
  console.log("Feil, Du kan ikke logge inn");
}
