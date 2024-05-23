import React, { Fragment } from "react";
import ContactComp from "../components/PageSections/Contact/ContactComponent";

const Contact = () =>{
    return (
        <Fragment>
            <div id='ContactSectionScroll'>
                {/* <AboutComponent /> */}
                <ContactComp />
            </div>
        </Fragment>
    )
}

export default Contact;