import React, { useState } from 'react';
import AddQuestion from './AddQuestion';
import Options from './Options';
import Question from './Question';
import TypeSelector from './TypeSelector';

const CreateSurvey = ({surveyQuestions, setSurveyQuestions}) => {

    const getRandom = () => {
        return Math.floor(Math.random() * 1000) + 1;
    }

    const [qText, setQText] = useState("");
    const [qType, setQType] = useState(0);
    const [options, setOptions] = useState([
        {uid: getRandom(), value:""}
    ]);

    const addOption = () => {
        if((qType === 1 && options.length === 4) || (qType === 2 && options.length === 2)) {
            return;
        }

        let newOption = {
            uid: getRandom(),
            value: ""
        }

        let updatedOptions = [...options];

        updatedOptions.push(newOption);

        setOptions(updatedOptions);

        // console.log(updatedOptions);
    }


    const deleteOptions = (deleteID) => {
        if(options.length === 2) {
            return;
        }

        let updatedOptions = options.filter((opt) => {
            return opt.uid !== deleteID;
        });

        setOptions(updatedOptions);

        // console.log(updatedOptions);
    }

    const updateOptionText = (id, text) => {
        let updatedOptions = [...options];

        let changeIndex = updatedOptions.findIndex((opt) => opt.uid === id);

        updatedOptions[changeIndex].value = text;

        setOptions(updatedOptions);
    } 


    const updateQuestionText = (text) => {
        setQText(text);
    }


    const handleAddQuestion = () => {
        let newQuestion = {
            uid: getRandom(),
            question: qText,
            questionType: qType,
            optionsList: options
        }

        let updatedQuestions = [...surveyQuestions];

        updatedQuestions.push(newQuestion);

        setSurveyQuestions(updatedQuestions);

        setQType(0);

        console.log(surveyQuestions);
    }


    return (
        <>
            <TypeSelector qType={qType} setQType={setQType}/>
            {qType !== 0 ? 
             <>
                <Question updateQuestionText = {updateQuestionText}/>

                {options.map((opt) => <Options 

                key={opt.uid} 
                addOption={addOption} 
                deleteOptions={deleteOptions} 
                opt={opt} 
                updateOptionText={updateOptionText}

                /> )}
                
            </> 
             : null}

            {(qType === 1 && options.length === 4) ?
                <AddQuestion handleAddQuestion={handleAddQuestion}/> : (qType === 2 && options.length === 2) ?
                    <AddQuestion handleAddQuestion={handleAddQuestion}/> : null}

            
            
        </>
    );
};

export default CreateSurvey;