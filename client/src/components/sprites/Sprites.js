import React from 'react';
import { SpriteAnimator } from 'react-sprite-animator';

import MageSprites from './sprite-images/mage';
import WarriorSprites from './sprite-images/warrior';

const animations = {
    Mage: MageSprites,
    Warrior: WarriorSprites,
    Rogue: {}
}

function Sprites({ job, action, setAction }) {
    const animation = animations[job][action];
    return (<SpriteAnimator
        sprite={animation.sprite}
        width={animation.width}
        height={animation.height}
        direction={"vertical"}
        shouldAnimate={true}
        fps={animation.fps}
        stopLastFrame={animation.noLoop}
        onEnd={animation.toIdle ? (() => setAction('idle')) : (() => {})}
    />)
}

export default Sprites;