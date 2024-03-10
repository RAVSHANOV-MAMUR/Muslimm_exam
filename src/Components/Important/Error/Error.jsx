import "./Error.scss"
import ErrorImg from "./404.jpg"

function Error() {
    return(
        <>
        <div className="error">
            <h1 className="error__heading">404 NotFound</h1>
            <img src={ErrorImg} alt="error" />
        </div>
        </>
    )
}

export default Error