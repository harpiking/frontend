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
    const filteredRecords = data?.records?.profile?.filter((ele)=> {
        let count = ele.filter.toLowerCase()
        return count.includes(filter.toLowerCase())
    })
    setFilteredRecord(filteredRecord)
    return filteredRecord
}


const handleFilter = (e)=>{
    const records = e.target.value
    setFilter(filter);
    performFilter(records)
}
const recordData = searchText ? searchedRecord : filter? filteredRecord : data?.records?.profiles

if (!recordData || recordData?.length === 0){
return <p> No repos, sorry </p>
}
console.log(data)

  return (
    <div>
    <input
    type = "text"
    placeholder= "Search"
    value = {searchText}
    onChange={handleChange}
    />

    <select
    class="filter"
    onChange={handleFilter}
    value = {filter}
    >
     <option value="">Filter By</option>
     <option value="Gender">Gender</option>
     <option value="Payment Method">payment Method</option>
     <option value="Credit Card Type">Credit Card Type</option>
     </select>

    <div className='grid'>
      {recordData.map((items, index) => {
        console.log(data.records.profiles)
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
