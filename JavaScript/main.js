const strategies = [
    "Play the entire match with a 'no jumping' rule; keep your wheels on the ground at all times.",
    "Adopt the 'mirror mode' challenge - use the reverse camera view for the entire game.",
    "Play 'tag' - one player is 'it' and must chase and bump others to tag them.",
    "Rotate positions like clock hands: each player advances one position clockwise after every goal.",
    "Form a 'snake' by lining up your cars and slithering across the field while staying connected.",
    "Embrace the 'lobster crawl' - move sideways with your car to confuse opponents.",
    "Implement 'the Pac-Man' strategy; one player is the 'Pac-Man' and must 'eat' the ball by touching it.",
    "Role-play as 'human billiards' - take turns caroming off each other to hit the ball into the goal.",
    "Conduct a 'chaos dribbling' challenge; each player must dribble the ball without leaving a specified area of the field.",
    "Try the 'traffic jam' tactic - deliberately block each other's paths to create chaos for opponents.",
    "Coordinate a synchronized 'ballet' routine with your teammates; perform spins, jumps, and flips in unison.",
    "Institute a 'free-for-all' kickoff; everyone rushes towards the ball without designated positions.",
    "Create a 'carousel' by driving in a circular formation and taking shots as the 'carousel' rotates.",
    "Challenge opponents to a 'demo derby' - actively seek out demolitions of enemy cars.",
    "Play a 'hot potato' match - pass the ball quickly and do not hold it for more than one second.",
    "Try the 'slinky' strategy - zigzag across the field like a slinky toy as you advance.",
    "Execute a 'standstill' kickoff; no one can move until the ball has been hit by an opponent.",
    "Engage in 'ping pong' - bounce the ball back and forth between your cars as you approach the goal.",
    "Attempt 'curveball' shots by hitting the ball with the corner of your car for unpredictable angles.",
    "Play 'keep-away' from your own goal by passing the ball back and forth in defense.",
    "Enforce a 'demo only' rule - focus solely on demolishing opponents throughout the match.",
    "Emulate synchronized swimming - perform flips and spins in unison with your teammates.",
    "Play 'catch' by passing the ball between teammates as if it were a game of catch.",
    "Conduct a 'drunken sailor' match - erratic driving with lots of wobbling.",
    "Designate a 'play caller' who makes all decisions and calls the shots for the team.",
    "Play a 'tag team' game; teammates can only act when they are 'tagged in' by another teammate.",
    "Utilize a 'musical cars' strategy - switch cars with teammates whenever the ball changes possession.",
    "Implement a 'no-touch' rule; teammates can't touch the ball, only opponents are allowed to.",
    "Choose 'wacky racers' themed cars and role-play as characters from the show.",
    "Play 'kickball' - attempt to score goals by jumping and hitting the ball with your cars like soccer.",
    "Conduct 'reverse psychology'; attempt to score own goals instead of your opponents' goals.",
    "Play a 'freeze tag' match - opponents can 'freeze' your car by bumping into it.",
    "Role-play as 'rocket cops' - enforce imaginary speed limits and give 'tickets' to speedsters.",
    "Embrace the 'hot seat' challenge - the player in the hot seat is the only one allowed to touch the ball.",
    "Try the 'acrobatic circus' strategy; continuously flip and spin your car throughout the game.",
    "Coordinate 'swap shots' - let teammates take shots on each other's goals to confuse opponents.",
    "Play 'marble madness' by dribbling the ball on your car like you're trying to balance a marble.",
    "Use the 'Dodgeball' strategy - try to hit opponents with the ball as if playing dodgeball.",
    "Engage in a 'zombie' match - once 'infected' by an opponent, join their side and chase down survivors.",
    "Conduct a 'no-boost' game; restrict boost usage to a minimum or eliminate it entirely.",
    "Challenge opponents to a 'musical boost' match - only one player on each team can use boost at a time.",
    "Attempt the 'Mystery Mode' - rotate strategies mid-match without telling your opponents.",
    "Go for 'carousel goals' - drive in a circle around the ball before taking a shot.",
    "Play 'tug of war' by trying to push the ball to your goal or the opponent's goal, alternating each minute.",
    "Role-play as 'knight in shining armor' - protect your 'royal ball' at all costs.",
    "Coordinate 'sumo wrestling' matches by trying to push opponents out of a designated ring.",
    "Play 'invisible ball' mode - pretend the ball is invisible and react to imaginary ball positions.",
    "Role-play 'air traffic controllers' - signal your teammates for takeoff and landing during aerial plays.",
    "Try a 'mirror mirror' challenge - mirror the movements of your opponent in-game.",
    "Challenge opponents to a 'break dance' match; spin and flip your cars like break dancers.",
    "Play 'hide and seek' - one player hides in a corner, and the rest seek to 'find' them without using the ball.",
    "Engage in 'penguin shuffle' matches by waddling side to side across the field like penguins.",
    "Conduct a 'headlights off' challenge - turn off your car's headlights and navigate in the dark.",
    "Play 'goalkeeper switch'; rotate goalkeeper responsibilities every 30 seconds.",
    "Embrace 'high five' celebrations after each goal by colliding with your teammates in mid-air."
];

let usedStrategies = new Set();
const generateButton = document.getElementById("generate");

document.getElementById("generate").addEventListener("click", () => {
    const allowReuse = document.getElementById("allowReuse").checked;
    const strategy = generateRandomStrategy(allowReuse);
    const strategyElement = document.getElementById("strategy");
    strategyElement.classList.add("roll-down-animation"); // Apply animation class
    setTimeout(() => {
        strategyElement.textContent = strategy;
        strategyElement.classList.remove("roll-down-animation"); // Remove animation class
    }, 1000); // Adjust the duration to match your animation
});

document.getElementById("reset").addEventListener("click", () => {
    usedStrategies.clear();
    generateButton.classList.remove("disabled");
});

document.getElementById("allowReuse").addEventListener("change", () => {
    const allowReuse = document.getElementById("allowReuse").checked;
    if (!allowReuse && usedStrategies.size === strategies.length) {
        generateButton.classList.add("disabled");
    } else {
        generateButton.classList.remove("disabled");
    }
});

function generateRandomStrategy(allowReuse) {
    if (!allowReuse) {
        const unusedStrategies = strategies.filter(strategy => !usedStrategies.has(strategy));
        if (unusedStrategies.length === 0) {
            usedStrategies.clear();
            generateButton.classList.add("disabled");
            return "All strategies have been used.";
        } else {
            const strategy = unusedStrategies[Math.floor(Math.random() * unusedStrategies.length)];
            usedStrategies.add(strategy);
            if (usedStrategies.size === strategies.length) {
                generateButton.classList.add("disabled");
            }
            return strategy;
        }
    } else {
        return strategies[Math.floor(Math.random() * strategies.length)];
    }
}

// Initial check for disabling the button based on "Allow Reuse" state
const initialAllowReuse = document.getElementById("allowReuse").checked;
if (!initialAllowReuse && usedStrategies.size === strategies.length) {
    generateButton.classList.add("disabled");
}