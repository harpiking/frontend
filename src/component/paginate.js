import React, {Component} from 'react'
import ReactPaginate from 'react-paginate';
import '../App.css'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
  async  receivedData() {
                const data = await data.records.profiles;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = data.map((items, index) => {
                  console.log(data.records.profiles)
                    return (
                      <React.Fragment>
                      <div key={items.MacAddress} className='list'>
                      <div>
                      <h3 className="cNo"><mark>Card Number: {index + 1}</mark></h3>
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
                        </React.Fragment>
                    );
                    this.setState({
                        pageCount: Math.ceil(data.profiles.records.length / this.state.perPage),

                        postData
                    })
                });


    }
  handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div>
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}
