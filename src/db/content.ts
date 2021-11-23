import { Pet, Food, Status, Turn } from ".";
import {
  Database,
  getPetId,
  getFoodId,
  getStatusId,
  getTurnIdentifiers,
  getTurnId,
} from "./database";
import { apple } from "./food/apple";
import { cannedFood } from "./food/cannedFood";
import { chili } from "./food/chili";
import { chocolate } from "./food/chocolate";
import { cupcake } from "./food/cupcake";
import { garlic } from "./food/garlic";
import { honey } from "./food/honey";
import { meatBone } from "./food/meatBone";
import { melon } from "./food/melon";
import { milk } from "./food/milk";
import { mushroom } from "./food/mushroom";
import { pear } from "./food/pear";
import { pizza } from "./food/pizza";
import { saladBowl } from "./food/saladBowl";
import { sleepingPill } from "./food/sleepingPill";
import { steak } from "./food/steak";
import { sushi } from "./food/sushi";
import { ant } from "./pets/ant";
import { badger } from "./pets/badger";
import { bat } from "./pets/bat";
import { beaver } from "./pets/beaver";
import { bee } from "./pets/bee";
import { beetle } from "./pets/beetle";
import { bison } from "./pets/bison";
import { blowfish } from "./pets/blowfish";
import { bluebird } from "./pets/bluebird";
import { buffalo } from "./pets/buffalo";
import { bus } from "./pets/bus";
import { butterfly } from "./pets/butterfly";
import { camel } from "./pets/camel";
import { cat } from "./pets/cat";
import { caterpillar } from "./pets/caterpillar";
import { chick } from "./pets/chick";
import { chicken } from "./pets/chicken";
import { cow } from "./pets/cow";
import { crab } from "./pets/crab";
import { cricket } from "./pets/cricket";
import { crocodile } from "./pets/crocodile";
import { deer } from "./pets/deer";
import { dirtyRat } from "./pets/dirtyRat";
import { dodo } from "./pets/dodo";
import { dog } from "./pets/dog";
import { dolphin } from "./pets/dolphin";
import { dragon } from "./pets/dragon";
import { dromedary } from "./pets/dromedary";
import { duck } from "./pets/duck";
import { eagle } from "./pets/eagle";
import { elephant } from "./pets/elephant";
import { fish } from "./pets/fish";
import { flamingo } from "./pets/flamingo";
import { fly } from "./pets/fly";
import { giraffe } from "./pets/giraffe";
import { goat } from "./pets/goat";
import { gorilla } from "./pets/gorilla";
import { hatchingChick } from "./pets/hatchingChick";
import { hedgehog } from "./pets/hedgehog";
import { hippo } from "./pets/hippo";
import { horse } from "./pets/horse";
import { kangaroo } from "./pets/kangaroo";
import { ladybug } from "./pets/ladybug";
import { leopard } from "./pets/leopard";
import { llama } from "./pets/llama";
import { lobster } from "./pets/lobster";
import { mammoth } from "./pets/mammoth";
import { microbe } from "./pets/microbe";
import { monkey } from "./pets/monkey";
import { mosquito } from "./pets/mosquito";
import { octopus } from "./pets/octopus";
import { otter } from "./pets/otter";
import { owl } from "./pets/owl";
import { ox } from "./pets/ox";
import { parrot } from "./pets/parrot";
import { peacock } from "./pets/peacock";
import { penguin } from "./pets/penguin";
import { pig } from "./pets/pig";
import { poodle } from "./pets/poodle";
import { puppy } from "./pets/puppy";
import { rabbit } from "./pets/rabbit";
import { ram } from "./pets/ram";
import { rat } from "./pets/rat";
import { rhino } from "./pets/rhino";
import { rooster } from "./pets/rooster";
import { sauropod } from "./pets/sauropod";
import { scorpion } from "./pets/scorpion";
import { seal } from "./pets/seal";
import { shark } from "./pets/shark";
import { sheep } from "./pets/sheep";
import { shrimp } from "./pets/shrimp";
import { skunk } from "./pets/skunk";
import { sloth } from "./pets/sloth";
import { snail } from "./pets/snail";
import { snake } from "./pets/snake";
import { spider } from "./pets/spider";
import { squirrel } from "./pets/squirrel";
import { swan } from "./pets/swan";
import { tabbyCat } from "./pets/tabbyCat";
import { tiger } from "./pets/tiger";
import { tropicalFish } from "./pets/tropicalFish";
import { turkey } from "./pets/turkey";
import { turtle } from "./pets/turtle";
import { tyrannosaurus } from "./pets/tyrannosaurus";
import { whale } from "./pets/whale";
import { worm } from "./pets/worm";
import { zombieCricket } from "./pets/zombieCricket";
import { zombieFly } from "./pets/zombieFly";
import { populateProbabilities } from "./populateProbabilities";
import { boneAttack } from "./statusEffects/boneAttack";
import { coconutShield } from "./statusEffects/coconutShield";
import { extraLife } from "./statusEffects/extraLife";
import { garlicArmor } from "./statusEffects/garlicArmor";
import { honeyBee } from "./statusEffects/honeyBee";
import { melonArmor } from "./statusEffects/melonArmor";
import { poisonAttack } from "./statusEffects/poisonAttack";
import { splashAttack } from "./statusEffects/splashAttack";
import { steakAttack } from "./statusEffects/steakAttack";
import { weak } from "./statusEffects/weak";

