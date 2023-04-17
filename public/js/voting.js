var chartLabels = ["dairy-free", "nut-free", "gluten-free", "chocolate", "vanilla", "strawberry", "chocolate sauce", "sprinkles", "peanuts", "berries", "gummy bears"]
var votes = [1,4,6,8,9,0,5,4,3,7,2]

updateChart(chartLabels, votes);

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

      // add get request ?


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
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145",
          "6a329f",
          "#20124d",
          "#8fce00",
          "#f1c232",
          "#ffffff",
          "#000000"
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