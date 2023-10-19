// File Depreciated
const strategies = [
    "The Backward Brigade: Drive your car backward for the entire match.",
    "The Ghost Touch: You can't touch the ball; you can only try to bump or demolish opponents.",
    "The Snail Race: Play the entire match in super slow motion.",
    "The Slip 'N Slide: Only drift and power slide, no regular driving allowed.",
    "The Tiny Tornadoes: Constantly spin like tornadoes throughout the match.",
    "The Bumper Buddies: You and a teammate must stay glued together during the entire game.",
    "The Camera Shy: Play with your camera settings inverted - up is down, and left is right.",
    "The Distracted Driver: Type in the in-game chat as much as possible during the match.",
    "The Goalie Swap: Swap positions randomly throughout the game, making everyone a goalie.",
    "The Flock of Birds: Fly up into the air and mimic a bird's flight pattern.",
    "The Ball Chasers: All three players relentlessly chase the ball, no matter where it goes.",
    "The Wacky Racers: Use only the most outlandish and unconventional cars.",
    "The Bowling Ball: Try to hit as many opponents as possible with demolitions.",
    "The Airborne Acrobats: Stay in the air for as long as you can, even when not needed.",
    "The One-Handed Wonder: Play with one hand while drinking a beverage with the other.",
    "The Teleportation Team: Only drive in reverse and use the teleport power-up.",
    "The Banana Boost: Only use boost pads shaped like bananas, if available.",
    "The Swapper Squad: Change cars with your teammates after each goal or save.",
    "The Turtle Takeover: Flip your car and drive upside-down as much as possible.",
    "The Grudge Match: Target and bump a single opponent the entire game.",
    "The Slow-Motion Showdown: Play in slow motion during overtimes only.",
    "The Master of Disguise: Change your car's appearance every 30 seconds.",
    "The Wall Crawlers: Stick to the walls and play as though gravity is inverted.",
    "The Inverted Goals: Score in your own net; prevent opponents from scoring in yours.",
    "The Rocket Rodeo: Stay on top of the ball and try to ride it for as long as you can.",
    "The Octane Outlaw: Use the Octane car and nothing else.",
    "The Wacky Weather: Change your camera settings to the most disorienting possible.",
    "The Demolition Derby: Try to demolish as many opponents as possible.",
    "The Spider Spree: Use the grappling hook power-up as much as you can.",
    "The Afraid of Heights: Stay on the ground; avoid going airborne at all costs.",
    "The Goalie Parade: All players stay in the goal area at all times.",
    "The Crazy Crossroads: Drive crisscross patterns on the field; never go straight.",
    "The Drunk Drivers: Rotate the camera view continuously during the match.",
    "The Uncoordinated Crew: Each player must take turns driving for 10 seconds.",
    "The Magnet Ball: Your cars are magnetized to the ball.",
    "The Bunny Hop: Jump continuously throughout the match.",
    "The Pinball Wizard: Hit every wall before hitting the ball.",
    "The Bouncing Bananza: Never stop boosting; always be in the air.",
    "The Tornado Takedown: Spin like a tornado at all times.",
    "The Leap of Faith: No jumping allowed.",
    "The Blindfold Challenge: Close your eyes and play for one minute.",
    "The Snowplow: Stay low and try to clear the field of all obstacles.",
    "The Stunt Show: Do flips, rolls, and spins instead of playing the ball.",
    "The Freestyle Frenzy: Try to score with freestyle aerials only.",
    "The Reverse Race: Go backward while the ball goes forward.",
    "The Freeze Tag: One player is 'it' and must tag others by bumping them.",
    "The Boat Race: Drive as if your car is a boat on water.",
    "The Synchronized Swimmers: Copy your teammate's every move.",
    "The Rodeo Clown: Attempt to 'lasso' the ball with the grapple power-up.",
    "The Disco Dance: Spin and boost like you're on the dance floor.",
    "The Hot Potato: Pass the ball between teammates as quickly as possible.",
    "The Hitchhikers: Attach to a teammate's car and see how long you can stay attached.",
    "The Hula Hoop: Circle around the ball without touching it.",
    "The Soccer Samba: Pretend you're dancing to the samba rhythm as you play.",
    "The Moonwalk: Drive backward while facing forward in the camera.",
    "The Kangaroo Kick: Jump as soon as you hit the ball; no ground hits allowed.",
    "The Bicycle Brigade: Score goals with bicycle kicks only.",
    "The Tightrope Tension: Drive on the edge of the field, avoiding the center.",
    "The Bunny Ballet: Jump around the field like graceful bunnies.",
    "The Bull's Eye: Try to hit the ball only with the center of your car.",
    "The Firework Show: Use fireworks in the goal explosion every time.",
    "The Double Trouble: Each player controls two cars at once.",
    "The Traffic Jam: All players must drive in the same lane.",
    "The Hat Trick: Score three goals with your roof, back, and front in one game.",
    "The Leaf Blower: Try to blow the ball away with your boost.",
    "The Rollercoaster Ride: Stick to the wall and ride it around the field.",
    "The Whack-a-Mole: Jump up and down repeatedly while near the ball.",
    "The Reverse Flip: Always flip in the opposite direction you want to go.",
    "The Mirror Match: Play with the exact same car and loadout as an opponent.",
    "The Clumsy Goalie: The goalie must continuously jump in the goal."
];
let usedStrategies = new Set();

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
