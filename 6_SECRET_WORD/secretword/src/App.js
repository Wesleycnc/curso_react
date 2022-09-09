//CSS 
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react'

// data
import { wordsList } from './data/words'

// components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },

]
const guessesQty = 3

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setpickedCategory] = useState('')
  const [letters, setLetter] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLeters, setWrongLeters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // pick a random category
    const categories = Object.keys(words)
    // A variável categories vai receber um numero aleatório de 0 ao numero de categorias que eu tenho, porem ele vai me dar numeros quebrados não vai dar os indices corretos, Então usaremos o Math.floor para arredondar para baixo o indice
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)

    // pick a random word
    // Aqui a variável word vai receber um numero aleatório de 0 a quantidade de palavras x da category sendo assim, recebendo uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    console.log(word);

    return {word, category}
  }, [words])

  // Começar jogo secret word
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates()
    // pick word and pick category
    const {word, category} = pickWordAndCategory()

    // create an array of letters
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);

    console.log(word, category);

    // fill states
    setPickedWord(word)
    setpickedCategory(category)
    setLetter(wordLetters)




    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase() 

    // Verificar se a letra foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLeters.includes(normalizedLetter)) {
      return
    }

    // remover chances 
    if(letters.includes(normalizedLetter)) {
      // Alterar letras adivinhadas
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      // Alterar letras erradas
      setWrongLeters((actualWrongLeters) => [
        ...actualWrongLeters,
        normalizedLetter
      ])
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }
  const clearLetterStates = () => {
    setGuessedLetters([])
    setWrongLeters([])
  }
  // Checar se as tentativas terminaram 

  useEffect(() => {

      if(guesses <= 0) {
        // reset all states
        clearLetterStates();
        setGameStage(stages[2].name)
      }
    }, [guesses])

    // Checar se o usuário ganhou o jogo
    useEffect(() => {
      const uniqueLetters = [...new Set(letters)]

      // Condição de vitoria
      if(guessedLetters.length === uniqueLetters.length) {
        //Add score
        setScore((actualScore) => actualScore += 100)

        // restart game
        startGame()
      }

      console.log(uniqueLetters);
    }, [guessedLetters, letters, startGame])
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLeters={wrongLeters} guesses={guesses} score={score}/>}
      {gameStage === 'end' && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
