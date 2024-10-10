import React,{useState} from "react";

export default function RegistrForm() {
  const [information, setInformation] = useState({
    name: "",
    phonenumber: "",
    joindate: "",
    plan : "",
  });
  function handleChange(event) {
    const {name,value}=event.target;
    setInformation((previnfo)=>{
        return{
        ...previnfo,
        [name]:value
  }});
}
  
  function handlesubmit(event){
    event.preventDefault();
    console.log(information)
  };
  return (
    
    <form onSubmit={handlesubmit} className=" flex flex-col  w-3/4 h-3/4   ">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={information.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          name="phonenumber"
          value={information.phonenumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Join Date</label>
        <input
          type="date"
          name="joindate"
          value={information.joindate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Plan</label>
        <select
          name="plan"
          value={information.plan}
          onChange={handleChange}
        >
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
 
  );
}


