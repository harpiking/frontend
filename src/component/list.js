import React, {useState} from 'react';


const List = (props) => {
  const { data } = props;
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("");
  const [searchedRecord, setSearchedRecord] = useState([]);
  const [filteredRecord, setFilteredRecord] = useState([]);

  const performSearch = (searchText) =>{
        const searchedData = data?.records?.profiles?.filter((ele)=>{
            let name = ele.FirstName.toLowerCase()
            return name.includes(searchText.toLowerCase())
        })
    setSearchedRecord(searchedData);
    return searchedData

}

const handleChange = (e)=>{
    const searchTerm = e.target.value
    setSearchText(searchTerm);
    performSearch(searchTerm)
}
const performFilter = (filter)=>{
    const filteredRecord = data?.records?.profiles?.filter((ele)=> {
        return ele?.Gender?.includes(filter)
    })
    console.log(5)
    setFilteredRecord(filteredRecord)
    console.log(6)
    return filteredRecord
}


const handleFilter = (e)=>{
    const record = e.target.value
    setFilter(record);
    performFilter(record)
}
const recordData = searchText ? searchedRecord : filter ? filteredRecord : data?.records?.profiles

if (!recordData || recordData?.length === 0){
return <p> No repos, sorry </p>
}

  return (
    <div className="returned">
    <div className='head'>
    <h1 className="logo">eMED</h1>
    <input
    className="input"
    type = "text"
    placeholder= "Search..."
    value = {searchText}
    onChange={handleChange}
    />
    </div>

     <div className="headNext">
     <h2 className="cus">Customer Information</h2>
     <select className="filter"
    onChange={handleFilter}
     value = {filter}
     >
      <option value="">Filter By: Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Prefer To Skip">Prefer to skip</option>
      </select>
     </div>

    <div className='grid'>
      {recordData.map((items, index) => {
        if(index < 20){
          return (
            <div key={items.MacAddress} className='list'>
              <h3 className="cNo"><mark>Card Number: {index + 1}</mark></h3>
            <div>
              <h2 className='repo-text'> <strong>First Name:</strong> {items.FirstName}  </h2>
              <h2 className='repo-text'> <strong>Last Name:</strong> {items.LastName} </h2>
               <h2 className='repo-text'> <strong>UserName:</strong> {items.UserName} </h2>
              <h2 className='repo-text'> <strong>Gender:</strong> {items.Gender} </h2>
              <h2 className='repo-text'> <strong>Phone Number:</strong> {items.PhoneNumber} </h2>
              <h2 className='repo-text'> <strong>Payment Method:</strong> {items.PaymentMethod} </h2>
               <h2 className='repo-text'> <strong>Credit Card Number:</strong> {items.CreditCardNumber} </h2>
               <h2 className='repo-text'> <strong>Credit Card Type:</strong> {items.CreditCardType} </h2>
              <h2 className='repo-text'> <strong>URL:</strong> {items.URL}</h2>
              <h2 className='repo-text'> <strong>Domain Name:</strong> {items.DomainName} </h2>
              <h2 className='repo-text'> <strong>Mac Address:</strong> {items.MacAddress} </h2>
              <h2 className='repo-text'> <strong>Last Login:</strong> {items.LastLogin} </h2>
              <h2 className='repo-text'> <strong>Latitude:</strong> {items.Latitude} </h2>
              <h2 className='repo-text'> <strong>Longitude:</strong> {items.Longitude} </h2>
              </div>
            </div>
          );
        }
      })}

    </div>
    </div>
  );
};

export default List;
