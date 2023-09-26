import React from "react";

import {SectionWrap, SectionTitle} from "./Section.styled"

 class Section extends React.Component {
    render (){
        return (
            <SectionWrap>
            <SectionTitle>Please leave a feedback</SectionTitle>
            {this.props.children}
            </SectionWrap>            
        )
    }
}

export default Section