"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPets = void 0;
var ant_1 = require("./pets/ant");
var badger_1 = require("./pets/badger");
var bat_1 = require("./pets/bat");
var beaver_1 = require("./pets/beaver");
var beetle_1 = require("./pets/beetle");
var bison_1 = require("./pets/bison");
var blowfish_1 = require("./pets/blowfish");
var bluebird_1 = require("./pets/bluebird");
var buffalo_1 = require("./pets/buffalo");
var camel_1 = require("./pets/camel");
var cat_1 = require("./pets/cat");
var caterpillar_1 = require("./pets/caterpillar");
var chicken_1 = require("./pets/chicken");
var cow_1 = require("./pets/cow");
var crab_1 = require("./pets/crab");
var cricket_1 = require("./pets/cricket");
var crocodile_1 = require("./pets/crocodile");
var deer_1 = require("./pets/deer");
var dodo_1 = require("./pets/dodo");
var dog_1 = require("./pets/dog");
var dolphin_1 = require("./pets/dolphin");
var dragon_1 = require("./pets/dragon");
var dromedary_1 = require("./pets/dromedary");
var duck_1 = require("./pets/duck");
var eagle_1 = require("./pets/eagle");
var elephant_1 = require("./pets/elephant");
var fish_1 = require("./pets/fish");
var flamingo_1 = require("./pets/flamingo");
var fly_1 = require("./pets/fly");
var giraffe_1 = require("./pets/giraffe");
var goat_1 = require("./pets/goat");
var gorilla_1 = require("./pets/gorilla");
var hatchingChick_1 = require("./pets/hatchingChick");
var hedgehog_1 = require("./pets/hedgehog");
var hippo_1 = require("./pets/hippo");
var horse_1 = require("./pets/horse");
var kangaroo_1 = require("./pets/kangaroo");
var ladybug_1 = require("./pets/ladybug");
var leopard_1 = require("./pets/leopard");
var llama_1 = require("./pets/llama");
var lobster_1 = require("./pets/lobster");
var mammoth_1 = require("./pets/mammoth");
var microbe_1 = require("./pets/microbe");
var monkey_1 = require("./pets/monkey");
var mosquito_1 = require("./pets/mosquito");
var octopus_1 = require("./pets/octopus");
var otter_1 = require("./pets/otter");
var owl_1 = require("./pets/owl");
var ox_1 = require("./pets/ox");
var parrot_1 = require("./pets/parrot");
var peacock_1 = require("./pets/peacock");
var penguin_1 = require("./pets/penguin");
var pig_1 = require("./pets/pig");
var poodle_1 = require("./pets/poodle");
var puppy_1 = require("./pets/puppy");
var rabbit_1 = require("./pets/rabbit");
var rat_1 = require("./pets/rat");
var rhino_1 = require("./pets/rhino");
var rooster_1 = require("./pets/rooster");
var sauropod_1 = require("./pets/sauropod");
var scorpion_1 = require("./pets/scorpion");
var seal_1 = require("./pets/seal");
var shark_1 = require("./pets/shark");
var sheep_1 = require("./pets/sheep");
var shrimp_1 = require("./pets/shrimp");
var skunk_1 = require("./pets/skunk");
var snail_1 = require("./pets/snail");
var snake_1 = require("./pets/snake");
var spider_1 = require("./pets/spider");
var squirrel_1 = require("./pets/squirrel");
var swan_1 = require("./pets/swan");
var tabbyCat_1 = require("./pets/tabbyCat");
var tiger_1 = require("./pets/tiger");
var tropicalFish_1 = require("./pets/tropicalFish");
var turkey_1 = require("./pets/turkey");
var turtle_1 = require("./pets/turtle");
var tyrannosaurus_1 = require("./pets/tyrannosaurus");
var whale_1 = require("./pets/whale");
var worm_1 = require("./pets/worm");
var pets = [
    // Tier 1
    ant_1.ant,
    beaver_1.beaver,
    beetle_1.beetle,
    bluebird_1.bluebird,
    cricket_1.cricket,
    duck_1.duck,
    fish_1.fish,
    horse_1.horse,
    ladybug_1.ladybug,
    mosquito_1.mosquito,
    otter_1.otter,
    pig_1.pig,
    // Tier 2
    bat_1.bat,
    crab_1.crab,
    dodo_1.dodo,
    dog_1.dog,
    dromedary_1.dromedary,
    elephant_1.elephant,
    flamingo_1.flamingo,
    hedgehog_1.hedgehog,
    peacock_1.peacock,
    rat_1.rat,
    shrimp_1.shrimp,
    spider_1.spider,
    swan_1.swan,
    tabbyCat_1.tabbyCat,
    // Tier 3
    badger_1.badger,
    blowfish_1.blowfish,
    caterpillar_1.caterpillar,
    camel_1.camel,
    hatchingChick_1.hatchingChick,
    giraffe_1.giraffe,
    kangaroo_1.kangaroo,
    owl_1.owl,
    ox_1.ox,
    puppy_1.puppy,
    rabbit_1.rabbit,
    sheep_1.sheep,
    snail_1.snail,
    tropicalFish_1.tropicalFish,
    turtle_1.turtle,
    whale_1.whale,
    // Tier 4
    bison_1.bison,
    buffalo_1.buffalo,
    deer_1.deer,
    dolphin_1.dolphin,
    hippo_1.hippo,
    llama_1.llama,
    lobster_1.lobster,
    monkey_1.monkey,
    penguin_1.penguin,
    poodle_1.poodle,
    rooster_1.rooster,
    skunk_1.skunk,
    squirrel_1.squirrel,
    worm_1.worm,
    // Tier 5
    chicken_1.chicken,
    cow_1.cow,
    crocodile_1.crocodile,
    eagle_1.eagle,
    goat_1.goat,
    microbe_1.microbe,
    parrot_1.parrot,
    rhino_1.rhino,
    scorpion_1.scorpion,
    seal_1.seal,
    shark_1.shark,
    turkey_1.turkey,
    // // Tier 6
    cat_1.cat,
    dragon_1.dragon,
    fly_1.fly,
    gorilla_1.gorilla,
    leopard_1.leopard,
    mammoth_1.mammoth,
    octopus_1.octopus,
    sauropod_1.sauropod,
    snake_1.snake,
    tiger_1.tiger,
    tyrannosaurus_1.tyrannosaurus,
];
function getPets() {
    return pets;
}
exports.getPets = getPets;
