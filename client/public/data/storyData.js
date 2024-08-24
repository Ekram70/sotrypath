import { v4 as uuidv4 } from 'uuid';

const storyData = [
  {
    id: uuidv4(),
    author: 'Random',
    date: '24.08.2024',
    title: 'The Enchanted Forest Quest',
    imgUrl:
      'https://t4.ftcdn.net/jpg/05/41/66/35/360_F_541663564_TUSOQROrrPZPkSZvdbXd6Wil5yCezuI7.jpg',
    options: [
      {
        id: uuidv4(),
        storypart: `You are a young explorer named Elara, eager to prove your bravery. The legends of the Enchanted Forest have intrigued you since childhood—stories of mystical creatures, hidden treasures, and a powerful artifact called the Heart of the Forest, said to grant its possessor great wisdom and power. One day, you decide it's time to see if the tales are true. Armed with your wits and a trusty map handed down from your ancestors, you step into the forest, feeling the cool, mossy earth under your feet and the dense canopy above.
    
    After hours of navigating through thick foliage and crossing a bubbling brook, you arrive at a fork in the path. Here, your journey presents its first major decision.`,
        options: [
          {
            id: uuidv4(),
            choice: `Follow the sound of rushing water to the right, where the river path could lead to a hidden waterfall—and possibly, the Heart of the Forest.`,
            storypart: `You choose the river path, drawn by the soothing yet powerful sound of the water. As you walk, the forest seems to come alive around you. Birds chirp, unseen creatures rustle in the undergrowth, and the scent of fresh, wildflowers fills the air. After a while, the trees part to reveal a stunning waterfall cascading down a cliffside. At its base lies a tranquil pool, shimmering in the sunlight. However, the beauty hides a challenge. A fierce water sprite guards the pool, her eyes glowing like sapphires.

"Who dares approach the sacred waters?" she demands. You must decide whether to negotiate with her or try to sneak past her while she is distracted.`,
            options: [
              {
                id: uuidv4(),
                choice: `Negotiate with the water sprite.`,
                storypart: `You decide to speak with the water sprite, offering her a gift in exchange for safe passage. You pull out a small, intricately carved shell from your pocket—a keepsake from your first journey to the sea. The sprite examines it carefully, her expression softening. She allows you to pass, and you discover a hidden cave behind the waterfall. Inside, you find the Heart of the Forest glowing brightly, a pulsing, living crystal that seems to hum with the energy of the forest itself.`,
                options: null,
              },
              {
                id: uuidv4(),
                choice: `Sneak past the water sprite.`,
                storypart: `You decide to wait until the sprite is distracted, then make a run for the cave behind the waterfall. You manage to reach the entrance, but the sprite notices and raises her hand, sending a wave crashing down on you. You barely escape, soaked and bruised, realizing you must leave the forest without the Heart this time.`,
                options: null,
              },
            ],
          },
          {
            id: uuidv4(),
            choice: `Take the left path, which leads deeper into the forest's heart, where ancient trees whisper secrets of the past.`,
            storypart: `You turn left, stepping into the darker, more mysterious part of the forest. The air is thick with the scent of pine and earth, and the only sounds are your footsteps and the occasional rustle of leaves. The path winds through towering trees that seem to bend and twist, their gnarled branches reaching out like arms. As you venture deeper, you feel the weight of the forest's ancient magic around you. Suddenly, you encounter a circle of stone statues, each carved in the likeness of a different creature—a lion, a bear, an eagle. In the center of the circle lies a stone pedestal, and atop it sits a glowing crystal orb.

A voice echoes in your mind: "Choose wisely, traveler. One statue will guide you to the Heart, while the others will lead to peril." You must decide which statue to approach.`,
            options: [
              {
                id: 1,
                choice: `Approach the lion statue.`,
                storypart: `You choose the lion, a symbol of courage. As you place your hand on the stone lion, it begins to glow, and the path ahead clears. A soft breeze guides you deeper into the forest, and you find yourself at the entrance to a hidden grove. There, bathed in sunlight, rests the Heart of the Forest. It radiates warmth and wisdom, and you know you have made the right choice.`,
                options: null,
              },
              {
                id: 2,
                choice: `Approach the bear statue.`,
                storypart: `You choose the bear, a symbol of strength. As you step toward it, the ground begins to shake, and a deep growl echoes through the trees. Suddenly, the statue animates, turning into a real bear. You realize your mistake too late, and the bear chases you out of the forest. You barely escape, but without the Heart.`,
                options: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default storyData;
