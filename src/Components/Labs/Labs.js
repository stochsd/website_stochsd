import React from 'react';
import lab1 from './Lab-Files/LAB-1_Structure_and_behaviour.pdf';
import lab2 from './Lab-Files/LAB-2_Model_fitting_and_Optimization.pdf';
import lab3 from './Lab-Files/LAB-3_Deterministic_vs_Stochastic_Model_Building.pdf';
import lab4 from './Lab-Files/LAB-4_Stochastic_Modelling_of_Uncertainties.pdf';
import lab5 from './Lab-Files/LAB-5_Time_Handling.pdf';
import lecture0 from "./Lectures/L0_INTRODUCTION_&_LICENSE.docx"
import lecture1 from "./Lectures/L1_Basic_Concepts_Introduction.pptx"
import lecture2 from "./Lectures/L2_Modelling_in_StochSD.pptx"
import lecture3 from "./Lectures/L3_Important_Techniques.pptx"
import lecture4 from "./Lectures/L4_Randomness.pptx"
import lecture5 from "./Lectures/L5_Stochastic_Modelling.pptx"
import lecture6 from "./Lectures/L6_Statistical_Output_Analysis.pptx"
import lecture7 from "./Lectures/L7_Exp_Design_&_Var_Red.pptx"
import lecture8 from "./Lectures/L8_Modelling_Project.pptx"
import lecture9 from "./Lectures/L9_Simulation_vs_Speculation.pptx"
import ExternLink from "./../ExternLink";


const labs = () => {
    const lecture_list = [
        {"filepath": lecture0, "desc": "Introduction & License \t(about the course, suggestions and License)"},
        {"filepath": lecture1, "desc": "Basic Concepts"},
        {"filepath": lecture2, "desc": "Modelling in StochSD"},
        {"filepath": lecture3, "desc": "Important Techniques"},
        {"filepath": lecture4, "desc": "Randomness"},
        {"filepath": lecture5, "desc": "Stochastic Modelling"},
        {"filepath": lecture6, "desc": "Stochastic Outputs"},
        {"filepath": lecture7, "desc": "Experimental Design and Variance Reduction"},
        {"filepath": lecture8, "desc": "The Modelling and Simulation Project"},
        {"filepath": lecture9, "desc": "Simulation vs. Speculation"},
    ]
    const lab_list = [
        {"filepath": lab1, "desc": "Structure of behaviour"},
        {"filepath": lab2, "desc": "Model fitting and Optimization"},
        {"filepath": lab3, "desc": "Deterministic vs Stochastic Model Building"},
        {"filepath": lab4, "desc": "Stochastic Modelling of Uncertainties"},
        {"filepath": lab5, "desc": "Time Handling"}
    ];

    return (
        <div>
            <h1>Course Material - Model Building and Simulation</h1>
            <h2>Lectures</h2>
            <ul>
                {lecture_list.map((lab, index) => {
                    return (<li>
                        <ExternLink to={lab["filepath"]}>Lecture {index}</ExternLink> - <span style={{"white-space": "pre"}}>{lab["desc"]}</span>
                    </li>);
                })}
            </ul>
            <h2>Laboratory Exercises</h2>
            <ul>
                {lab_list.map((lab, index) => {
                    return (<li>
                        <ExternLink to={lab["filepath"]}>Lab{index+1}</ExternLink> - {lab["desc"]}
                    </li>);
                })}
            </ul>
        </div>
    );
}

export default labs;
