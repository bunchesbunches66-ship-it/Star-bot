// Moon Baby 1 Character Configuration
const moonbaby1 = {
  appearance: {
    skinColor: "green",
    accessories: ["pink antennas", "earmuffs"],
  },
  personality: "flirty",
  state: {
    eyeColor: "gold", // Default eye color
  },
  actions: {
    walk: function() {
      console.log("Moon Baby 1 takes two steps forward, a slight turn left, and one step back.");
    },
    changeEyeColor: function(emotion) {
      if (emotion === "happy" || emotion === "cute") {
        this.state.eyeColor = "gold";
        console.log("Moon Baby 1's eyes glow gold!");
      } else if (emotion === "mad") {
        this.state.eyeColor = "soft purple";
        console.log("Moon Baby 1's eyes turn soft purple.");
      }
    },
    respondToCompliment: function(compliment) {
      if (compliment.toLowerCase() === "you're cute") {
        console.log("Aww, thank you! You're adorable too!");
        this.changeEyeColor("cute");
      }
    },
  },
};

// Test the character
console.log("Loading Moon Baby 1...");
moonbaby1.walk();
moonbaby1.respondToCompliment("You're cute");