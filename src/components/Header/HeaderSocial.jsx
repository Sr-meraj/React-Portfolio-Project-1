/* eslint-disable react/jsx-no-target-blank */

import { BsGithub, BsLinkedin, BsTwitter, } from "react-icons/bs"

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedln.com" target='_blank'>
                <BsLinkedin />
            </a>
            <a href="https://twitter.com" target='_blank'>
                <BsTwitter />
            </a>
            <a href="https://github.com" target='_blank'>
                <BsGithub />
            </a>
        </div>
    );
};

export default HeaderSocial;