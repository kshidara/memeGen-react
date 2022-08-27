import React from "react"

export default function Form() {

    // the more inputs you have it makes sense to save your state in an object 
    const [formData, setFormData] = React.useState(
                    {
                        firstName: "", 
                        lastName: "", 
                        email: "", 
                        comments: "",
                        isFriendly: true,
                        employment: "",
                        favColor: ""

                    })
   
    //console.log(formData.favColor)

    function handleChange(event){

        const {name, value, type, checked} = event.target

        //callback function
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                // square brackets allow to overcome syntax problem
                [name]: type === "checkbox" ? checked : value

            }
        })

        //console.log(firstName)  //check that state is changing with every key stroke

    }

    function handleSubmit(event){
        //on every change within the form, React has been updating the state, so you could just pass in formData
        event.preventDefault() //prevents page from refreshing to default values
        //submitToApi(formData)
        console.log(formData)


    }

    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"   //matches state name in object
                value={formData.firstName}  //value = {state of your value}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}

   
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email} //By adding value, react is controlling the change in value for the inputs. 
                                       // So state is in driver seat telling input box what to display 

   
            />
            <textarea
                onChange={handleChange}
                name="comments" 
                placeholder="Comments"
                value={formData.comments}
            />
            <br />
            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name= "isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current Employment status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value= "unemployed"
                    //see below
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}

                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value= "part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}

                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}

                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
            >
                <option value="">--  Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />

            <button>Submit</button>

        </form>
    )
}



// //controlled components: single source of truth where state you're maintaining in component is the single state of truth
// //checked ={line 93}. Initially the value of employment is blank. When you choose a button, handleChange
// //function runs and sets new state. Within the setFormData function, it checks if type is a checkbox
// // and since it's not, the [name = employment] : so uses value key , not checked. Then when we change state,
// //React re-renders the form and checks to see if current formData.employment is unemployed. Since in our case it is, checked = true for unemployment input
// // and false for other options..... so it only allows 1 radio button to be selected  


// // 1. In a vanilla JS app, at what point in the form submission
// //    process do you gather all the data from the filled-out form?

// // >> when you've filled the entirety of the form and hit submit. Or right before it's submitted
   


// // 2. In a React app, when do you gather all the data from
// //    the filled-out form?

// // >> As the form is being filled out. The component that handles entire form has an overarching REACT STATE 



// // 3. Which attribute in the form elements (value, name, onChange, etc.)
// //    should match the property name being held in state for that input?
// // >> name property. we use it to figure out what property in state we want to change
   


// // 4. What's different about a saving the data from a checkbox element
// //    vs. other form elements?

// // >> We use value property for others and checked property for a checkbox



// // 5. How do you watch for a form submit? How can you trigger
// //    a form submit?
// // >> onSubmit handler on 'form' element. and button click will trigger the submit rather than an input tag submit which is the old way



// export default function App() {
    
//     /**
//      * Challenge: Connect the form to local state
//      * 
//      *
//      * 3. When the user clicks "Sign up", check if the 
//      *    password & confirmation match each other. If
//      *    so, log "Successfully signed up" to the console.
//      *    If not, log "passwords to not match" to the console.
//      * 4. Also when submitting the form, if the person checked
//      *    the "newsletter" checkbox, log "Thanks for signing
//      *    up for our newsletter!" to the console.
//      */


     
//     const [formData, setFormData] = React.useState({
//                 email: "",
//                 password: "",
//                 confirmPW: "",
//                 newsletter: true

//      })


//     console.log(formData)

//     function handleChange(event) {

//         const {name, value, type, checked} = event.target

//         setFormData(prevFormData => {
//             return {

//                 ...prevFormData,
//                 [name] : type === "checkbox" ? checked : value

//             }
//         })


//     }
    
//     function handleSubmit(event) {
//         event.preventDefault()
//         if(formData.password === formData.passwordConfirm) {
//             console.log("Successfully signed up")
//         } else {
//             console.log("Passwords do not match")
//             return
//         }
        
//         if(formData.joinedNewsletter) {
//             console.log("Thanks for signing up for our newsletter!")
//         }

//     }
    
//     return (
//         <div className="form-container">
//             <form className="form" onSubmit={handleSubmit}>
//                 <input 
//                     type="email" 
//                     placeholder="Email address"
//                     className="form--input"
//                     onChange={handleChange}
//                     name="email"
//                     value={formData.email}
//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Password"
//                     className="form--input"
//                     onChange={handleChange}
//                     name="password"
//                     value={formData.password}

//                 />
//                 <input 
//                     type="password" 
//                     placeholder="Confirm password"
//                     className="form--input"
//                     onChange={handleChange}
//                     name="confirmPW"
//                     value={formData.confirmPW}

//                 />
                
//                 <div className="form--marketing">
//                     <input
//                         id="okayToEmail"
//                         type="checkbox"
//                         checked= {formData.newsletter}
//                         name="newsletter"
//                         onChange={handleChange}
//                     />
//                     <label htmlFor="okayToEmail">I want to join the newsletter</label>
//                 </div>
//                 <button className="form--submit"> Sign up </button>
//             </form>
//         </div>
//     )
// }




