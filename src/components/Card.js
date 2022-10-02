export default function Card({cardLink, cardMetas, cardImage, cardTitle, cardText}){
    let shortCardText;

    if(cardText.length > 90){
        shortCardText = cardText.slice(0,90).concat("...");
    }else{
        shortCardText = cardText;
    };

    return(
        <article className="card">
            <div className="card__header">
                <a href={cardLink} className="card__header__link">
                    <img src={cardImage} alt="article image" className="card__header__link__image" />
                </a>
            </div>
            <div className="card__body">
                {
                    cardMetas.map((eachMeta, eachMetaIndex)=>(
                        <ul className="card__body__list" key={eachMetaIndex}>
                            {
                                eachMeta.article_tags__name.map((eachTag, eachTagIndex)=>(
                                    <li key={eachTagIndex} className="card__body__list__item">
                                        <a href="#!" className="card__body__list__item__link">{eachTag + " " + (eachTagIndex + 1)}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    ))
                }
                <h3 className="card__body__title">
                    <a href={cardLink} className="card__body__title__link">{cardTitle}</a>
                </h3>
                <p className="card__body__text">{shortCardText}</p>
                <a href={cardLink} className="btn btn--primary">Read More</a>
            </div>
        </article>
    );
}