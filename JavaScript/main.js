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
    "Embrace 'high five' celebrations after each goal by colliding with your teammates in mid-air.",
    "Adopt 'penguin slide' - slide across the field on your roof like penguins on ice.",
    "Play 'curling' by attempting to 'sweep' the ball into the opponent's goal using your cars.",
    "Coordinate 'synchronized swimming' - create graceful, synchronized movements in the pool-shaped arenas.",
    "Emulate 'ballet dancers' - perform elegant pirouettes and leaps while advancing on the field.",
    "Play 'volleyball' - hit the ball over the net between the goals without letting it touch the ground.",
    "Conduct 'shark attack' matches - pretend to be sharks hunting the ball as prey.",
    "Try 'hopscotch' - move around the field by hopping and dodging like in the children's game.",
    "Engage in 'rocket rodeo' - try to 'ride' on the ball while it's in motion.",
    "Coordinate 'chicken run' - line up and drive towards each other to see who swerves first.",
    "Play 'silent match' - no in-game communication allowed; use quick chat and emotes only.",
    "Conduct 'gravity challenge' matches; jumping and flipping are forbidden, stick to the ground.",
    "Embrace 'traffic cop' roles - direct traffic on the field and enforce 'traffic rules.'",
    "Role-play as 'food delivery cars' - pass the ball like you're delivering meals to hungry customers.",
    "Try 'rocket league soccer'; play with a giant beach ball and larger goals.",
    "Engage in 'underwater soccer'; pretend the field is submerged, making your cars move slower.",
    "Play 'horde mode' - challenge yourselves to defend against waves of aerial 'zombie' balls.",
    "Conduct 'prop hunt' - use your cars to 'hide' as inanimate objects on the field.",
    "Try 'escape room' matches - create puzzles and challenges for opponents to unlock a goal.",
    "Role-play as 'secret agents' - communicate using coded messages and covert maneuvers.",
    "Engage in 'precision drilling' - practice precise touches and control to pass the ball accurately.",
    "Challenge opponents to a 'trampoline match' - bounce on the ball and make it bounce as high as possible.",
    "Coordinate 'cross-the-line' - drive straight across the field in a designated line from one side to the other.",
    "Play 'alphabet soup' - create letters or shapes with your car movements on the field.",
    "Conduct 'kamikaze attacks' - relentlessly attack opponents, even if it means self-destruction.",
    "Emulate 'soccer moms'; use minivan-themed cars and act like overenthusiastic soccer parents.",
    "Try 'car curling' - slide into the ball to send it sliding like a curling stone.",
    "Engage in 'aerial tag' - try to touch the ball in the air without letting it touch the ground.",
    "Challenge opponents to 'musical boost chairs' - race to a single boost pad as it appears on the field.",
    "Coordinate 'pinball chaos' - bounce off walls and each other as you move around the field.",
    "Play 'photographers' - take 'action shots' of each other performing stunts during the match.",
    "Conduct 'soccer golf' - set up 'holes' on the field and aim to score with as few 'strokes' as possible.",
    "Embrace 'card shark' tactics - use quick chat as 'poker face' to bluff opponents.",
    "Try 'rock, paper, scissors' - choose one of the moves and follow through during each kickoff.",
    "Play 'carnival rides' - mimic amusement park rides with your cars' movements.",
    "Engage in 'chaos corners' - focus on playing in the corners of the field only.",
    "Coordinate 'paint the field' - move the ball around to create intricate 'paintings' on the field.",
    "Try 'sumo soccer' - attempt to push the ball out of the arena while avoiding demolitions.",
    "Play 'rocket golf' - aim to score goals from long distances as if it were a golf game.",
    "Emulate 'shooting stars' - create dazzling aerial light displays with goal explosions.",
    "Conduct 'popcorn machines' - continuously jump and spin while driving around the field.",
    "Role-play as 'jungle explorers' - navigate the field like it's an uncharted jungle.",
    "Play 'marathon man' - sprint laps around the field before going for goals.",
    "Challenge opponents to 'boost sharing' - take turns using a single boost pad on the field.",
    "Coordinate 'rolling thunder' - move in a line, continuously passing the ball along.",
    "Try 'car soccer baseball' - attempt to hit the ball into specific 'bases' for points.",
    "Engage in 'hide-and-seek derby' - take cover and seek opponents for demolition.",
    "Emulate 'firefighters' - 'rescue' the ball from the goal by hitting it out with precision.",
    "Play 'hiking expedition' - take a scenic route around the field and appreciate the 'views.'",
    "Conduct 'Morse code communication' - communicate only via car horn or engine sounds.",
    "Challenge opponents to 'rocket ramen' - pass the ball as if it's a noodle bowl.",
    "Coordinate 'slalom driving' - weave through cones or obstacles as you advance on the field.",
    "Try 'hide and score' - 'hide' the ball from opponents while waiting for the perfect moment to score.",
    "Engage in 'tunnel vision' - drive through 'tunnels' created by other cars on the field.",
    "Role-play as 'musical cars' - switch cars with opponents after each goal.",
    "Play 'duck, duck, goose' - 'tag' opponents by bumping into them and saying 'goose.'",
    "Conduct 'hoverboard matches' - pretend your cars can hover above the ground.",
    "Emulate 'horizon shot' - always aim for shots that hit the crossbar or the upper part of the goal.",
    "Challenge opponents to 'basketball' matches - try to dunk the ball into the goal like a basketball player.",
    "Coordinate 'worm race' - slither like worms across the field while advancing.",
    "Try 'car chef' - serve up 'meals' by passing the ball between cars in the shape of food dishes.",
    "Engage in 'dragon fights' - perform dramatic aerial battles in the air above the field.",
    "Play 'unpredictable trajectories' - purposefully send the ball in unpredictable directions.",
    "Conduct 'moonwalking matches' - drive backward and score while reversing.",
    "Emulate 'turbo boost' - accelerate to supersonic speed at the start of each kickoff.",
    "Role-play as 'aliens' - communicate in 'alien languages' and perform 'alien' stunts.",
    "Try 'rocket chess' - use your cars to strategize and execute chess-like moves on the field.",
    "Play 'time warp' - switch to the reverse camera view and play the entire match like that.",
    "Coordinate 'synchronized spinners' - spin in unison as a team while moving across the field.",
    "Engage in 'dribbling showdowns' - challenge opponents to 1v1 dribbling contests.",
    "Play 'spin cycle' - take shots while spinning your car like a clothes dryer in mid-air.",
    "Role-play as 'ballet bullies' - perform elegant moves but aggressively challenge opponents.",
    "Try 'bungee jumpers' - jump off the ceiling to hit the ball, pretending you're on a bungee cord.",
    "Conduct 'no gas' matches - let go of the acceleration button and only use boost for movement.",
    "Challenge opponents to 'lawnmower duels' - drive close to the ground while cutting the grass (ball).",
    "Coordinate 'kite flying' - keep the ball high in the air and use your cars to 'fly' like kites.",
    "Play 'switcheroo' - periodically switch positions with a teammate to keep opponents guessing.",
    "Emulate 'slow-motion heroes' - play in super slow motion to create dramatic moments.",
    "Conduct 'cone collectors' - collect boost by driving through boost pads like they're cones.",
    "Role-play as 'car pets' - follow your teammates around like loyal pets on the field.",
    "Try 'acrobatic races' - race your teammates through aerial obstacle courses.",
    "Engage in 'sunbathing' - take a break to 'soak up the sun' (jump off the wall and relax).",
    "Play 'whirlwind matches' - always drive in a circular path to create a vortex of chaos.",
    "Coordinate 'chaotic countdown' - randomly count down from 10 to 1 and make your move at 1.",
    "Challenge opponents to 'mid-air passes' - pass the ball without letting it touch the ground.",
    "Conduct 'bull in a china shop' - drive recklessly, smashing into everything on the field.",
    "Role-play as 'knights of the round ball' - protect your 'round table' (the ball) with chivalry.",
    "Try 'rocket racecars' - race around the field with your cars and declare winners.",
    "Emulate 'off-road adventures' - navigate difficult terrain on the field as if it's a rugged trail.",
    "Engage in 'soccer polo' - use your cars to 'hit' the ball like a polo mallet.",
    "Play 'Mousetrap' - set up intricate traps on the field and try to score using them.",
    "Coordinate 'rubber band effect' - intentionally hit your teammates' cars to create rebounds.",
    "Challenge opponents to 'musical chaos' - periodically change cars with opponents during play.",
    "Conduct 'spider-man matches' - drive on walls and ceilings as if you're Spider-Man.",
    "Role-play as 'pirate treasure hunters' - 'dig' for buried treasure (the ball) with your cars.",
    "Try 'butterflies' - float like a butterfly and sting like a bee by using aerial maneuvers.",
    "Emulate 'levitating wizards' - create a sense of awe with your magical, levitating cars."
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