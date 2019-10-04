/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
.get("https://api.github.com/users/chelsabeth/followers")
.then(response => {
  console.log(response.data)
  parseUser('https://api.github.com/users/chelsabeth') // Makes a card for me :)
  response.data.forEach(element => { // Loops through my followers list
    parseUser(element['url']); // Passes in each of the urls from my followers list
  });
});

function parseUser(user) {
  axios
  .get(`${user}`) // Pass In the users URL for their GitHub Profile
  .then(response => {
    const cards = document.querySelector(".cards"); // cards is now equal to cards div in HTML
    console.log("Github User Data", response.data);
    cards.appendChild(userCard(response.data)); // Makes the card that is returned from the userCard function a child of the cards div in HTML
  })
  .catch(error => {
    console.log("Sorry, an error has occured", error);
  });
}  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['BCtopics'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function userCard(data) {
  console.log("data:", data)
  const 
  newCard = document.createElement("div"),
  cardImg = document.createElement("img"),
  cardInfo = document.createElement("div"),
  name = document.createElement("h3"),
  username = document.createElement("p"),
  location = document.createElement("p"),
  profile = document.createElement("p"),
  profileLink = document.createElement("a"),
  followers = document.createElement("p"),
  following = document.createElement("p"),
  bio = document.createElement("p")

  // Setup the structure
  newCard.appendChild(cardImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // Setup class names
  newCard.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  // Assign elements to github data
  cardImg.src = `${data.avatar_url}`;
  name.textContent = `Name: ${data.name}`;
  username.textContent = `Username: ${data.login}`;
  location.textContent = `Location: ${data.location}`;
  profileLink.textContent = `Link to Profile: ${data.url}`;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = `Bio: ${data.bio}`;

  return newCard;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
