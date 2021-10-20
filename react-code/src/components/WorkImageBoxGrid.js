import React from 'react'
// import { debounce } from 'lodash';

var defaultFolder = '../../images/works_images/';

function WorkImageBoxGrid({src1, src2}){
    return(
        <div className="work-img--cardsize--wrap">
            <img className="work-img--cardsize" src={defaultFolder+src1} alt="Work"/>
            <img className="work-img--cardsize" src={defaultFolder+src2} alt="Work"/>
        </div>
    )
}

export default WorkImageBoxGrid;
