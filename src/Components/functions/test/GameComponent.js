import React, { Component } from 'react';
import InputComponent from './InputComponent';

class GameComponent extends Component {
  state = {
    gameStarted: false,
    typedText: '',
    text: "It's you! Despite everything, it's still you.",
    currentIndex: 0,
  };

  handleKeyPress = (key) => {
    const { text, currentIndex, gameStarted } = this.state;

    if (!gameStarted) {
      // Start the game when a key is pressed
      this.setState({ gameStarted: true });
    }

    // Compare the pressed key with the expected character
    const charToMatch = text[currentIndex];

    if (key === charToMatch) {
      // Update the typed text and index when the key matches
      this.setState((prevState) => ({
        typedText: prevState.typedText + key,
        currentIndex: prevState.currentIndex + 1,
      }));
    } else {
      // Add your real-time error detection logic here
      // For example, you can set an error state and highlight errors
    }
  };

  render() {
    const { gameStarted, typedText, text } = this.state;

    return (
      <div>
        {gameStarted ? (
          // Render your game components when the game has started
          <div>
            <p>The game has started!</p>
          </div>
        ) : (
          // Render the invisible input to capture keypress events
          <InputComponent onKeyPress={this.handleKeyPress} />
        )}

        <div>
          {/* Display the text with typed characters */}
          <p>
            {text.split('').map((char, index) => (
              <span
                key={index}
                className={
                  index < typedText.length
                    ? char === typedText[index]
                      ? 'text-green-500'
                      : 'text-red-500'
                    : ''
                }
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

export default GameComponent;
