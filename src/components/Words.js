  // selecting a random word

let ENGLISH_WORDS = [
  "abaft",
  "abalone",
  "abamp",
  "abampere",
  "colonizer",
  "colonnade",
  "colonnaded",
  "colonoscope",
  "colonoscopy",
  "popularize",
  "popularizer",
  "popularly",
  "populate",
  "populated",
  "population",
  "upraise",
  "upraised",
  "upright",
  "uprightly",
  "uprightness"
  ];

  function randomWord() {
    return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
  }
  
  export { randomWord };