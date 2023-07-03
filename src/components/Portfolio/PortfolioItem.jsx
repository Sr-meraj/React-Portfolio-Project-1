/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const PortfolioItem = ({ item }) => {
    const { img, title, github, behance } = item
    return (
        <div>
            <article className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={img} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-btn'>
                    <a href={github} className="btn">Github</a>
                    <a href={behance} className="btn btn-primary">Behence</a>
                </div>
            </article>
        </div>
    );
};

export default PortfolioItem;