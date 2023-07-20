function calculateMaxProfit(timeUnit) {
  let maxProfit = 0;
  let propertyMix = [];

  // Iterate through all possible combinations of properties
  for (let numTheatres = 0; numTheatres <= timeUnit / 5; numTheatres++) {
    for (let numPubs = 0; numPubs <= timeUnit / 4; numPubs++) {
      for (let numParks = 0; numParks <= timeUnit / 10; numParks++) {
        // Calculate the time spent and earnings for each combination
        const timeSpent = numTheatres * 5 + numPubs * 4 + numParks * 10;
        if (timeSpent <= timeUnit) {
          const earnings =
            (timeUnit - timeSpent) *
            (1500 * numTheatres + 1000 * numPubs + 3000 * numParks);

          // Update maxProfit and propertyMix if the current combination yields higher earnings
          if (earnings > maxProfit) {
            maxProfit = earnings;
            propertyMix = [];
            propertyMix.push(`T: ${numTheatres} P: ${numPubs} C: ${numParks}`);
          } else if (earnings === maxProfit) {
            propertyMix.push(`T: ${numTheatres} P: ${numPubs} C: ${numParks}`);
          }
        }
      }
    }
  }

  console.log(`Earnings: $${maxProfit}`);
  propertyMix.forEach((property) => {
    console.log(property);
  });
}
calculateMaxProfit(7);
