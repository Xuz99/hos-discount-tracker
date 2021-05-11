import React from 'react';

const Form = () => {
    return (    
        <div className="App">
            <section className=" ">
            <h1 className="">HOS 007 Discount Tracker</h1>
            <form action="#" method="POST">
                <label htmlFor="first_name" className="">
                First name
                </label>
                <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="given-name"
                className=""
                />
                <button
                type="submit"
                className=""
                >
                Save
                </button>
            </form>
            </section>
        </div>
    )
}

export default Form;


