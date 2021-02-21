import React, { Fragment } from "react";
import "./LifeMembershipForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RaisedButton from "material-ui/RaisedButton";
import Recaptcha from "react-google-invisible-recaptcha";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import avatar from "../avatar-placeholder.png";
import { sendLifemembershipForm } from "../lifeform/lifeform";
import { MdCancel } from "react-icons/md";
class LifeMemberShipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: null,
      dateOfBirth: "",
      bloodGroup: null,
      contactNo: "",
      alternateNumber: "",
      address: "",
      qualification: "",
      examiningBody: "",
      yearOfPassing: "",
      registrationNumber: "",
      dateOfRegistration: "",
      nameOfBoard: "",
      professionalStatus: {
        practitioner: {
          hospitalAttached: "",
          capacity: "",
        },
        medicalEduTeacher: {
          nameOfInstitution: "",
          designation: "",
        },
        inService: {
          designation: "",
          nameOfEmployee: "",
        },
        researchWorker: {
          designation: "",
          nameOfInstitution: "",
        },
      },
      // practitioner: null,
      paperPublished: "",
      titleOfPaper: [],
      nimaMemberBefore: null,
      branch: null,
      reasonForDiscontinue: "",
      message: "",
      messageSent: false,
      selectedProfessionalStatus: "",

      practitioner: false,
      medicalEduTeacher: false,
      inService: false,
      researchWorker: false,
      count: 0,
      selectYear: "2021",
      selectMonth: "January",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.range = this.range.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
    this.handleRegDateChange = this.handleRegDateChange.bind(this);
  }
  handleDobChange(d) {
    this.setState({ dateOfBirth: d });
  }

  handleRegDateChange(d) {
    this.setState({ dateOfRegistration: d });
    // this.handleTitlePaper = this.handleTitlePaper.bind(this);
  }

  addNew = (event) => {
    event.preventDefault();
    this.setState({ count: this.state.count + 1 });

    var divPaper = document.createElement("div");
    divPaper.id = `Div${this.state.count}`;
    divPaper.className = "row ml-2";
    var removePaper = document.createElement("p");
    removePaper.className = "col-1 ml-2 paperInput";
    removePaper.innerHTML = "Remove";
    // removePaper.type = "button";
    // removePaper;
    removePaper.onclick = (e) => {
      e.preventDefault();
      let a = e.target.parentNode.getAttribute("id");
      let child = document.getElementById(a).childNodes;
      var paperToDelete = child[0].value;
      var papers = this.state.titleOfPaper;
      var index = papers.indexOf(paperToDelete);
      papers.splice(index, 1);
      console.log(papers);
      document.getElementById(a).remove();
    };

    var inputPaper = document.createElement("input");
    inputPaper.type = "text";
    inputPaper.name = "titleOfPaper";
    inputPaper.placeholder = " ";
    inputPaper.id = "titleOfPaper";
    inputPaper.className = "form-control form-control-sm mt-2 col-10";
    // inputPaper.onchange = `${this.handleTitlePaper}`;
    inputPaper.onchange = (e) => {
      e.preventDefault();
      // var joined = this.state.titleOfPaper;
      // joined.push(e.target.value);
      // console.log(joined);
      // this.setState({ titleOfPaper: joined });
      // console.log(this.state.titleOfPaper);
    };

    document.getElementById("addNewPaper").appendChild(divPaper);
    document.getElementById(`Div${this.state.count}`).appendChild(inputPaper);
    document.getElementById(`Div${this.state.count}`).appendChild(removePaper);
  };

  removeNew = (e) => {};
  handleTitlePaper = (event) => {
    event.preventDefault();
    // console.log("erer");
    // var joined = this.state.titleOfPaper;
    // joined.push(event.target.value);
    // console.log(joined);
    // this.setState({ titleOfPaper: joined });
    // console.log(this.state.titleOfPaper);
  };
  handleChange(e) {
    if (e.target.name === "professionalStatus") {
      this.setState({
        selectedProfessionalStatus: e.target.value,
      });
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
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  }
  handlepractitioner = (event) => {
    event.preventDefault();

    // var practitioner = {...this.state.practitioner}
    if (event.target.name === "hospitalAttached")
      // practitioner.hospitalAttached=event.target.value
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          practitioner: {
            ...prevstate.professionalStatus.practitioner,
            hospitalAttached: event.target.value,
          },
        },
      }));
    else if (event.target.name === "capacity")
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          practitioner: {
            ...prevstate.professionalStatus.practitioner,
            capacity: event.target.value,
          },
        },
      }));
  };

  handlemedicalEduTeacher = (event) => {
    event.preventDefault();
    if (event.target.name === "nameOfInstitution")
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          medicalEduTeacher: {
            ...prevstate.professionalStatus.medicalEduTeacher,
            nameOfInstitution: event.target.value,
          },
        },
      }));
    else if (event.target.name === "designation")
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          medicalEduTeacher: {
            ...prevstate.professionalStatus.medicalEduTeacher,
            designation: event.target.value,
          },
        },
      }));
  };

  handleinService = (event) => {
    event.preventDefault();
    if (event.target.name === "nameOfEmployee")
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          inService: {
            ...prevstate.professionalStatus.inService,
            nameOfEmployee: event.target.value,
          },
        },
      }));
    else if (event.target.name === "designation")
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          inService: {
            ...prevstate.professionalStatus.inService,
            designation: event.target.value,
          },
        },
      }));
  };

  handleresearchWorker = (event) => {
    event.preventDefault();
    if (event.target.name === "nameOfInstitution")
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          researchWorker: {
            ...prevstate.professionalStatus.researchWorker,
            nameOfInstitution: event.target.value,
          },
        },
      }));
    else if (event.target.name === "designation")
      this.setState((prevstate) => ({
        ...prevstate,
        professionalStatus: {
          ...prevstate.professionalStatus,
          researchWorker: {
            ...prevstate.professionalStatus.researchWorker,
            designation: event.target.value,
          },
        },
      }));
  };

  sendMessage = () => {};
  onResolved = () => {
    this.setState({ messageSent: true });
    // console.log(this.state);
  };

  handleSubmit(e) {
    e.preventDefault();
    // this.recaptcha.execute();
    console.log(this.state);
    var formData = new FormData(e.target);
    var divPapersFirst = document.getElementById("titleOfPaper");
    var joined = this.state.titleOfPaper;
    joined.push(divPapersFirst.value);
    // console.log(divPapersFirst.value);
    var divPapers = document.getElementById("addNewPaper").childNodes;
    // console.log(divPapers);
    for (let i = 0; i < divPapers.length; i++) {
      let childnodes = divPapers[i].childNodes;
      // console.log(childnodes[0].value);
      joined.push(childnodes[0].value);
    }
    console.log(joined);
    this.setState({
      titleOfPaper: joined,
    });
    const data = {};
    data["firstName"] = formData.get("firstName") || this.state.firstName;
    data["middleName"] = formData.get("middleName") || this.state.middleName;
    data["lastName"] = formData.get("lastName") || this.state.lastName;
    data["gender"] = formData.get("gender") || this.state.gender;
    data["DateOfBirth"] = formData.get("dateOfBirth") || this.state.dateOfBirth;
    data["bloodGroup"] = formData.get("bloodGroup") || this.state.bloodGroup;
    data["contactNo"] = formData.get("contactNo") || this.state.contactNo;
    data["alternateNumber"] =
      formData.get("alternateNumber") || this.state.alternateNumber;
    data["address"] = formData.get("address") || this.state.address;
    data["qualification"] =
      formData.get("qualification") || this.state.qualification;
    data["examiningBody"] =
      formData.get("examiningBody") || this.state.examiningBody;
    data["yearOfPassing"] =
      formData.get("yearOfPassing") || this.state.yearOfPassing;
    data["registrationNumber"] =
      formData.get("registrationNumber") || this.state.registrationNumber;
    data["dateOfRegistration"] =
      formData.get("dateOfRegistration") || this.state.dateOfRegistration;
    data["nameOfBoard"] = formData.get("nameOfBoard") || this.state.nameOfBoard;
    let professionalStatus = this.state.selectedProfessionalStatus;
    if (professionalStatus === "practitioner") {
      data[
        "professionalStatus.practitioner"
      ] = this.state.professionalStatus.practitioner;
    }
    if (professionalStatus === "medicalEducationTeacher") {
      data[
        "professionalStatus.medicalEduTeacher"
      ] = this.state.professionalStatus.medicalEduTeacher;
    }
    if (professionalStatus === "inService") {
      data[
        "professionalStatus.inService"
      ] = this.state.professionalStatus.inService;
    }
    if (professionalStatus === "researchWorker") {
      data[
        "professionalStatus.researchWorker"
      ] = this.state.professionalStatus.researchWorker;
    }
    let paperPub = formData.get("paperPublished") || this.state.paperPublished;
    if (paperPub === "y") {
      data["titleOfPaper"] = this.state.titleOfPaper;
      // data["titleOfPaper"] = joined;
    }

    console.log(data);
    sendLifemembershipForm(data)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("Success " + response.data.message);
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
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
      "December",
    ];
    return (
      <MuiThemeProvider>
        <div className="Forms_first mr-5 ml-5 mb-5">
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
            <h4 className="Forms_title Forms_titleText mb-4">
              Personal details
            </h4>
            <div className="form-row mb-3">
              <div className=" col-md-2 col-12">
                <input
                  name="firstName"
                  id="firstName"
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  pattern="[A-Za-z_ ]{1,32}"
                  title="*ENTER CHARACTER VALUES ONLY"
                  placeholder=" "
                  required
                ></input>
                <span className="Form__span">First Name</span>
              </div>
              <div className="col-md-2 col-12">
                <input
                  name="middleName"
                  id="middleName"
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  pattern="[A-Za-z_ ]{1,32}"
                  title="*ENTER CHARACTER VALUES ONLY"
                  placeholder=" "
                  required
                ></input>
                <span className="Form__span">Middle Name</span>
              </div>
              <div className="col-md-2 col-12">
                <input
                  name="lastName"
                  id="lastName"
                  onChange={this.handleChange}
                  className="form-control"
                  type="text"
                  placeholder=" "
                  pattern="[A-Za-z_ ]{1,32}"
                  title="*ENTER CHARACTER VALUES ONLY"
                  required
                ></input>
                <span className="Form__span">Last Name</span>
              </div>
              <div className="col-md-1 col-12">
                <select
                  className="custom-select Form__select"
                  id="gender"
                  name="gender"
                  onChange={this.handleChange}
                  required
                >
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Others</option>
                </select>
              </div>
              <div className="col-md-2 col-12 mt-2 mt-md-0">
                {/* <input
                  required
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
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
                    nextMonthButtonDisabled,
                  }) => (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        {"<"}
                      </button>
                      <select
                        value={this.state.selectYear}
                        onChange={({ target: { value } }) => {
                          changeYear(value);
                          this.setState({ selectYear: value });
                        }}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        value={this.state.selectMonth}
                        onChange={({ target: { value } }) => {
                          changeMonth(months.indexOf(value));
                          this.setState({ selectMonth: value });
                        }}
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        {">"}
                      </button>
                    </div>
                  )}
                  selected={this.state.dateOfBirth}
                  onChange={this.handleDobChange}
                  className="personalDOB"
                  placeholderText="Date of Birth"
                ></DatePicker>
              </div>
              <div className="col-md-1 col-12">
                <select
                  className="custom-select Form__select"
                  id="bloodGroup"
                  name="bloodGroup"
                  required
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    Blood Group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="col-md-2 col-12">
                <input
                  name="contactNo"
                  onChange={this.handleChange}
                  className="form-control"
                  pattern="[1-9]{1}[0-9]{9}"
                  title="Number should be of 10 digits only"
                  type="tel"
                  id="contactNo"
                  placeholder=" "
                  min="0"
                  required
                ></input>
                <span className="Form__span">Number</span>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-10 col-12">
                <textarea
                  className="form-control"
                  name="address"
                  id="address"
                  onChange={this.handleChange}
                  // id="exampleFormControlTextarea1"
                  placeholder=" "
                  rows="3"
                  required
                ></textarea>
                <span className="Form__span">Residential Address</span>
              </div>
              <div className="col-md-2 col-12">
                <input
                  name="alternateNumber"
                  pattern="[1-9]{1}[0-9]{9}"
                  title="Number should be of 10 digits only"
                  type="tel"
                  id="alternateNumber"
                  onChange={this.handleChange}
                  className="form-control"
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
            <div className="col-md-10 col-12">
                <textarea
                  className="form-control"
                  name="clinicAddress"
                  id="clinicAddress"
                  onChange={this.handleChange}
                  placeholder=" "
                  rows="3"
                  style={{"marginBottom":"20px"}}
                  required
                ></textarea>
                <span className="Form__span">Clinic Address</span>
              </div>
              </div>
              <div className="form-row">
              <br/>
              <div className="col-md-5 col-12">
                <input
                  type="text"
                  name="qualification"
                  id="qualification"
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
                  name="examiningBody"
                  id="examiningBody"
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
                  name="yearOfPassing"
                  id="yearOfPassing"
                  pattern="[1-9]{1}[0-9]{3}"
                  title="Number should be of 4 digits only"
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
                  name="registrationNumber"
                  id="registrationNumber"
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
                  name="dateOfRegistration"
                  id="dateOfRegistration"
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
                    nextMonthButtonDisabled,
                  }) => (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        {"<"}
                      </button>
                      <select
                        value={this.state.selectYear}
                        onChange={({ target: { value } }) => {
                          changeYear(value);
                          this.setState({ selectYear: value });
                        }}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        value={this.state.selectMonth}
                        onChange={({ target: { value } }) => {
                          changeMonth(months.indexOf(value));
                          this.setState({ selectMonth: value });
                        }}
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        {">"}
                      </button>
                    </div>
                  )}
                  selected={this.state.dateOfRegistration}
                  onChange={this.handleRegDateChange}
                  className="personalDOB"
                  placeholderText="Registration Date"
                ></DatePicker>
              </div>
              <div className="col-md-5 col-12">
                <input
                  type="text"
                  name="nameOfBoard"
                  id="nameOfBoard"
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
                  id="professionalStatus"
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
                      id="hospitalAttached"
                      onChange={this.handlepractitioner}
                      className="form-control"
                      type="text"
                      placeholder=" "
                      required
                    ></input>
                    <span className="Form__span">Hospital Attached</span>
                  </div>
                  <div className="col-md-2 col-12">
                    <input
                      name="capacity"
                      id="capacity"
                      onChange={this.handlepractitioner}
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
                      id="nameOfInstitution"
                      onChange={this.handlemedicalEduTeacher}
                      className="form-control"
                      type="text"
                      placeholder=" "
                      required
                    ></input>
                    <span className="Form__span">Name of the Institution</span>
                  </div>
                  <div className="col-md-2 col-12">
                    <input
                      name="designation"
                      id="designation"
                      onChange={this.handlemedicalEduTeacher}
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
                      name="designation"
                      id="designation"
                      onChange={this.handleinService}
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
                      id="nameOfEmployee"
                      onChange={this.handleinService}
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
                      name="designation"
                      id="designation"
                      onChange={this.handleresearchWorker}
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
                      onChange={this.handleresearchWorker}
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
                  id="paperPublished"
                  name="paperPublished"
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
                  name="titleOfPaper"
                  id="titleOfPaper"
                  className="form-control form-control-sm"
                  placeholder=" "
                  onChange={this.handleTitlePaper}
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
                  id="nimaMemberBefore"
                  name="nimaMemberBefore"
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
                  id="branch"
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
                  name="reasonForDiscontinue"
                  id="reasonForDiscontinue"
                  placeholder=" "
                  onChange={this.handleChange}
                  rows="2"
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

                  <button
                    className="button button2"
                    type="submit"
                    // onClick={this.handleSubmit}
                  >
                    Submit form
                  </button>
                </div>
              </div>
            </div>
            {/*  <RaisedButton
              label="Send"
              style={StyleSheet.button}
              onClick={this.sendMessage}
            /> */}
            {/* {/* <Recaptcha
              ref={(ref) => (this.recaptcha = ref)}
              sitekey="6LdV_00aAAAAAOhy0wsKIR1yCyOcOWK-7-X0J0zQ"
              onResolved={this.onResolved}
            /> */}
          </form> 
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LifeMemberShipForm;
