//Instantiate Github class and UI Class
const github = new Github;
const ui = new UI;

//Form Input Event Listener
const searchUser = document.querySelector('.form-control').addEventListener('keyup', (e) => {

  let userText = e.target.value;
    //If not empty string, make HTTP Call to Github
    if (userText !== ''){
      //Make HTTP call with github.js's getUser method and passing in typed input as user
      github.getUser(userText)
        .then(data => { //resolved data promise
          if (data.profileData.message === 'Not Found') {
            //if user isn't found, call ui.js's showAlert method and pass (message, className) to it
              ui.showAlert("User Not Found", 'alert alert-danger');
          } else {
            //pass data to  Profile & repos by calling ui methods and passing response data to them
              ui.showProfile(data.profileData);
              ui.showRepos(data.reposData);
          }
        })
    } else {
      // If user input is empty, clear profile
      ui.clearProfile();
    }

});