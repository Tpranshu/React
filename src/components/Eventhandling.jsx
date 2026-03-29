export const EventHandling = () => {
    // function handleclickbutton() {
    //     alert("hey i am pranshu tiwari");  // traditional function
    // }

    const handleclickbutton = () =>{
        alert("Hey i am pranshu tiwari");  // fat arrow function latest
    };
    return (
        <>
            <button onClick={handleclickbutton}>click me</button>
        </>
    )
}
