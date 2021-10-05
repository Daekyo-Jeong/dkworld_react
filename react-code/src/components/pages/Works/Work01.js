import React from 'react'
import WorkIntro from '../../WorkIntro';
import WorkImageBox from '../../WorkImageBox';
import WorkTextBox from '../../WorkTextBox';
import '../../WorkContents.css';

function Work01() {
    return (
        <>
            <WorkIntro
                label="develpopment"
                title="dk_w_rld"
                date="2021.09 - ing"
                field1="Web development"
                field2="UX/UI design"
                field3=""
                client1="Self"
                src="../../images/dk_w_rld_logo1.jpg"
                statement="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Nulla quibusdam officia autem sequi, nihil voluptate animi 
                eaque impedit nemo, at aspernatur ducimus sed omnis amet
                vero saepe illo, provident in?"
            ></WorkIntro>
            <WorkImageBox
            size="over"
            src="../../images/img-9.jpeg"
            ></WorkImageBox>
            <WorkTextBox
            size="big"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nulla quibusdam officia autem sequi, nihil voluptate animi 
            eaque impedit nemo, at aspernatur ducimus sed omnis amet
            vero saepe illo, provident in?"
            ></WorkTextBox>
            <WorkImageBox
            size="max"
            src="../../images/img-9.jpeg"
            ></WorkImageBox>
            <WorkTextBox
            size="md"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Nulla quibusdam officia autem sequi, nihil voluptate animi 
            eaque impedit nemo, at aspernatur ducimus sed omnis amet
            vero saepe illo, provident in?"
            ></WorkTextBox>
            <WorkImageBox
            size="card"
            src="../../images/img-9.jpeg"
            ></WorkImageBox>
             <WorkImageBox
            size="card"
            src="../../images/img-9.jpeg"
            ></WorkImageBox>
        </>
    )
}

export default Work01
