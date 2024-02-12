import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import {Results} from "./components/Results.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 200,
        expectedReturn: 100,
        duration: 5
    })

    const isInputValid = userInput.duration >= 1;

    function handleInput(inputField, value) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [inputField]: +value
            }
        })
    }

    return (
        <>
            <Header/>
            <main>
                <UserInput value={userInput} onChange={handleInput}/>
                {!isInputValid && <p className={"center"}>
                    Please enter a duration greater than zero</p>}
                {isInputValid && <Results input={userInput}/>}
            </main>
        </>
    )
}

export default App
