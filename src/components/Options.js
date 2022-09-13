import React from 'react';

const Options = ({ addOption, deleteOptions, opt, updateOptionText }) => {
    return (
        <>
            <div className="col-md-6 offset-md-3 col-12 input-group my-3">
                <input type="text" className="form-control" placeholder="Option Text" onChange={(e) => updateOptionText(opt.uid, e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={addOption}>+</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={() => deleteOptions(opt.uid)}>-</button>
                </div>
            </div>
        </>
        
    );
};

export default Options;