import { useState } from 'react'
import './App.css'

function App() {

  fetch('https://ai-chatbot.p.rapidapi.com/chat/free?message=What', {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a36c4463camsh5d952167e71549ep171413jsn476d49e3f670',
		'X-RapidAPI-Host': 'ai-chatbot.p.rapidapi.com'
	}
})

.then(response => {
  console.log(response)
})
.catch(err => {
  console.log(err)
})

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
 

  return (

      <div className=''>
        <form >
          <input type="text" />
          <button type="submit">submit</button>
        </form>
      </div>

  )
}

export default App
