export const EventProps = () => {
    const HandleWelcomeUsers = (user) => {
        alert(`hey i am ${user}`)
    }
    const handleHover = () => {
        alert("hover")
    }
    return (
        <>
            <WelcomeUsers onClick={() => { HandleWelcomeUsers("pranshu") }}
                onMouseEnter={handleHover}

            />
        </>
    )
}

export const WelcomeUsers = (props) => {
    const handleGreeting = () => {

        console.log("hey i am child component")
        props.onClick();

    }
    return (
        <>
            <button onClick={props.onClick}>click me 1</button>
            <button onMouseEnter={props.onMouseEnter}>click me 2</button>
            <button onClick={handleGreeting}>click me 3</button>
        </>
    )
}