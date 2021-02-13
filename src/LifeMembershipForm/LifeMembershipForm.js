import React, { Fragment } from "react";
import "./LifeMembershipForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RaisedButton from "material-ui/RaisedButton";
import Recaptcha from 'react-google-invisible-recaptcha';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import avatar from "../avatar-placeholder.png";
class LifeMemberShipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        middleName: "",
        lastName: "",
        gender: null,
        dob: "",
        bloodGroup: null,
        altNum: "",
        altNum1: "",
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
        reasonDiscontinue: "",
        message:"",
        messageSent: false
      },
      practitioner: false,
      medicalEducationTeacher: false,
      inService: false,
      researchWorker: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
    this.handleRegDateChange = this.handleRegDateChange.bind(this);
  }

  handleDobChange(d){
    this.setState({dob:d})
  }

  handleRegDateChange(d){
    this.setState({dateReg:d})
  }

  addNew = (event) => {
    event.preventDefault();
    var inputPaper = document.createElement("input");
    inputPaper.type = "text";
    inputPaper.name = "titleofPaper";
    inputPaper.className = "form-control form-control-sm  mt-2";
    inputPaper.placeholder = " ";
    inputPaper.onChange = `${this.handleChange}`;
    document.getElementById("addNewPaper").appendChild(inputPaper);
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "professionalStatus") {
      if (e.target.value === "practitioner") {
        this.setState({ practitioner: true });
        this.setState({ medicalEducationTeacher: false });
        this.setState({ inService: false });
        this.setState({ researchWorker: false });
      } else if (e.target.value === "medicalEducationTeacher") {
        this.setState({ practitioner: false });
        this.setState({ medicalEducationTeacher: true });
        this.setState({ inService: false });
        this.setState({ researchWorker: false });
      } else if (e.target.value === "inService") {
        this.setState({ practitioner: false });
        this.setState({ medicalEducationTeacher: false });
        this.setState({ inService: true });
        this.setState({ researchWorker: false });
      } else if (e.target.value === "researchWorker") {
        this.setState({ practitioner: false });
        this.setState({ medicalEducationTeacher: false });
        this.setState({ inService: false });
        this.setState({ researchWorker: true });
      }
    }
  }
  sendMessage=()=>{
    this.recaptcha.execute();
  }
  onResolved=()=>{
    this.setState({messageSent: true});
    console.log(this.state)
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const {
      firstName,
      middleName,
      lastName,
      gender,
      dob,
      bloodGroup,
      altNum,
      altNum1,
      resAdd,
      acadQual,
      examBody,
      yearPass,
      regNum,
      dateReg,
      nameofBoard,
      practitioner,
      scientificPub,
      titleofPaper,
      nimaBefore,
      branch,
      reasonDiscontinue,
    } = this.state.data;
    if (!isNaN(firstName)) {
      alert("Firstname contains number");
    }
    if (!isNaN(middleName)) {
      alert("Middle name contains number");
    }
    if (!isNaN(lastName)) {
      alert("Lastname contains number");
    }
    // console.log(this.state);
  }

  range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
  render() {

    var d = new Date();  
    const years = this.range(1940, 2021);
    console.log("range",years)
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      <MuiThemeProvider>

      <div className="Forms_first mr-5 ml-5">
        <div className="Forms_pic mb-1">
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
          <div className="form-row mb-3">
            <div className=" col-md-2 col-12">
              <input
                name="firstName"
                onChange={this.handleChange}
                className="form-control"
                type="text"
                placeholder=" "
                required
              ></input>
              <span className="Form__span">First Name</span>
            </div>
            <div className="col-md-2 col-12">
              <input
                name="middleName"
                onChange={this.handleChange}
                className="form-control"
                type="text"
                placeholder=" "
                required
              ></input>
              <span className="Form__span">Middle Name</span>
            </div>
            <div className="col-md-2 col-12">
              <input
                name="lastName"
                onChange={this.handleChange}
                className="form-control"
                type="text"
                placeholder=" "
                required
              ></input>
              <span className="Form__span">Last Name</span>
            </div>
            <div className="col-md-1 col-12">
              <select
                className="custom-select Form__select"
                id="inlineFormCustomSelectPref"
                name="gender"
                onChange={this.handleChange}
                required
              >
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="m">Male</option>
                <option value="f">Female</option>
                <option value="o">Others</option>
              </select>
            </div>
            <div className="col-md-2 col-12 mt-2 mt-md-0">
              {/* <input
                required
                type="date"
                name="dob"
                onChange={this.handleChange}
                className="form-control"
                placeholder=" "
              />
              <span className="Form__span">Date of birth</span> */}
              <DatePicker
                                renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled
                                }) => (
                                    <div
                                        style={{
                                            margin: 10,
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                            {"<"}
                                        </button>
                                        <select
                                            value={d.getYear(date)}
                                            onChange={({ target: { value } }) => changeYear(value)}
                                        >
                                            {years.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[d.getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                                changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                            {">"}
                                        </button>
                                    </div>
                                )}
                               
                                selected={this.state.dob}
                                onChange={this.handleDobChange}
                                className="personalDOB"
                                placeholderText="Date of Birth"
                            > 
                            </DatePicker>
            </div>
            <div className="col-md-1 col-12">
              <select
                className="custom-select Form__select"
                id="inlineFormCustomSelectPref"
                name="bloodGroup"
                required
                onChange={this.handleChange}
              >
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
            <div className="col-md-2 col-12">
              <input
                name="altNum"
                onChange={this.handleChange}
                className="form-control"
                type="text"
                id="mobilenum"
                placeholder=" "
                min="0"
                required
              ></input>
              <span className="Form__span">Alternate Number</span>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-10 col-12">
              <textarea
                className="form-control"
                name="resAdd"
                onChange={this.handleChange}
                id="exampleFormControlTextarea1"
                placeholder=" "
                rows="3"
                required
              ></textarea>
              <span className="Form__span">Residential Address</span>
            </div>
            <div className="col-md-2 col-12">
              <input
                name="altNum1"
                onChange={this.handleChange}
                className="form-control"
                type="number"
                min="0"
                placeholder=" "
                required
              ></input>
              <span className="Form__span">Alternate Number</span>
            </div>
          </div>

          <br />
          <h5 className="Forms_titleText">Qualification Details</h5>
          <br />
          <div className="form-row">
            <div className="col-md-5 col-12">
              <input
                type="text"
                name="acadQual"
                onChange={this.handleChange}
                className="form-control form-control-sm"
                placeholder=" "
                required
              ></input>
              <span className="Form__span">Academic Qualification</span>
            </div>
            <div className="col-md-5 col-12">
              <input
                type="text"
                name="examBody"
                className="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
              <span className="Form__span">Examining Body</span>
            </div>
            <div className="col-md-2 col-12">
              <input
                type="number"
                name="yearPass"
                className="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
                min="0"
              ></input>
              <span className="Form__span">Year of Passing</span>
            </div>
          </div>

          <br />
          <h5 className="Forms_titleText">Membership Details</h5>
          <br />
          <div className="form-row">
            <div className="col-md-2 col-12">
              <input
                type="text"
                name="regNum"
                className="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
              <span className="Form__span">Registration Number</span>
            </div>
            <div className="col-md-2 col-12 mt-2 mt-md-0">
              {/* <input
                type="date"
                name="dateReg"
                onChange={this.handleChange}
                className="form-control"
                placeholder=" "
                required
              />
              <span className="Form__span">Date Of Registration</span> */}
            <DatePicker
                                renderCustomHeader={({
                                    date,
                                    changeYear,
                                    changeMonth,
                                    decreaseMonth,
                                    increaseMonth,
                                    prevMonthButtonDisabled,
                                    nextMonthButtonDisabled
                                }) => (
                                    <div
                                        style={{
                                            margin: 10,
                                            display: "flex",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                            {"<"}
                                        </button>
                                        <select
                                            value={d.getYear(date)}
                                            onChange={({ target: { value } }) => changeYear(value)}
                                        >
                                            {years.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <select
                                            value={months[d.getMonth(date)]}
                                            onChange={({ target: { value } }) =>
                                                changeMonth(months.indexOf(value))
                                            }
                                        >
                                            {months.map(option => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>

                                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                            {">"}
                                        </button>
                                    </div>
                                )}
                               
                                selected={this.state.dateReg}
                                onChange={this.handleRegDateChange}
                                className="personalDOB"
                                placeholderText="Registration Date"
                            > 
                            </DatePicker>
            </div>
            <div className="col-md-5 col-12">
              <input
                type="text"
                name="nameofBoard"
                className="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              >
                {/* </input> */}
              </input>
              <span className="Form__span">
                Name of the Board/Council of Registration
              </span>
            </div>
          </div>
          <br />
          <h5 className="Forms_titleText">Professional Status</h5>
          <br />
          <div className="form-row">
            <div className="col-md-2 col-12">
              <select
                className="custom-select Form__select"
                id="inlineFormCustomSelectPref"
                name="professionalStatus"
                required
                onChange={this.handleChange}
              >
                <option value="" disabled selected>
                  Professional Status
                </option>
                <option value="practitioner">Practitioner</option>
                <option value="medicalEducationTeacher">
                  Medical Education Teacher
                </option>
                <option value="inService">In Service</option>
                <option value="researchWorker">Research Worker</option>
              </select>
            </div>
            {this.state.practitioner && (
              <Fragment>
                <div className="col-md-2 col-12">
                  <input
                    name="hospitalAttached"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span className="Form__span">Hospital Attached</span>
                </div>
                <div className="col-md-2 col-12">
                  <input
                    name="inWhatCapacity"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span className="Form__span">In What Capacity</span>
                </div>
              </Fragment>
            )}

            {this.state.medicalEducationTeacher && (
              <Fragment>
                <div className="col-md-5 col-12">
                  <input
                    name="nameOfInstitution"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span className="Form__span">Name of the Institution</span>
                </div>
                <div className="col-md-2 col-12">
                  <input
                    name="designation0"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span className="Form__span">Designation</span>
                </div>
              </Fragment>
            )}
            {this.state.inService && (
              <Fragment>
                <div className="col-md-2 col-12">
                  <input
                    name="designation1"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span className="Form__span">Designation</span>
                </div>
                <div className="col-md-2 col-12">
                  <input
                    name="nameOfEmployee"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span className="Form__span">Name of the Employee</span>
                </div>
              </Fragment>
            )}
            {this.state.researchWorker && (
              <Fragment>
                <div className="col-md-2 col-12">
                  <input
                    name="designation2"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span className="Form__span">Designation</span>
                </div>
                <div className="col-md-5 col-12">
                  <input
                    name="nameOfInstitution"
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                    placeholder=" "
                    required
                  ></input>
                  <span>Name of the Institution</span>
                </div>
              </Fragment>
            )}
          </div>

          <div className="form-row mt-md-3">
            <div className="col-md-2 col-12">
              <select
                className="custom-select Form__select"
                id="inlineFormCustomSelectPref"
                name="scientificPub"
                required
                onChange={this.handleChange}
              >
                <option value="" disabled selected>
                  Scientific Papers Published
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            <div className="col-md-5 col-12">
              <input
                type="text"
                name="titleofPaper"
                className="form-control form-control-sm"
                placeholder=" "
                onChange={this.handleChange}
                required
              ></input>
              <span className="Form__span">Title of Paper</span>
            </div>
            <button
              type="button"
              className="btn btn-link"
              style={{ color: "black" }}
              onClick={this.addNew}
            >
              + Add Another
            </button>
          </div>
          <div className="form-row">
            <div className="col-md-2 col-12"></div>
            <div id="addNewPaper" className="col-md-5 col-12"></div>
          </div>
          <br />
          <div className="form-row">
            <div className="col-md-2 col-12">
              <select
                className="custom-select Form__select"
                id="inlineFormCustomSelectPref"
                name="nimaBefore"
                onChange={this.handleChange}
                required
              >
                <option value="" disabled selected>
                  NIMA Member Before?
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>
            <div className="col-md-2 col-12">
              <select
                className="custom-select Form__select"
                id="inlineFormCustomSelectPref"
                name="branch"
                onChange={this.handleChange}
                required
              >
                <option value="" disabled selected>
                  Branch
                </option>
                <option value="y">Yes</option>
                <option value="n">No</option>
              </select>
            </div>

            <div className="col-md-5 col-12">
              <textarea
                className="form-control"
                name="reasonDiscontinue"
                placeholder=" "
                onChange={this.handleChange}
                rows="2"
                id="comment"
                required
              ></textarea>
              <span className="Form__span">Reason for Discontinue</span>
            </div>
          </div>

          <br />

          <div className="container">
            <div className="row">
              <div className="col text-center">
                <button className="button button1">View form</button>

                <button className="button button2" type="submit">
                  Submit form
                </button>
              </div>
            </div>
          </div>
          <RaisedButton
            label="Send"
            style={StyleSheet.button}
            onClick={this.sendMessage}
            />
            <Recaptcha
              ref={ref=>this.recaptcha=ref}
              sitekey="6LdV_00aAAAAAOhy0wsKIR1yCyOcOWK-7-X0J0zQ"
              onResolved={this.onResolved}
              />
        </form>
      </div>
            </MuiThemeProvider>

    );
  }
}

export default LifeMemberShipForm;
