import React from 'react';
import { Link} from 'react-router-dom';


const AddQuestion = ({handleAddQuestion}) => {
    // let { path, url } = useRouteMatch();
    // const history = useHistory();
    return (
        <div className="my-3">
            
            <button className="btn btn-danger m-3" onClick={handleAddQuestion}>Add Question</button>
           

            <Link to="/publish">
                <button className="btn btn-danger m-3">Publish</button>
            </Link>
            
        </div>
    );
};

export default AddQuestion;