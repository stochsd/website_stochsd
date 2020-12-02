import React from 'react';
import lab1 from './Lab-Files/LAB-1_Structure_and_behaviour.pdf';
import lab2 from './Lab-Files/LAB-2_Model_fitting_and_Optimization.pdf';
import lab3 from './Lab-Files/LAB-3_Deterministic_vs_Stochastic_Model_Building.pdf';
import lab4 from './Lab-Files/LAB-4_Stochastic_Modelling_of_Uncertainties.pdf';
import lab5 from './Lab-Files/LAB-5_Time_Handling.pdf';


const labs = () => {
    const lab_list = [
        {"filepath": lab1, "desc": "Structure of behaviour"},
        {"filepath": lab2, "desc": "Model fitting and Optimization"},
        {"filepath": lab3, "desc": "Deterministic vs Stochastic Model Building"},
        {"filepath": lab4, "desc": "Stoachstic Modelling of Uncertainties"},
        {"filepath": lab5, "desc": "Time Handling"}
    ];

    return (
        <div>
            <h1>StochSD Labs</h1>
            <ul>
                {lab_list.map((lab, index) => {
                    return (<li>
                        <a href={lab["filepath"]} target="_blank">Lab{index+1}</a> - {lab["desc"]}
                    </li>);
                })}
            </ul>
        </div>
    );
}

export default labs;