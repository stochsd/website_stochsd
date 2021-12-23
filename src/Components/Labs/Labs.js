import React from 'react';
import lab1 from './Lab-Files/LAB-1_Structure_and_behaviour.pdf';
import lab2 from './Lab-Files/LAB-2_Model_fitting_and_Optimization.pdf';
import lab3 from './Lab-Files/LAB-3_Deterministic_vs_Stochastic_Model_Building.pdf';
import lab4 from './Lab-Files/LAB-4_Stochastic_Modelling_of_Uncertainties.pdf';
import lab5 from './Lab-Files/LAB-5_Time_Handling.pdf';
import ExternLink from "./../ExternLink";


const labs = () => {
    const lecture_list = [
        {"filepath": "#", "desc": "Introduction & License"},
        {"filepath": "#", "desc": "Basic Concepts"},
        {"filepath": "#", "desc": "Modelling in StochSD"},
        {"filepath": "#", "desc": "Important Techniques"},
        {"filepath": "#", "desc": "Randomness"},
        {"filepath": "#", "desc": "Stochastic Modelling"},
        {"filepath": "#", "desc": "Stochastic Outputs"},
        {"filepath": "#", "desc": "Experimental Design and Variance Reduction"},
        {"filepath": "#", "desc": "The Modelling and Simulation Project"},
        {"filepath": "#", "desc": "Simulation vs. Speculation"},
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
            <h1>Course Material</h1>
            <h2>Lectures</h2>
            <ul>
                {lecture_list.map((lab, index) => {
                    return (<li>
                        <ExternLink to={lab["filepath"]}>Lecture {index}</ExternLink> - {lab["desc"]}
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