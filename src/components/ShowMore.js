import {Link} from "react-router-dom";
import {MDBIcon} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../css/ShowMore.css'

const ShowMore = () => {
    return (
        <>
            <h1 className="show-more">
                <Link to="/search">
                    <button>Show more
                        <span>
                            <MDBIcon fas icon="angle-down" />
                        </span>
                    </button>
                </Link>
            </h1>
        </>
    )
};

export default ShowMore;