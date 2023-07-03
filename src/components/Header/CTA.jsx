/* eslint-disable react/no-unescaped-entities */

import Cv from "../../assets/cv.pdf"

const CTA = () => {
    return (
        <div className="cta">
            <a href={Cv} download className="btn">Download CV</a>
            <a href="#contact" className="btn-primary btn">Let's Talk</a>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;