export function getDatabase(): Database {
  let database: Database = { pets: {}, foods: {}, statuses: {}, turns: {} };
  pets.forEach((pet) => {
    const id = getPetId(pet);
    database.pets[id] = { ...pet, id };
  });
  foods.forEach((food) => {
    const id = getFoodId(food);
    database.foods[id] = { ...food, id };
  });
  statuses.forEach((status) => {
    const id = getStatusId(status);
    database.statuses[id] = { ...status, id };
  });
  turns.forEach((turn) => {
    const id = getTurnId(turn);
    database.turns[id] = { ...turn, id };
  });
  populateProbabilities(database);
  return database;
}

const pets: Pet[] = [
  // Tier 1
  ant,
  beaver,
  beetle,
  bluebird,
  cricket,
  duck,
  fish,
  horse,
  ladybug,
  mosquito,
  otter,
  pig,
  sloth,
  // Tier 2
  bat,
  crab,
  dodo,
  dog,
  dromedary,
  elephant,
  flamingo,
  hedgehog,
  peacock,
  rat,
  shrimp,
  spider,
  swan,
  tabbyCat,
  // Tier 3
  badger,
  blowfish,
  caterpillar,
  camel,
  hatchingChick,
  giraffe,
  kangaroo,
  owl,
  ox,
  puppy,
  rabbit,
  sheep,
  snail,
  tropicalFish,
  turtle,
  whale,
  // Tier 4
  bison,
  buffalo,
  deer,
  dolphin,
  hippo,
  llama,
  lobster,
  monkey,
  penguin,
  poodle,
  rooster,
  skunk,
  squirrel,
  worm,
  // Tier 5
  chicken,
  cow,
  crocodile,
  eagle,
  goat,
  microbe,
  parrot,
  rhino,
  scorpion,
  seal,
  shark,
  turkey,
  // Tier 6
  cat,
  dragon,
  fly,
  gorilla,
  leopard,
  mammoth,
  octopus,
  sauropod,
  snake,
  tiger,
  tyrannosaurus,
  // Summoned
  zombieCricket,
  bus,
  zombieFly,
  dirtyRat,
  chick,
  ram,
  butterfly,
  bee,
];

const foods: Food[] = [
  // Tier 1
  apple,
  honey,
  // Tier 2
  cupcake,
  meatBone,
  sleepingPill,
  // Tier 3
  garlic,
  saladBowl,
  // Tier 4
  cannedFood,
  pear,
  // Tier 5
  chili,
  chocolate,
  sushi,
  // Tier 6
  melon,
  mushroom,
  pizza,
  steak,
  // Summoned
  milk,
];

const statuses: Status[] = [
  weak,
  coconutShield,
  honeyBee,
  boneAttack,
  garlicArmor,
  splashAttack,
  melonArmor,
  extraLife,
  steakAttack,
  poisonAttack,
];

const turns: Turn[] = [];

for (let turnIndex = 1; turnIndex <= 11; turnIndex++) {
  const turn: Turn = {
    ...getTurnIdentifiers(turnIndex < 11 ? `Turn ${turnIndex}` : `Turn 11+`),
    index: turnIndex,
    foodShopSlots: -1,
    animalShopSlots: -1,
    livesLost: -1,
    tiersAvailable: "Summoned",
    levelUpTier: "Summoned",
  };

  switch (turnIndex) {
    case 1:
    case 2:
      turn.foodShopSlots = 1;
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      turn.foodShopSlots = 2;
      break;
  }

  switch (turnIndex) {
    case 1:
    case 2:
    case 3:
    case 4:
      turn.animalShopSlots = 3;
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      turn.animalShopSlots = 4;
      break;
    case 9:
    case 10:
    case 11:
      turn.animalShopSlots = 5;
      break;
  }

  switch (turnIndex) {
    case 1:
    case 2:
      turn.tiersAvailable = 1;
      turn.levelUpTier = 2;
      turn.livesLost = 1;
      break;
    case 3:
    case 4:
      turn.tiersAvailable = 2;
      turn.levelUpTier = 3;
      turn.livesLost = 2;
      break;
    case 5:
    case 6:
      turn.tiersAvailable = 3;
      turn.levelUpTier = 4;
      turn.livesLost = 3;
      break;
    case 7:
    case 8:
      turn.tiersAvailable = 4;
      turn.levelUpTier = 5;
      turn.livesLost = 3;
      break;
    case 9:
    case 10:
      turn.tiersAvailable = 5;
      turn.levelUpTier = 6;
      turn.livesLost = 4;
      break;
    case 11:
      turn.tiersAvailable = 6;
      turn.levelUpTier = 6;
      turn.livesLost = 5;
      break;
  }

  turns.push(turn);
}
