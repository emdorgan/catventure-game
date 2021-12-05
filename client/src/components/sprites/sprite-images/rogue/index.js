// import die from './mage_die.png';
import arrow from './rogue_arrow.png';
import idle from './rogue_idle.png';
import attack from './rogue_attack.png';
// import damaged from './mage_damaged.png';

// Rogue sprite data
const RogueSprites = {
    idle: {
        sprite: idle,
        width: 68,
        height: 624/6,
        fps: 6,
        noLoop: false
    },
    special: {
        sprite: arrow,
        width: 212,
        height: 1216/8,
        fps: 4,
        noLoop: false
    },
    // die: {
    //     sprite: die,
    //     width: 64,
    //     height: 1040/10,
    //     fps: 8,
    //     noLoop: true
    // },
    attack: {
        sprite: attack,
        width: 76,
        height: 832/8,
        fps: 8,
        noLoop: false
    },
    // damaged: {
    //     sprite: damaged,
    //     width: 88,
    //     height: 312/3,
    //     fps: 4,
    //     noLoop: true,
    //     toIdle: true
    // }
}

export default RogueSprites;