'use client'
import { useState } from "react";
function Summary({ formData, age, step }) {
    console.log("formData", formData);
    console.log("age", age);
    console.log("step", step);

    return (
        <div id="summary">
            <h2>Summary</h2>
            <p>Form Type: {formData.formType} </p>
            <p>Age: {formData.age} </p>

            
            {formData.formType=="Form A" && <p>DC Shows: {formData.showName} </p>}
            
            {formData.formType=="Form B" && <p>Marvel Shows: {formData.showName} </p>}

            

            

        </div>
    );
}
export default Summary;
