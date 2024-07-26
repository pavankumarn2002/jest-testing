import React from 'react'

export default function Application() {
  return (
    <div className="container">
        <h1>Job Application Heading</h1>
        <h2>Section 1</h2>
        <p>All Fields Are Mandatory</p>
        <span title="close">X</span>
        <img src=" " alt="image"/>
        <div data-testId="custom-element">Custom Element</div>
        <form>
            <div className="flex-col col">
                <label htmlFor="name">Name</label>
                <input className="input" type="text" id="name" name="name" value="viswas"/>
            </div>
            <div className="flex-col col">
                <label htmlFor="bio">Bio</label>
                <textarea className="text-area" id="bio" name="bio"></textarea>
            </div>
            <div className="flex-col col">
                <label htmlFor="job-location">Job Location</label>
                <select id="job-location">
                    <option value="">Select Option</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="Au">Australia</option>
                </select>
            </div>
            <div className="col">
                <label>
                <input className="input-check" type="checkbox" id="terms"/>I agree to the terms & conditions
                </label>
            </div>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}
