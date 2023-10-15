/*Think of something you could store in a array. For example, you could make a list of mountains,
 rivers, countries, cities, languages, or anything else you’d like.
 Write a program that creates a list containing these items. */

 const Countries: string[] = [
    "France",
    "USA",
    "Spain",
    "China",
    "Italy",
    "UK",
    "Mexico",
    "Germany",
    "Thailand",
    "Turkey",
  ];
  
  console.log("Top 10 most visited countries in the world:");
  Countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country}`);
  });
  