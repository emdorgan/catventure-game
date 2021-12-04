import React from 'react';

const AsideCard = (props) => {

    return (
        <section>
            <p>{props.cat.name}</p>
            <p>{props.cat.class}</p>
            <p>{props.cat.power}</p>
            <p>{props.cat.level}</p>
            <p>{props.cat.experience}</p>
            <p>{props.cat.currentHP}/{props.cat.maxHP}</p>
        </section>
    )
}



export default AsideCard;