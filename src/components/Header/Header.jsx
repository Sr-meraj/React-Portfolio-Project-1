/* eslint-disable react/no-unescaped-entities */
import CTA from './CTA'
import './Header.css'
import me from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Siamur Rahman Meraj</h1>
                <h5 className="text-light">full stack developer</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={me} alt="" />
                </div>

                <a href="#contact" className="scroll__down"> scroll down </a>


            </div>
        </header>
    )
}

export default Header
