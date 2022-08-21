function Card({cardLink, cardImage, cardTitle, cardText}){

    let shortCardText;

    if(cardText.length > 90){
        shortCardText = cardText.slice(0,90).concat("...");
    }else{
        shortCardText = cardText;
    };

    return(
        <article className="card">
            <a href={cardLink} className="card__header">
                <img src={cardImage} alt="article image" className="card__header__image" />
            </a>
            <div className="card__body">
                <h3 className="card__body__title">
                    <a href={cardLink} className="card__body__title__link">{cardTitle}</a>
                </h3>
                <p className="card__body__text">{shortCardText}</p>
                <a href={cardLink} className="btn btn--primary">Read More</a>
            </div>
        </article>
    );
}

export default Card;