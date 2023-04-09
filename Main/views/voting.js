const express = require('express');
const router = express.Router();

window.onload = function() {
    var selected = {
    item1: 0,
    item2: 0,
    item3: 0
  };
  
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    selected = document.querySelector('input[name="vote"]:checked');
    if (selected) {
      var itemId = selected.value;
    //   Should we be adding a vote here or in the get/post request below
      votes[itemId]++;
    //   how can we pass a function an object/array?
      updateVoteCount(itemId);
    }
    console.log(`${itemId} updated`);
  });
  
  function updateVoteCount(itemId) {
    var countElem = document.getElementById(itemId + '-votes');
    countElem.textContent = itemId + ': ' + votes[itemId] + ' votes';
  }
  
//   bundle all the results as a javascript object through to the backend
// look into jquery, apply ids to each group of checkboxes
    // use jquery to target selected buttons
// 


// Likely will have to create a model for each question..dairy free..chocolate
// Make each group a diffe
/* 
## Front-end HTML
<form id="icecream-party">
<select id="dairy-free">
<label>Dairy free</label>
<option>Yes</option>
<option>No</option>
<option>i don't know</option>
<option>i like to be gassy</option>
</select>
<select id="peanut-allergy">
<label>Peanut free</label>
<option>Yes</option>
<option>No</option>
<option>i don't know</option>
</select>
</form>
*/

/*
## Front-end JS
function gatherResults() {
var form = {};
 $(#icecream-party input).each(function(){
    // gather the id of the
    var label = $(this).id;
    // and the value of the selected option
    var value = $(this:selected).val();

    form[label] = value; //form.peanut-allergy = Yes;
 })

 pushToAPI(form);
}

*/

/*

EVENTLISTENER.CLICK(gatherResults);

function pushToAPI(formData) {
    fetch(url, function() {SEND THE DATA})
}
*/
  // Handle POST requests to /vote
router.post('/vote', (req, res) => {
    // Get the selected item ID from the request body
    const itemId = req.body.vote;
    
    // Increment the vote count for the selected item
    votes[itemId]++;
    
    // Send the updated vote data back to the client
    res.json(votes);
  });
  
  // Handle GET requests to /votes.json
  router.get('/votes.json', (req, res) => {
    // Send the current vote data to the client
    // Need to make a model @casey

    res.json(votes);
  });
  
  // Export the router object
  module.exports = router;
}









// document.addEventListener("click", function(event) {
//     // Regardless of the below, we handle the event, so "consume" it
//     event.stopPropagation();
//     event.preventDefault();

//     // Get the anchor element
//     var voteLink = event.target.closest("a.vote");
//     if (!voteLink) {
//         // Didn't find one, bail
//         return;
//     }

//     // See if the vote has already been done or is in progress
//     if (voteLink.classList.contains("done") || voteLink.classList.contains("inprogress")) {
//         // Ignore the click, possibly tell the user why
//         return;
//     }

//     // Get the vote type
//     var voteType = voteLink.classList.contains("up") ? "up" : "down";

//     // Get the item we"re voting on
//     var item = voteLink.closest(".article");

//     // Get its ID
//     var itemId = item.getAttribute("data-itemid");

//     // If we didn"t get an ID...
//     if (!itemId) {
//         // ...report error
//         return;
//     }

//     // Mark "in progress" and initiate the vote; action continues
//     // in our callbacks below
//     voteLink.classList.add("inprogress");
//     var body = new FormData();
//     body.append("itemId", itemId);
//     body.append("voteType", voteType);
//     fetch("savevote", {
//         method: "POST",
//         body:   body
//     })
//     .then(function(res) {
//         if (!res.ok) {
//             throw new Error("HTTP error " + res.status);
//         }
//         return res.text(); // or `res.json()` if you return JSON
//     })
//     .then(function(data) {
//         if (data === "ok") { // Or whatever
//             voteLink.classList.add("done");
//         } else {
//             // Report an error to the user, the server couldn"t record the vote
//         }
//     })
//     .catch(function(error) {
//         // Ajax failed, handle/report problem
//     })
//     .finally(function() {
//         // Not in progress anymore
//         voteLink.classList.remove("inprogress");
//     });
// });