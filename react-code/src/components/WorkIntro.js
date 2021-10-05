import React from 'react'

function WorkIntro(props) {
    return (
        <div className="work-intro">
            <div className="work-intro-info">
                <div className="work-intro-info__title-box">
                    <h3 className="work-intro-info__label">{props.label}</h3>
                    <h2 className="work-intro-info__title">{props.title}</h2>
                </div>
                <div className="work-intro-info-details">
                    <div className="work-intro-info-details__date">
                        <p>{props.date}</p>
                    </div>
                    <div className="work-intro-info-details__field">
                        <p>{props.field1}</p>
                        <p>{props.field2}</p>
                        <p>{props.field3}</p>
                    </div>
                    <div className="work-intro-info-details__client">
                        <p>{props.client1}</p>
                        <p>{props.client2}</p>
                        <p>{props.client3}</p>
                    </div>
                </div>
            </div>
            <div className="work-intro-img-wrap">
                <figure>
                    <img className="work-intro-img" src={props.src} alt={props.title}/>
                </figure>
            </div>
            <div className="work-intro-statement">
                <p>{props.statement}</p>
            </div>
        </div>
    )
}

export default WorkIntro;
