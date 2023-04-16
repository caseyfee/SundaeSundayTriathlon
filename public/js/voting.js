
// import { flavors } from './seeds/flavors.js';
// import { votes } from './seeds/votes.js';


// const labels = require('seeds/flavors.js');
// const votes = require('seeds/votes.js');
// document.getElementById("submit-btn").addEventListener("click", votingHandler);

// // console.log(labels);

// const votingHandler = async (event) => {
//   event.preventDefault();

//   const flavorId = document.querySelector({id}).value;
//   const userId = document.querySelector('#user-input').value;

//   if (flavorId && userId) {
//     try {
//       const response = await fetch('/api/votes', {
//         method: 'POST',
//         body: JSON.stringify({ flavorId, userId }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const newVote = await response.json();
//       console.log('New vote:', newVote);
//       updateChart(labels, votes);
//     } catch (err) {
//       console.error(err);
//       alert('Failed to submit vote.');
//     }
//   }
// };

// import { createChart } from 'https://cdn.jsdelivr.net/npm/chart.js@3.5.0/dist/chart.esm.min.js';
import { flavors } from './flavors.js';
import { votes } from './votes.js';

// const labels = require('seeds/flavors.js');
// const votes = require('seeds/votes.js');
// document.getElementById("submit-btn").addEventListener("click", votingHandler);


document.getElementById("submit-btn").addEventListener("click", votingHandler);

const votingHandler = async (event) => {
  event.preventDefault();

  const flavorId = document.querySelector(".form-check-input").value;
  const userId = document.querySelector('#user-input').value;

  if (flavorId && userId) {
    try {
      const response = await fetch('/api/votes', {
        method: 'POST',
        body: JSON.stringify({ flavorId, userId }),
        headers: { 'Content-Type': 'application/json' },
      });
      const newVote = await response.json();
      console.log('New vote:', newVote);
      updateChart(flavors, votes);
    } catch (err) {
      console.error(err);
      alert('Failed to submit vote.');
    }
  }
};

function updateChart (labels, votes){
  new Chart("flavor-votes", {
    type: "doughnut",
    data: {
      // 
      labels: labels,
      datasets: [{
        data: votes,
      }],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
    },
    options: {
      title: {
        display: true,
        text: "Flavour Votes"
      }
    }
  });
}

