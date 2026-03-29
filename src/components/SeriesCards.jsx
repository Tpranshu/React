
const SeriesCards = (props) => {
    return (
        <li key={props.currElm.id}>
            <div>
                <img
                    src={props.currElm.img_url}
                    alt="qot.jpg"
                    width="44%"
                    height="44%"
                />

            </div>
            <h2>Name : {props.currElm.name}</h2>
            <h3>Rating : {props.currElm.rating}</h3>
            <p>Genre : {props.currElm.genre}</p>
            <p>Descriptions : {props.currElm.description}</p>
            <a href={props.currElm.watch_url} target="_blank">
                <button>
                    Watch Now
                </button>
            </a>
        </li>
    )
}

export default SeriesCards
