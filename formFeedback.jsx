import React from 'react';
import React{useState} from 'react';

export default function FeedbackForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  })}

  const max = 200;

  function handleChange(e) {
    const { name, value } = e.target
    if (name ==== "feedback" && value.length > max)
      return ...;
  }

return (
  <section className="card"></section>
   <h1 className="title">User Feedback</h1>
   <form className="form">
   <label className="field">
   <span>Name</span>
   <input
     type="text"
     name="name"
     value={formData.name}
     onChange={handleChange}
     placeholder="Frodo Baggins"
   </label>

   <label className="field">
   <span>Email</span>
   <input
     type="email"
     name="email"
     value={formData.email}
     onChange={handleChange}
     placeholder="to.mordon@eagles.com"
   </label>

   <label className="field">
   <span>Feedback</span>
   <input
     name="feedback"
     value={formData.feedback}
     onChange={handleChange}
     placeholder="Give us feedback here..."
     rows={5}
   </label>

   <button className="btn" type="submit" disabled={isIncomplete}
    
   </form>
