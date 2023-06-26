import React from 'react'
import Notes from "./Notes"

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Example select</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
        </form>
      </div>
      <Notes/>
    </div>
  )
}

export default Home
