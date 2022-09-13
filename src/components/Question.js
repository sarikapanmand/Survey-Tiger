import React from 'react';

const Question = ({updateQuestionText}) => {
    return (
        <>
            <div className="col-md-6 offset-md-3 col-12 input-group my-4">
                <div className="input-group-prepend">
                    <span className="input-group-text" >?</span>
                </div>
                <input type="text" className="form-control" placeholder="Write your question" onChange={(e) => updateQuestionText(e.target.value)}/>
            </div>
        </>
        
    );
};

export default Question;