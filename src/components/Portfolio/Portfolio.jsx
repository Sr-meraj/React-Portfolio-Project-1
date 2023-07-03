import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

import './portfolio.css';
import PortfolioItem from './PortfolioItem';

const data = [
    {
        "id": 1,
        "img": IMG1,
        "title": "Item 1",
        "github": "https://github.com/Sr-meraj", "behance": "https://behance.net/item1"
    },

    {
        "id": 2,
        "img": IMG2,
        "title": "Item 2",
        "github": "https://github.com/Sr-meraj", "behance": "https://behance.net/item2"
    },

    {
        "id": 3,
        "img": IMG3,
        "title": "Item 3",
        "github": "https://github.com/Sr-meraj", "behance": "https://behance.net/item3"
    },

    {
        "id": 4,
        "img": IMG4,
        "title": "Item 4",
        "github": "https://github.com/Sr-meraj", "behance": "https://behance.net/item4"
    },

    {
        "id": 5,
        "img": IMG5,
        "title": "Item 5",
        "github": "https://github.com/Sr-meraj", "behance": "https://behance.net/item5"
    },

    { "id": 6, "img": IMG6, "title": "Item 6", "github": "https://github.com/Sr-meraj", "behance": "https://behance.net/item6" }
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(item => <PortfolioItem key={item.id} item={item} />)
                }
            </div>
        </section>
    );
};

export default Portfolio;