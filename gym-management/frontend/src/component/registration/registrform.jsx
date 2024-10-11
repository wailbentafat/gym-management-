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
    
    <form onSubmit={handlesubmit} className="flex flex-col  bg-white rounded-lg shadow-xl border-white border-2 w-full h-full  grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6  p-4">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={information.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          name="phonenumber"
          value={information.phonenumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label>Join Date</label>
        <input
          type="date"
          name="joindate"
          value={information.joindate}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
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
      <div></div>
      <div className="flex aleign-items-right justify-end">
      <button type="submit" className="">Submit</button>
      <button type="reset"  className="">Reset</button>
      </div>
    </form>
 
  );
}


