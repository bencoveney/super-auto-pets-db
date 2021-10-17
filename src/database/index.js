"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPets = void 0;
var ant_1 = require("./pets/ant");
var badger_1 = require("./pets/badger");
var bat_1 = require("./pets/bat");
var beaver_1 = require("./pets/beaver");
var beetle_1 = require("./pets/beetle");
var blowfish_1 = require("./pets/blowfish");
var bluebird_1 = require("./pets/bluebird");
var camel_1 = require("./pets/camel");
var caterpillar_1 = require("./pets/caterpillar");
var crab_1 = require("./pets/crab");
var cricket_1 = require("./pets/cricket");
var dodo_1 = require("./pets/dodo");
var dog_1 = require("./pets/dog");
var dromedary_1 = require("./pets/dromedary");
var duck_1 = require("./pets/duck");
var elephant_1 = require("./pets/elephant");
var fish_1 = require("./pets/fish");
var flamingo_1 = require("./pets/flamingo");
var giraffe_1 = require("./pets/giraffe");
var hatchingChick_1 = require("./pets/hatchingChick");
var hedgehog_1 = require("./pets/hedgehog");
var horse_1 = require("./pets/horse");
var kangaroo_1 = require("./pets/kangaroo");
var ladybug_1 = require("./pets/ladybug");
var mosquito_1 = require("./pets/mosquito");
var otter_1 = require("./pets/otter");
var owl_1 = require("./pets/owl");
var ox_1 = require("./pets/ox");
var peacock_1 = require("./pets/peacock");
var pig_1 = require("./pets/pig");
var puppy_1 = require("./pets/puppy");
var rabbit_1 = require("./pets/rabbit");
var rat_1 = require("./pets/rat");
var sheep_1 = require("./pets/sheep");
var shrimp_1 = require("./pets/shrimp");
var snail_1 = require("./pets/snail");
var spider_1 = require("./pets/spider");
var swan_1 = require("./pets/swan");
var tabbyCat_1 = require("./pets/tabbyCat");
var tropicalFish_1 = require("./pets/tropicalFish");
var turtle_1 = require("./pets/turtle");
var whale_1 = require("./pets/whale");
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
];
function getPets() {
    return pets;
}
exports.getPets = getPets;
