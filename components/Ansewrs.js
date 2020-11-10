import React, { useState } from 'react'
import ButtonNext from "./ButtonNext"
import { Link } from 'react-router-dom'

export default function Answers ({ arrOfSortedRandomNumber, countriesName, randomNumber1, getCountries }) {

  const [ IsAnswerCorrect, setIsAnswerCorrect ] = useState(false)
  const [ isQuestionAnswered, setIsQuestionAnswered ] = useState(false)

  function handleAnswers (e) {
    setIsQuestionAnswered(true)
    if ((countriesName[randomNumber1].name) === (e.target.dataset.value)) {
      setIsAnswerCorrect(true)
      e.target.classList.add("correct")
    } else {
      const indexOfTheRightAnswer = arrOfSortedRandomNumber.find(index => {
        return countriesName[index].name === countriesName[randomNumber1].name
      })
      const rightAnswer = countriesName[indexOfTheRightAnswer].name
      setIsAnswerCorrect(false)
      e.target.classList.add("incorrect")
      const container = e.target.parentElement
      const buttons = Array.from(container.querySelectorAll("button"))
      const rightButton = buttons.find(button => button.dataset.value == rightAnswer)
      rightButton.classList.add("correct")
    }
  }

  console.log(IsAnswerCorrect);
  console.log(isQuestionAnswered);

  return (
    <>
      {arrOfSortedRandomNumber.map(indexArr => (
          <button 
            key={countriesName[indexArr].name}
            className="btn"
            data-value={countriesName[indexArr].name}
            onClick={handleAnswers}
          >
            {countriesName[indexArr].name}
          </button>
      ))}
      {isQuestionAnswered && 
        <ButtonNext 
          getCountries={getCountries}
          IsAnswerCorrect={IsAnswerCorrect}
      />}
    </>
  )
}