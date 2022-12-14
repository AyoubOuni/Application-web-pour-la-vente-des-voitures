import React,{useEffect,useState} from 'react'
import './inscription.css'
import {AiFillCheckCircle,}  from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid';

function Inscription() {



  var [User, setuser] = useState({
    id:"",
    nom: "",
    prenom: "",
    email: "",
    password: "",
    adresse: "",
    cin: "",
    tel: "",
    photo:"",
    sexe:"",
    date_nissance: "",
  });
  var id;
const id_uuid=uuid();
id=id_uuid.substr(24);
  let history = useNavigate();
  function getRadioButtonValue() {
    var value= document.getElementsByName("sexe");      
    var selectValue= Array.from(value).find(radio => radio.checked);
        setuser({ ...User, sexe:selectValue.value});
       }
  let add_users = (e) => {
      e.preventDefault();
      
        
        
        
     
    let user = new FormData();

    console.log(User);
    user.append("id",id);
    user.append("sexe",User.sexe);
    user.append("photo",User.photo);
    user.append("nom", User.nom);
    user.append("prenom", User.prenom);
    user.append("email", User.email);
    user.append("tel", User.tel);
    user.append("adresse", User.adresse);
    user.append("cin", User.cin);
    user.append("date_nissance", User.date_nissance);
    user.append("password", User.password);
    fetch("http://localhost/Projet%20IHM/User/Inscription.php", {
      method: "POST",
      body: user,
    })
      .then((result) => {
        if (result.status != 200) {
          throw new Error("Bad Server Response");
        }
        return result.text();
      })

      // (D) SERVER RESPONSE
      .then((response) => {
        console.log(response);
      })

      // (E) HANDLE ERRORS - OPTIONAL
      .catch((error) => {
        console.log(error);
      })
      var close=document.getElementById('close');
      setTimeout(() => {
      close.click();
      }, "1200")
      setTimeout(() => {
        history(`/user_login`);
      }, "1400")
      ;};

        console.clear();

function ready(fn) {
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(fn, 1);
    document.removeEventListener('DOMContentLoaded', fn);
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {

  // Global Constants

  const progressForm = document.getElementById('progress-form');

  const tabItems  = progressForm.querySelectorAll('[role="tab"]')
      , tabPanels = progressForm.querySelectorAll('[role="tabpanel"]');

  let currentStep = 0;

  // Form Validation

  /*****************************************************************************
   * Expects a string.
   *
   * Returns a boolean if the provided value *reasonably* matches the pattern
   * of a US phone number. Optional extension number.
   */

  const isValidPhone = val => {
    const regex = new RegExp(/^([1-9]{8})$/);

    return regex.test(val);
  };
  const isValidPassword = val => {
    const regex = new RegExp(/^[A-Za-z]\w{7,14}$/);

    return regex.test(val);
  };
  const isValidCin = val => {
    const regex = new RegExp(/^([1-9]{8})$/);

    return regex.test(val);
  };
  const isvalidateDate= val =>{
        var regex = new RegExp(/(^0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4}$)/);
        return true;
}

  /*****************************************************************************
   * Expects a string.
   *
   * Returns a boolean if the provided value *reasonably* matches the pattern
   * of a real email address.
   *
   * NOTE: There is no such thing as a perfect regular expression for email
   *       addresses; further, the validity of an email address cannot be
   *       verified on the front end. This is the closest we can get without
   *       our own service or a service provided by a third party.
   *
   * RFC 5322 Official Standard: https://emailregex.com/
   */

  const isValidEmail = val => {
    const regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    return regex.test(val);
  };

  /*****************************************************************************
   * Expects a Node (input[type="text"] or textarea).
   */

  const validateText = field => {
    const val = field.value.trim();

    if (val === '' && field.required) {
      return {
        isValid: false
      };
    } else {
      return {
        isValid: true
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (select).
   */

  const validateSelect = field => {
    const val = field.value.trim();

    if (val === '' && field.required) {
      return {
        isValid: false,
        message: 'Please select an option from the dropdown menu.'
      };
    } else {
      return {
        isValid: true
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (fieldset).
   */

  const validateGroup = fieldset => {
    const choices = fieldset.querySelectorAll('input[type="radio"], input[type="checkbox"]');

    let isRequired = false
      , isChecked  = false;

    for (const choice of choices) {
      if (choice.required) {
        isRequired = true;
      }

      if (choice.checked) {
        isChecked = true;
      }
    }

    if (!isChecked && isRequired) {
      return {
        isValid: false,
        message: 'Please make a selection.'
      };
    } else {
      return {
        isValid: true
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (input[type="radio"] or input[type="checkbox"]).
   */

  const validateChoice = field => {
    return validateGroup(field.closest('fieldset'));
  };

  /*****************************************************************************
   * Expects a Node (input[type="tel"]).
   */

  const validatePhone = field => {
    const val = field.value.trim();

    if (val === '' && field.required) {
      return {
        isValid: false
      };
    } else if (val !== '' && !isValidPhone(val)) {
      return {
        isValid: false,
        message: 'Please enter a valid  phone number.'
      };
    } else {
      return {
        isValid: true
      };
    }
  };
  const validatePassword = field => {
    const val = field.value.trim();

    if (val === '' && field.required) {
      return {
        isValid: false
      };
    } else if (val !== '' && !isValidPassword(val)) {
      return {
        isValid: false,
        message: 'Please enter a valid  Password that contain between  6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.'
      };
    } else {
      return {
        isValid: true
      };
    }
  };
  const validatedate = field => {
    const val = field.value.trim();

    if (val === '' && field.required) {
      return {
        isValid: false
      };
    } else if (val !== '' && !isvalidateDate(val)) {
      return {
        isValid: false,
        message: 'Please enter a valid  date.'
      };
    } else {
      return {
        isValid: true
      };
    }
  };
  const validatecin = field => {
    const val = field.value.trim();

    if (val === '' && field.required) {
      return {
        isValid: false
      };
    } else if (val !== '' && !isValidCin(val)) {
      return {
        isValid: false,
        message: 'Please enter a valid  Cin number.'
      };
    } else {
      return {
        isValid: true
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (input[type="email"]).
   */

  const validateEmail = field => {
    const val = field.value.trim();

    if (val === '' && field.required) {
      return {
        isValid: false
      };
    } else if (val !== '' && !isValidEmail(val)) {
      return {
        isValid: false,
        message: 'Please enter a valid email address.'
      };
    } else {
      return {
        isValid: true
      };
    }
  };

  /*****************************************************************************
   * Expects a Node (field or fieldset).
   *
   * Returns an object describing the field's overall validity, as well as
   * a possible error message where additional information may be helpful for
   * the user to complete the field.
   */

  const getValidationData = field => {
    switch (field.type) {
      case 'text':
      case 'textarea':
        return validateText(field);
      case 'select-one':
        return validateSelect(field);
      case 'fieldset':
        return validateGroup(field);
      case 'radio':
      case 'checkbox':
        return validateChoice(field);
      case 'tel':
        return validatePhone(field);
      case 'number':
        return validatecin(field);
      case 'date':
        return validatedate(field);
      case 'password':
        return validatePassword(field);
      case 'email':
        return validateEmail(field);
      default:
        throw new Error(`The provided field type '${field.tagName}:${field.type}' is not supported in this form.`);
    }
  };

  /*****************************************************************************
   * Expects a Node (field or fieldset).
   *
   * Returns the field's overall validity based on conditions set within
   * `getValidationData()`.
   */

  const isValid = field => {
    return getValidationData(field).isValid;
  };

  /*****************************************************************************
   * Expects an integer.
   *
   * Returns a promise that either resolves if all fields in a given step are
   * valid, or rejects and returns invalid fields for further processing.
   */

  const validateStep = currentStep => {
    const fields = tabPanels[currentStep].querySelectorAll('fieldset, input:not([type="radio"]):not([type="checkbox"]), select, textarea');

    const invalidFields = [...fields].filter(field => {
      return !isValid(field);
    });

    return new Promise((resolve, reject) => {
      if (invalidFields && !invalidFields.length) {
        resolve();
      } else {
        reject(invalidFields);
      }
    });
  };

  // Form Error and Success

  const FIELD_PARENT_CLASS = 'form__field'
      , FIELD_ERROR_CLASS  = 'form__error-text';

  /*****************************************************************************
   * Expects a Node (fieldset) that contains any number of radio or checkbox
   * input elements, and a string representing the group's validation status.
   */

  function updateChoice(fieldset, status, errorId = '') {
    const choices = fieldset.querySelectorAll('[type="radio"], [type="checkbox"]');

    for (const choice of choices) {
      if (status) {
        choice.setAttribute('aria-invalid', 'true');
        choice.setAttribute('aria-describedby', errorId);
      } else {
        choice.removeAttribute('aria-invalid');
        choice.removeAttribute('aria-describedby');
      }
    }
  }

  /*****************************************************************************
   * Expects a Node (field or fieldset) that either has the class name defined
   * by `FIELD_PARENT_CLASS`, or has a parent with that class name. Optional
   * string defines the error message.
   *
   * Builds and appends an error message to the parent element, or updates an
   * existing error message.
   *
   * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
   */

  function reportError(field, message = 'Please complete this required field.') {
    const fieldParent = field.closest(`.${FIELD_PARENT_CLASS}`);

    if (progressForm.contains(fieldParent)) {
      let fieldError   = fieldParent.querySelector(`.${FIELD_ERROR_CLASS}`)
        , fieldErrorId = '';

      if (!fieldParent.contains(fieldError)) {
        fieldError = document.createElement('p');

        if (field.matches('fieldset')) {
          fieldErrorId = `${field.id}__error`;

          updateChoice(field, true, fieldErrorId);
        } else if (field.matches('[type="radio"], [type="checkbox"]')) {
          fieldErrorId = `${field.closest('fieldset').id}__error`;

          updateChoice(field.closest('fieldset'), true, fieldErrorId);
        } else {
          fieldErrorId = `${field.id}__error`;

          field.setAttribute('aria-invalid', 'true');
          field.setAttribute('aria-describedby', fieldErrorId);
        }

        fieldError.id = fieldErrorId;
        fieldError.classList.add(FIELD_ERROR_CLASS);

        fieldParent.appendChild(fieldError);
      }

      fieldError.textContent = message;
    }
  }

  /*****************************************************************************
   * Expects a Node (field or fieldset) that either has the class name defined
   * by `FIELD_PARENT_CLASS`, or has a parent with that class name.
   *
   * https://www.davidmacd.com/blog/test-aria-describedby-errormessage-aria-live.html
   */

  function reportSuccess(field) {
    const fieldParent = field.closest(`.${FIELD_PARENT_CLASS}`);

    if (progressForm.contains(fieldParent)) {
      const fieldError = fieldParent.querySelector(`.${FIELD_ERROR_CLASS}`);

      if (fieldParent.contains(fieldError)) {
        if (field.matches('fieldset')) {
          updateChoice(field, false);
        } else if (field.matches('[type="radio"], [type="checkbox"]')) {
          updateChoice(field.closest('fieldset'), false);
        } else {
          field.removeAttribute('aria-invalid');
          field.removeAttribute('aria-describedby');
        }

        fieldParent.removeChild(fieldError);
      }
    }
  }

  /*****************************************************************************
   * Expects a Node (field or fieldset).
   *
   * Reports the field's overall validity to the user based on conditions set
   * within `getValidationData()`.
   */

  function reportValidity(field) {
    const validation = getValidationData(field);

    if (!validation.isValid && validation.message) {
      reportError(field, validation.message);
    } else if (!validation.isValid) {
      reportError(field);
    } else {
      reportSuccess(field);
    }
  }

  // Form Progression

  /*****************************************************************************
   * Resets the state of all tabs and tab panels.
   */

  function deactivateTabs() {
    // Reset state of all tab items
    tabItems.forEach(tab => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
    });

    // Reset state of all panels
    tabPanels.forEach(panel => {
      panel.setAttribute('hidden', '');
    });
  }

  /*****************************************************************************
   * Expects an integer.
   *
   * Shows the desired tab and its associated tab panel, then updates the form's
   * current step to match the tab's index.
   */

  function activateTab(index) {
    const thisTab   = tabItems[index]
        , thisPanel = tabPanels[index];

    // Close all other tabs
    deactivateTabs();

    // Focus the activated tab for accessibility
    thisTab.focus();

    // Set the interacted tab to active
    thisTab.setAttribute('aria-selected', 'true');
    thisTab.removeAttribute('tabindex');

    // Display the associated tab panel
    thisPanel.removeAttribute('hidden');

    // Update the current step with the interacted tab's index value
    currentStep = index;
  }

  /*****************************************************************************
   * Expects an event from a click listener.
   */

  function clickTab(e) {
    activateTab([...tabItems].indexOf(e.currentTarget));
  }

  /*****************************************************************************
   * Expects an event from a keydown listener.
   */

  function arrowTab(e) {
    const { keyCode, target } = e;

    /**
     * If the current tab has an enabled next/previous sibling, activate it.
     * Otherwise, activate the tab at the beginning/end of the list.
     */

    const targetPrev  = target.previousElementSibling
        , targetNext  = target.nextElementSibling
        , targetFirst = target.parentElement.firstElementChild
        , targetLast  = target.parentElement.lastElementChild;

    const isDisabled = node => node.hasAttribute('aria-disabled');

    switch (keyCode) {
      case 37: // Left arrow
        if (progressForm.contains(targetPrev) && !isDisabled(targetPrev)) {
          activateTab(currentStep - 1);
        } else if (!isDisabled(targetLast)) {
          activateTab(tabItems.length - 1);
        } break;
      case 39: // Right arrow
        if (progressForm.contains(targetNext) && !isDisabled(targetNext)) {
          activateTab(currentStep + 1);
        } else if (!isDisabled(targetFirst)) {
          activateTab(0);
        } break;
    }
  }

  /*****************************************************************************
   * Expects a boolean.
   *
   * Updates the visual state of the progress bar and makes the next tab
   * available for interaction (if there is a next tab).
   */

  // Immediately attach event listeners to the first tab (happens only once)
  tabItems[0].addEventListener('click', clickTab);
  tabItems[0].addEventListener('keydown', arrowTab);

  function handleProgress(isComplete) {
    const currentTab = tabItems[currentStep]
        , nextTab    = tabItems[currentStep + 1];

    if (isComplete) {
      currentTab.setAttribute('data-complete', 'true');

      /**
       * Verify that there is, indeed, a next tab before modifying or listening
       * to it. In case we've reached the last item in the tablist.
       */

      if (progressForm.contains(nextTab)) {
        nextTab.removeAttribute('aria-disabled');

        nextTab.addEventListener('click', clickTab);
        nextTab.addEventListener('keydown', arrowTab);
      }

    } else {
      currentTab.setAttribute('data-complete', 'false');
    }
  }

  // Form Interactions

  /*****************************************************************************
   * Returns a function that only executes after a delay.
   *
   * https://davidwalsh.name/javascript-debounce-function
   */

  const debounce = (fn, delay = 500) => {
    let timeoutID;

    return (...args) => {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      timeoutID = setTimeout(() => {
        fn.apply(null, args);
        timeoutID = null;
      }, delay);
    };
  };

  /*****************************************************************************
   * Waits 0.5s before reacting to any input events. This reduces the frequency
   * at which the listener is fired, making the errors less "noisy". Improves
   * both performance and user experience.
   */

  progressForm.addEventListener('input', debounce(e => {
    const { target } = e;

    validateStep(currentStep).then(() => {

      // Update the progress bar (step complete)
      handleProgress(true);

    }).catch(() => {

      // Update the progress bar (step incomplete)
      handleProgress(false);

    });

    // Display or remove any error messages
    reportValidity(target);
  }));

  /****************************************************************************/

  progressForm.addEventListener('click', e => {
    const { target } = e;

    if (target.matches('[data-action="next"]')) {
      validateStep(currentStep).then(() => {

        // Update the progress bar (step complete)
        handleProgress(true);

        // Progress to the next step
        activateTab(currentStep + 1);

      }).catch(invalidFields => {

        // Update the progress bar (step incomplete)
        handleProgress(false);

        // Show errors for any invalid fields
        invalidFields.forEach(field => {
          reportValidity(field);
        });

        // Focus the first found invalid field for the user
        invalidFields[0].focus();

      });
    }

    if (target.matches('[data-action="prev"]')) {

      // Revisit the previous step
      activateTab(currentStep - 1);

    }
  });
});


  return (
        <div class="mx-auto container mt-5">

        <form id="progress-form" class="p-4 progress-form" action="http://localhost/Projet%20IHM/User/Login.php" lang="en" novalidate>
      
          <div class="d-flex justify-content-center mb-3 sm:mb-5 progress-form__tabs" role="tablist">
            <button id="progress-form__tab-1"  style={{width:'210px'}}class="flex-1  px-0 pt-2 progress-form__tabs-item" type="button" role="tab" aria-controls="progress-form__panel-1" aria-selected="true">
              <span class="d-block step" aria-hidden="true">Step 1 <span class="sm:d-none">of 3</span></span>
              Personal Information
            </button>
            <button id="progress-form__tab-2" style={{width:'170px'}} class="flex-1 px-0 pt-2 progress-form__tabs-item" type="button" role="tab" aria-controls="progress-form__panel-2" aria-selected="false" tabindex="-1" aria-disabled="true">
              <span class="d-block step" aria-hidden="true">Step 2 <span class="sm:d-none">of 3</span></span>
              Account Information
            </button>
            <button id="progress-form__tab-3" class="flex-1 px-0 pt-2 progress-form__tabs-item" type="button" role="tab" aria-controls="progress-form__panel-3" aria-selected="false" tabindex="-1" aria-disabled="true">
              <span class="d-block step" aria-hidden="true">Step 3 <span class="sm:d-none">of 3</span></span>
              Picture
            </button>
          </div>
         
          <section id="progress-form__panel-1" style={{width:'450px'}} role="tabpanel" aria-labelledby="progress-form__tab-1" tabindex="0">
            <div class="ms-3">
              <div class="mt-3 sm:mt-0 form__field">
                <label for="prenom">
                  First name
                  <span data-required="true" aria-hidden="true"></span>
                </label>
                <input id="prenom" type="text" name="first-name"    onChange={(e) => {setuser({ ...User, prenom: e.target.value });}} autocomplete="given-name" required />
              </div>
      
              <div class="mt-3 sm:mt-0 form__field">
                <label for="nom">
                  Last name
                  <span data-required="true" aria-hidden="true"></span>
                </label>
                <input id="nom" type="text" onChange={(e) => {setuser({ ...User, nom: e.target.value });}}  name="last-name" autocomplete="family-name" required />
              </div>
           
      
            <div class="mt-3 form__field">
              <label for="addresse">
                Addresse
                <span data-required="true" aria-hidden="true"></span>
              </label>
              <input id="addresse" type="text" name="address" onChange={(e) => {setuser({ ...User, adresse: e.target.value });}}  autocomplete="email" inputmode="adresse" required />
            </div>
      
      
            <div class="mt-3 form__field">
              <label for="phone-number">
                Phone number 
                <span data-required="true" aria-hidden="true"></span>
              </label>
              <input id="phone-number" type="tel" onChange={(e) => {setuser({ ...User, tel: e.target.value });}}  name="phone-number" autocomplete="tel" inputmode="tel" required />
            </div>
      
            <div class="mt-3 form__field">
              <label for="cin">
                Cin number 
                <span data-required="true" aria-hidden="true"></span>
              </label>
              <input id="cin" type="number" name="cin" autocomplete="cin" onChange={(e) => {setuser({ ...User, cin: e.target.value });}}  inputmode="cin" required />
            </div>
            <div class="mt-3 form__field">
              <label for="sexe">
                Sexe  <span data-required="true" aria-hidden="true"></span>
              </label>
              <div class="row d-flex justify-content-center position-relative " style={{right:'30px'}}>
      <div class="form-check col-sm-2 ">
  <input class="form-check-input" type="radio" name="sexe"   value="Homme" id="flexRadioDefault1" />
  <label class="form-check-label position-relative" style={{left:'11px',bottom:'20px'}} for="flexRadioDefault1">Homme</label>
</div>

<div class="form-check col-sm-1 ms-5 ">
  <input class="form-check-input" type="radio" value="Femme" name="sexe"     id="flexRadioDefault2" />
  <label class="form-check-label position-relative" style={{left:'11px',bottom:'20px'}} for="flexRadioDefault2">Femme  </label>
</div>
</div>
</div>

<div class="mt-3 form__field">
              <label for="date">
                Date de nissance 
                <span data-required="true" aria-hidden="true"></span>
              </label>
              <input id="date" type="date" name="datenissance" onChange={(e) => {setuser({ ...User, date_nissance: e.target.value });}}     required />

            
                      </div>

            <div class="d-flex justify-content-end mt-5">
              <button type="button" onClick={()=> history(`/user_login`)} className="btn btn-lg btn-secondary me-1" style={{fontSize:"18px"}}>
                Back
              </button>
              <button type="button" onClick={getRadioButtonValue} className="btn btn-lg btn-primary ms-2" style={{fontSize:"18px"}} data-action="next">
                Continue
              </button>
            </div>
            </div>
          </section>
          
          <section id="progress-form__panel-2" style={{width:'450px'}} role="tabpanel" aria-labelledby="progress-form__tab-2" tabindex="0" hidden>
          
          <br/>
            <div class="mt-3 form__field">
              <label for="e-mail">
                E-mail
                <span data-required="true" aria-hidden="true"></span>
              </label>
              <input id="e-mail" type="email" name="email" onChange={(e) => {setuser({ ...User, email: e.target.value });}}  autocomplete="email" required />
            </div>
            <div class="mt-3 form__field">
              <label for="motdepasse">
                Password
                <span data-required="true" aria-hidden="true"></span>
              </label>
              <input id="motdepasse" type="password" name="password"  onChange={(e) => {setuser({ ...User, password: e.target.value });}}  autocomplete="password" required />
              
            </div>

           
          
           <div class="d-flex  justify-content-end mt-5">
            <div class="d-flex  sm:flex-row align-items-center justify-center sm:justify-end mt-4 sm:mt-5 mt-5">
              <button type="button" class=" sm:mt-0 button--simple btn btn-lg btn-secondary" style={{fontSize:"18px"}} data-action="prev">
                Back
              </button>
             
              <button type="button"  className="btn btn-lg btn-primary ms-3" style={{fontSize:"18px"}} data-action="next">
                Continue
              </button>
            </div>
            </div>
          </section>
         
          <section id="progress-form__panel-3" style={{width:'450px'}} role="tabpanel" aria-labelledby="progress-form__tab-3" tabindex="0" hidden>
         <br/>

          <div class="mt-5 form__field">
              <label for="picture">
                Profile Picture 
              </label>
              <input id="picture" type="file" name="picture"  onChange={(e) => {setuser({ ...User, photo: e.target.files[0] });}}    />

              <br/>
            </div>
            <br/>
            <br/>
            <div class="d-flex  justify-content-end mt-5">
            <div class="d-flex  sm:flex-row align-items-center justify-center sm:justify-end mt-4 sm:mt-5 mt-5">
              <button type="button" class=" sm:mt-0 button--simple btn btn-lg btn-secondary" style={{fontSize:"18px"}} data-action="prev">
                Back
              </button>
             
              <button type="submit" onClick={add_users} className="btn btn-lg btn-primary ms-3"style={{fontSize:"18px"}}  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Continue
              </button>
            </div>
            </div>
    

<div class="modal fade  " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog mt-5  " style={{color:'white' }}>
    <div class="modal-content h-100">
      <div class="modal-header bg-success  d-flex justify-content-center" style={{fontSize:"18px",fontWeight:"bold"}}>
      <AiFillCheckCircle className='me-1'/><span>User created successfully!</span>
      <button type="button" id='close'class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>
    </div>
  </div>
</div>         </section>
     
         
      
        </form>
      
      </div>
  )
}

export default Inscription
