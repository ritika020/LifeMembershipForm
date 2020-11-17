import React from "react";
import "./LifeMembershipForm.css";
import avatar from "../avatar-placeholder.png";
class LifeMemberShipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: null,
      dob: "",
      bloodGroup: null,
      altNum: "",
      resAdd: "",
      acadQual: "",
      examBody: "",
      yearPass: "",
      regNum: "",
      dateReg: "",
      nameofBoard: "",
      practitioner: null,
      scientificPub: null,
      titleofPaper: "",
      nimaBefore: null,
      branch: null,
      reasonDiscontinue: ""


    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });


    console.log(this.state);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { altNum }= this.state.altNum;
    if(altNum=="")
    {
      document.getElementById("messages").innerHTML="**PLEASE FILL MOBILE NO.";
      return false;
    }
    if(isNaN(altNum))
    {
      document.getElementById("messages").innerHTML="**ENTER NUMERIC VALUES ONLY";
      return false;
    }
    if(altNum.length<10)
    {
      document.getElementById("messages").innerHTML="**MOBILE NO. MUST HABE 10 DIGITS ONLY";
      return false;
    }
    
    if(altNum.length>10)
    {
      document.getElementById("messages").innerHTML="**MOBILE NO. MUST HAVE 10 DIGITS ONLY";
      return false;
    }
    

    const { firstName }= this.state.firstName;
    const { middleName }= this.state.middleName;
    const { lastName }= this.state.lastName;
    if(!isNaN(firstName))
    {
      document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY";
      return false;
    }
    if(!isNaN(middleName))
    {
      document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY";
      return false;
    }
    if(!isNaN(lastName))
    {
      document.getElementById("messages").innerHTML="**ENTER CHARACTER VALUES ONLY";
      return false;
    }
    console.log(this.state);
  }
  render() {
    return (
      <div class="Forms_first mr-5 ml-5">
        <div class="Forms_pic mb-1">
          <div className="form-row mt-4">
            <div className="col-md-2  no-gutters">
              <img src={avatar} alt="Avatar" className="Forms_avatar"></img>
            </div>
            <div className="col-md-6 offset-md-2 ">
              <p style={{ fontSize: "30px" }}>
                NIMA LIFE MEMBERSHIP APPLICATION FORM
              </p>
              <div className="row justify-content-center">
                4140 Parker Rd, Allentown, New Mexico 31134
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <h4 className="Forms_title Forms_titleText mb-4">Personal details</h4>
          <div class="form-row mb-3">
            <div class=" col-md-2 col-6">
              <input
              name="firstName"
              onChange={this.handleChange}
                class="form-control"
                type="text"
                placeholder=" "
                
                required
              ></input>
              <span>First Name</span>
            </div>
            <div class="col-sm-2">
              <input
              name="middleName"
              onChange={this.handleChange}
                class="form-control"
                type="text"
                placeholder=" "
                required
              ></input>
              <span>Middle Name</span>
            </div>
            <div class="col-sm-2">
              <input
              name="lastName"
              onChange={this.handleChange}
                class="form-control"
                type="text"
                placeholder=" "
                required
              ></input>
              <span>Last Name</span>
            </div>
            <div class="col-sm-1">
              <select class="custom-select " id="inlineFormCustomSelectPref" name="gender"   onChange={this.handleChange}>
              
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Others</option>
              </select>
            </div>
            <div className="col-sm-2">
              <input type="date" name="dob"   onChange={this.handleChange} className="form-control" placeholder=" " />
              <span>Date of birth</span>
            </div>
            <div className="col-sm-1">
              <select className="custom-select " id="inlineFormCustomSelectPref" name="bloodGroup"   onChange={this.handleChange}>
                <option value="" disabled selected>
                  Blood Group
                </option>
                <option value="m">A+</option>
                <option value="f">A-</option>
                <option value="o">B+</option>
                <option value="m">B-</option>
                <option value="f">AB+</option>
                <option value="o">AB-</option>
                <option value="o">O+</option>
                <option value="o">O-</option>
              </select>
            </div>
            <div class="col-sm-2">
              <input
                name="altNum"
                onChange={this.handleChange}
                class="form-control"
                type="text"
                id="mobilenum"
                placeholder=" "
                min="0"
                pattern="\d{10}"
                required
              ></input>
              <span>Alternate Number</span>
              <span id="messages"></span>
            </div>
          </div>
          <div class="form-row">
            <div class="col-sm-10">
              <textarea
                class="form-control"
                name="resAdd"
                onChange={this.handleChange}
                id="exampleFormControlTextarea1"
                placeholder=" "
                rows="3"
                required
              ></textarea>
               <span>Residential Address</span>
            </div>
            <div className="col-sm-2">
              <input
                class="form-control"
                type="number"
                min="0"
                pattern="\d{10}"
                placeholder=" "
                required
              ></input>
                 <span>Alternate Number</span>
            </div>
          </div>

          <br />
          <h5 className="Forms_titleText">Qualification Details</h5>
          <br />
          <div class="form-row">
            <div class="col-sm-5">
              <input
                type="text"
                name="acadQual"
                onChange={this.handleChange}
                class="form-control form-control-sm"
                placeholder=" "
                required
              ></input>
                 <span>Academic Qualification</span>
            </div>
            <div class="col-sm-5">
              <input
                type="text"
                name="examBody"
                class="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
                 <span>Examining Body</span>
            </div>
            <div class="col-sm-2">
              <input
                type="text"
                name="yearPass"
                class="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
                <span>Year of Passing</span>
            </div>
          </div>

          <br />
          <h5 className="Forms_titleText">Membership Details</h5>
          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <input
                type="text"
                name="regNum"
                class="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
              <span>Registration Number</span>
            </div>
            <div class="col-sm-2">
              <input
                type="text"
                name="dateReg"
                class="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
              <span>Date of Registration</span>
            </div>
            <div class="col-sm-5">
              <input
                type="text"
                name="nameofBoard"
                class="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              >

                {/* </input> */}
              </input>
              <span>Name of the Board/Council of Registration</span>
            </div>
            <br />
          </div>
          <br />
          <h5 className="Forms_titleText">Professional Status</h5>
          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref" name="practitioner"  onChange={this.handleChange}>
                <option value="" disabled selected>
                  Practitioner
                </option>
                <option value="a">A</option>
                <option value="b">B</option>
              </select>

            </div>
            
                     </div>

          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref" name="scientificPub" onChange={this.handleChange}>
                <option value="" disabled selected>
                  Scientific Papers Published
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            <div class="col-sm-5">
              <input
                type="text"
                name="titleofPaper"
                class="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
              <span>Title of Paper</span>
            </div>
            <button
              type="button"
              class="btn btn-link"
              style={{ color: "black" }}
            >
              + Add Another
            </button>
          </div>
          <br />
          <div class="form-row">
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref" name="nimaBefore" onChange={this.handleChange}>
                <option value="" disabled selected>
                  NIMA Member Before?
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>
            <div class="col-sm-2">
              <select class="custom-select " id="inlineFormCustomSelectPref" name="branch" onChange={this.handleChange}>
                <option value="" disabled selected>
                  Branch
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            <div class="col-sm-5">
              <textarea
                class="form-control"
                name="reasonDiscontinue"
                placeholder=" "
                onChange={this.handleChange}
                rows="2"
                id="comment"
                required
              ></textarea>
              <span>Reason for Discontinue</span>
            </div>
          </div>

          <br />

          <div class="container">
            <div class="row">
              <div class="col text-center">
                <button class="button button1">View form</button>

                <button class="button button2" type="submit">Submit form</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LifeMemberShipForm;
