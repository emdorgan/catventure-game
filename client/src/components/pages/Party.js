import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col } from 'react-bootstrap';
import CatCard from '../gameUI/CatCard';

const styles = {
    catBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    teamHeader: {
        marginTop: '10px',
        fontSize: '2.5em',
        marginBottom: '20px'
    }
}

function Party({userData}) {

    const userCats = userData.cats;

    // checks if the user has only one cat left (and prevent them from removing it)
    function isLastCat(catArray){
        if(catArray.length < 2){
            return true;
        } else{
            return false;
        }
    }
    return (
        <Col className={"location px-0 d-flex flex-column align-items-center"}>
            <h2 style={styles.teamHeader}>My Team</h2>
            <div style={styles.catBox}>
                {userCats.map((cat, i) => (
                    <CatCard 
                    cat={cat} 
                    key={i}
                    isTavern={false}
                    isLastCat={isLastCat(userCats)}
                     />
                ))}
            </div>
            <Button as={Link} to="/village">Back</Button>
        </Col>
    )
}

export default Party;

