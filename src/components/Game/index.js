import React, { Component } from "react";
import Wrapper from "../Wrapper";
import guns from "../../guns.json";
import ClickedItem from "../clickItem";
import Nav from "../Header/Nav"

class Game extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        guns,
        score: 0,
        topScore: 0
    };

    componentDidMount() {
        this.setState({ guns: this.shuffledData(this.state.guns) });
    }

    correctGuess = newGuns => {
        // event.preventDefault();
        const { score, topScore } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
        this.setState({
            guns: this.shuffledData(newGuns),
            score: newScore,
            topScore: newTopScore
        });
    }

    incorrectGuess = guns => {
        this.setState({
            data: this.resetData(guns),
            score: 0
        })
    }

    resetData = guns => {
        const resetData = guns.map(item => ({ ...item, clicked: false }));
        return this.shuffledData(resetData);
    }

    shuffledData = guns => {
        let i = guns.length - 1;
        while (i > 0) {
            const x = Math.floor(Math.random() * (i + 1));
            const temp = guns[i];
            guns[i] = guns[x];
            guns[x] = temp;
            i--;
        }
        return guns;
    }

    handleClick = id => {
        let guessedCorrect = false;
        const newGuns = this.state.guns.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    guessedCorrect = true;
                    newItem.clicked = true;
                }
            }
            return newItem;
        });
        guessedCorrect
            ? this.correctGuess(newGuns)
            : this.incorrectGuess(newGuns);
    }

    // Map over this.state.guns and render a gunCard component for each gun object
    render() {
        return (
            <>
                <Nav score={this.state.score} topScore={this.state.topScore} />
                <Wrapper>

                    {this.state.guns.map(gun => (
                        <ClickedItem
                            id={gun.id}
                            key={gun.id}
                            image={gun.image}
                            shake={!this.state.score && this.state.topScore}
                            handleClick={this.handleClick}
                        />
                    ))}
                </Wrapper>
            </>
        );
    }
}

export default Game;