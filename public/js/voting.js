var chartLabels = ["dairy-free", "nut-free", "gluten-free", "chocolate", "vanilla", "strawberry", "chocolate sauce", "sprinkles", "peanuts", "berries", "gummy bears"]
var votes = [1,4,6,8,9,0,5,4,3,7,2]


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
      updateChart(chartLabels, votes);
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


document.getElementById("submit-btn").addEventListener("click", votingHandler);