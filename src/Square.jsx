import React from 'react';

const Square = (props) => {

    const handleClick = () => {
        if (props.squareValue === '' && props.playerTurn === true) {
            props.gameSquares.splice(props.index, 1, 'X');
            props.setGameSquares(props.gameSquares);
            props.setPlayerTurn(!props.playerTurn);
        } else if (props.squareValue === '' && props.playerTurn === false) {
            props.gameSquares.splice(props.index, 1, 'O');
            props.setGameSquares(props.gameSquares);
            props.setPlayerTurn(!props.playerTurn);
        }
    }

    return (
        <div onClick={handleClick} className='square'>
            {
                props.squareValue === 'O' ? <img src='https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png' /> : props.squareValue
            }
        </div>
    )
};

export default Square;