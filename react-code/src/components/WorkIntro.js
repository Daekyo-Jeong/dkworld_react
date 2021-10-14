import React from 'react'

function WorkIntro({label, title, date, field1, field2, field3, client1, client2, client3, src, statement}) {
    return (
        <div className="work-intro">
            <div className="work-intro-info">
                <div className="work-intro-info__title-box">
                    <h3 className="work-intro-info__label">{label}</h3>
                    <h2 className="work-intro-info__title">{title}</h2>
                </div>
                <div className="work-intro-info-details">
                    <div className="work-intro-info-details__date">
                        <p>{date}</p>
                    </div>
                    <div className="work-intro-info-details__field">
                        <p>{field1}</p>
                        <p>{field2}</p>
                        <p>{field3}</p>
                    </div>
                    <div className="work-intro-info-details__client">
                        <p>{client1}</p>
                        <p>{client2}</p>
                        <p>{client3}</p>
                    </div>
                </div>
            </div>
            <div className="work-intro-img-wrap">
                <figure>
                    <img className="work-intro-img" src={src} alt={title}/>
                </figure>
            </div>
            <div className="work-intro-statement">
                <p>{statement}</p>
            </div>
        </div>
    )
}

export default WorkIntro;
