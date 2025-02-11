export const pokemonTypes = {
  normal: "🐾",
  fighting: "🥊",
  flying: "🦅",
  poison: "☠️",
  ground: "🌍",
  rock: "🪨",
  bug: "🐞",
  ghost: "👻",
  steel: "⚙️",
  fire: "🔥",
  water: "💧",
  grass: "🌿",
  electric: "⚡",
  psychic: "🧠",
  ice: "❄️",
  dragon: "🐉",
  dark: "🌑",
  fairy: "🧚",
  stellar: "🌌",
  unknown: "❓",
};

export const getIcon = type => {
  return pokemonTypes[type] || "❓";
};

export const pokemonStats = {
  hp: "❤️",
  attack: "💪",
  defense: "🛡️",
  "special-attack": "⚡",
  "special-defense": "🧠",
  speed: "⚡",
};

export const getStatIcon = stat => {
  return pokemonStats[stat] || "❓";
};
