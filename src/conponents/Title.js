import React, { useState } from 'react';
function Quiz() {
	const questions = [
		{
			questionText: "What is the capital of France?",
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false }
			]
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false }
			]
		},
		{
			questionText: "The iPhone was created by which company?",
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false }
			]
		}
		,
		{
			questionText: "How many Harry Potter books are there?",
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true }
	
			]
		}
	]
	const [ques, setQues] = useState(0)
	const [score, setScore] = useState(0)
	const [total, setTotal] = useState(false)

	const answerresponce = (isCorrect) => {
		if (isCorrect) { setScore(score + 1) 
		}
		// console.log(score);
		const nextquestion = ques + 1;
		if (nextquestion < questions.length)
		{
			setQues(nextquestion);
		}
		else{
			setTotal(true)
		}
	}

return(
<div className='Title'>	{total ? (
		  <div className='total-scr'>
			  You Have scored {score} out of {questions.length}
		  </div>
	  ) : (
       <div>
		<div>
			<div>
				<span>{ques+1}/{questions.length}</span>
			</div>
			<div>	
				{questions[ques].questionText}
			</div>
		</div>
  
			<div >
				{questions[ques].answerOptions.map((ans)=>(
                    <button onClick={()=>answerresponce(ans.isCorrect)}>{ans.answerText}</button>
					))}
			</div>
			</div>
		)}
</div>
)

}
export default Quiz

