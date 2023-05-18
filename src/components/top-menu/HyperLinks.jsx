import { Link } from "react-router-dom";

const HyperLinks = () => {
    return (
        <div className="border border-black p-4 flex justify-between">
            <Link to={`/`} className="clickable px-2 flex flex-col justify-center">Home</Link>
            <Link to={`/reports`} className="clickable px-2 flex flex-col justify-center">Reports</Link>
            <Link to={`/about`} className="clickable px-2 flex flex-col justify-center">About Me</Link>
        </div>
    )
}

export default HyperLinks;