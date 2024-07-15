import React, {useState} from 'react';

const PersonCard = ({firstName,lastName,age,hairColor}) => {
    const [currentAge, setCurrentAge] = useState(age);
    const aumentarEdad = () => {setCurrentAge(currentAge + 1);
    };
    return (
        <>
            <h3>{firstName}{lastName}</h3>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick = {aumentarEdad}>Birthday Button for {firstName} {lastName}</button>
        </>
    );
};

export default PersonCard;
