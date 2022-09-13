import React from 'react';

const TypeSelector = ({qType, setQType}) => {
    return (
        <div className="col-md-6 offset-md-3 col-12">
            <select className="custom-select"  value={qType} onChange={(e) => setQType(parseInt(e.target.value))}>
                <option value="0">Select Question Type</option>
                <option value="1">Multi-Select</option>
                <option value="2">Single-Select</option>
            </select>
        </div>
    );
};

export default TypeSelector;