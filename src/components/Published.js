import React from 'react';

const Published = ({surveyQuestions}) => {
    return (
        <div>
            {surveyQuestions.map((obj) => {

                return(
                <>
                    <p key={obj.uid}>{obj.question}</p>

                        {obj.optionsList.map((option) => { 
                            return(
                            <>
                                <input key={option.uid}
                                type={obj.questionType === 1 ? "checkbox" : "radio"} />
                                
                                <span key={option.uid}>{option.value}</span>
                                
                            </>

                            )
                        
                    
                })}
                </>
                );

            })}
        </div>
    );
};

export default Published;