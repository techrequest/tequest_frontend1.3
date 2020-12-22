import React, { useState } from 'react';



const RegisterScreen = () => {

    const [ state, setState ] = useState(
        {
            
            showErrors: false,
            loading: false,
            registeredSuccess: false
        }
    )
    // Undefined only before return
    let firstNameField;
    let lastNameField;
    let emailField;
    let passwordField;
    let phoneField;
    let addressLine1Field
    // let addressLine2Field;
    // let addressLine3Field;
    let cityField;
    let stateField;
    let zipCodeField;
    let countryField;
    // let preferredTimeField;
    // let isUnderageField;
    let tcsCheckBox;
    
    const registerUser = () => {
        const errors = [];
        // Validate the user's input
        if(firstNameField.value.length === 0) {
            errors.push("Please enter your first name!");
        }
        if(lastNameField.value.length === 0) {
            errors.push("Please enter your last name!");
        }
        if(emailField.value.length === 0) {
            errors.push("Please enter your email!");
        }
        if(passwordField.value.length === 0) {
          errors.push("Please enter your password!");
      }
        if(countryField.value.length === 0) {
            errors.push("Please choose your country!");
        }
        if(tcsCheckBox.checked === false) {
            errors.push("You need to accept terms & conditions.");
        }

        // If there are errors
        if(errors.length > 0) {
            setState(
                {
                    loading: false,
                    showErrors: true,
                    
                    errors: errors,
                    registeredSuccess: false
                }
            )
      
        } 
        // If no errors
        else {
            setState(
                {
                    loading: true,
                    showErrors: false,                    
                    errors: null,
                    registeredSuccess: false
                }
            );

            // Capture all of user's response
            // 1. Create an object called formData
            // 2. For every field, add index and value to formData
            const formData = {
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                email: emailField.value,
                password: passwordField.value,
                phoneNumber: phoneField.value,
                addressLine1: addressLine1Field.value,
                // addressLine2: addressLine2Field.value,
                // addressLine3: addressLine3Field.value,
                city: cityField.value,
                state: stateField.value,
                zipCode: zipCodeField.value,
                country: countryField.value,
                // preferredTime: preferredTimeField.value,
                // isUnderage: isUnderageField.value
            };

            // 4. Send to backend
            fetch(
                'http://localhost:8080/users/register',
                {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )
            // First, convert string from backend to json
            .then(
                (backendResponse) => backendResponse.json()
            )
            // Then, we can read the json from backend
            .then(
                (json) => {
                    console.log(json);
                    setState(
                        {
                            loading: false,
                            showErrors: false,
                            errors: null,
                            registeredSuccess: true
                        }
                    );
                }
            )
            // If promise did not resolve
            .catch(
                (error) => {
                    console.log('an error occured', error)
                }
            )

        }
    }


    if( state.registeredSuccess === true ) {
        return(
            <div className="App">
                <div 
                style={{maxWidth: 600}}
                className="container mt-5 mb-5">
                    <div className="alert alert-success">
                        Account registered succesfully!
                    </div>

                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        )
    }
    else {
        return (
          
            <div className="container mt-5 mb-5" 
            
            style={
                {
                    maxWidth: "40em"
                }
            }>
            <div className="mycustom-form">
            <h3><b>Welcome to TeQuest!!</b></h3>
            <hr/>
             Registration details:<br/><br/>
            {
                
                state.showErrors === true && 
                <div className="error-messages alert alert-danger">
                    <ol>
                    { 
                        state.errors.map(
                            (error) =>
                                <li>
                                    {error}
                                </li>
                        ) 
                    }
                    </ol>
                </div>
            }
            
            <label>Firstname *</label>
            <input 
            ref={(elem) => firstNameField = elem}
            className="field form-control" name="firstName" type="text" />

            <label>Lastname *</label>
            <input 
            ref={(elem) => lastNameField = elem}
            className="field form-control" name="lastName" type="text" />

            <label>Email *</label>
            <input 
            ref={(elem) => emailField = elem}
            className="field form-control" name="email" type="text" />

            <label>Password *</label>
            <input 
            ref={(elem) => passwordField = elem}
            className="field form-control" name="password" 
            autocomplete="off" type="password" />

            <label>Phone Number </label>
            <input 
            ref={(elem) => phoneField = elem}
            className="field form-control" name="phone" type="text" />         

            <label> Country</label>
            <input 
            ref={(elem) => countryField = elem}
            className="field form-control" name="country" type="text" />
           
            <label> State</label>
            <input 
            ref={(elem) => stateField = elem}
            className="field form-control" name="state" type="text" />
           
            <label> City</label>   
            <input 
            ref={(elem) => cityField = elem}
            className="field form-control" name="city" type="text" />

          <label> ZipCode </label>
            <input 
            ref={(elem) => zipCodeField = elem}
            className="field form-control" name="zipcode" type="text" />

           <label> Address Line*</label>
            <input 
            ref={(elem) => addressLine1Field = elem}
            className="field form-control" name="addressLine1one" type="text" />            
           
            {/* <label> Address Line</label>
            <input 
            ref={(elem) => addressLine2Field = elem}
            className="field form-control" name="addressLine2one" type="text" />            
           
            <label> Address Line</label> 
            <input 
            ref={(elem) => addressLine3Field = elem}
            className="field form-control" name="addressLine3one" type="text" />            
            
                                 
             <label> Preferred working Time</label>
             <input 
            ref={(elem) => preferredTimeField = elem}
            className="field form-control" name="addressLine1one" type="text" />            
           
            <label> 18 years & Above ?</label>
            <input 
            ref={(elem) => isUnderageField = elem}
            className="field form-control" name="isUnderage" type="text" />             */}
           
            <label>Upload your profile picture</label>
            <input className="field form-control" id="photo" name="file" 
            type="file" multiple="multiple"/>
           

            <label>Do you agree to terms &amp; conditions? *</label>
            <input 
            ref={(elem) => tcsCheckBox = elem}
            className="checkbox" name="termsConditions" type="checkbox" /> Yes
           

            {
                !state.loading && !state.registeredSuccess &&
                <button 
                    className="btn mycustom-btn"
                    onClick={registerUser}
                    style={
                        {
                            padding: "10px", 
                            fontSize: "16px"
                        }
                    }>
                        Click to Register 
                </button>
            }
         </div>
            {

                state.loading &&
                <div>Loading...</div>
            }
            
        </div>
        )
    }
}

export default RegisterScreen;