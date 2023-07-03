import { BiCheck } from 'react-icons/bi';
import './Service.css'
const Service = () => {
    return (
        <section id='service'>
            <h5>what I Offer</h5>
            <h2>Services</h2>

            <div className='container services__container' >
                <article className="service">
                    <div className="service__head" >
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>

                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX  */}
                <article className="service">
                    <div className="service__head" >
                        <h3>Web Devlopment</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>

                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Web development */}

                <article className="service">
                    <div className="service__head" >
                        <h3>Web Devlopment</h3>
                    </div>
                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>

                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className='service__icon' />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF content  */}

            </div>
        </section >
    );
};

export default Service;