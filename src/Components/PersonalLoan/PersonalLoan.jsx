import React, { useState } from "react";
import "./PersonalLoan.css";
import { MdOutlineLabelImportant } from "react-icons/md";

const PersonLoan = ({ PersonalLoan }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const ReadMore = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <div className="Personal-total-divcontainer">
      <h1>Personal Loan</h1>
      <div className="Personal-about-maincontainer">
        {PersonalLoan?.map((i, index) => (
          <div className="Personal-loanmain-divcon" key={index}>
            <div className="About-Personalloan-container">
              <h3>{i.Heading}</h3>
              <span>{i.firstline}</span>
              {expandedItems.includes(index) && (
                <div>
                  <span>{i.secondline}</span>
                  <span>
                    <strong>{i.Strong}</strong>
                  </span>
                </div>
              )}
              <button
                className="about-read-more-less"
                onClick={() => ReadMore(index)}
              >
                {expandedItems.includes(index)
                  ? "Read Less..."
                  : "Read More...  "}
              </button>
            </div>
            <div className="Personal-loanimg-container">
              <img
                style={{ width: "450px", height: "350px", borderRadius: "9px" }}
                src={i.Image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      {/* home loan benifits */}
      <div>
        <div className="personal-loanuvnder-div">
          <h2>Personal Loan Eligibility Criteria</h2>
          <div className="Personal-loan-criteriacontainer">
          <div className="icons__value">
              {" "}
              <span>
                {" "}
                <MdOutlineLabelImportant size={20} id="Personallogo--div" />
              </span>
              <span>
                {" "}
                Personal loans eligibility criteria can be fairly stringent,
                considering banks need to mitigate their risk. Most people with
                a regular source of income such as salaried individuals or
                self-employed individuals can avail a personal loan. Banks
                consider salaried individuals, self-employed professionals and
                self-employed business people.
              </span>
              </div>
          </div>
          {/* personal Loan Interest Rates: */}
          <div className="personal-loanuvnder-div">
            <h2>Personal Loan Amount</h2>
            <div className="icons__value">
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Personallogo--div" />
            </span>
            <span>
              An individual can borrow as much as they can repay. This in
              banking terms would mean a personal loan that has an EMI that does
              not exceed 40% of your monthly take home income, where the EMIs
              for existing loans are also deducted.
            </span>
            </div>
          </div>
          {/* personal Loan – Fixed Interest Rate: */}
          <div className="personal-loanuvnder-div">
            <h2>Personal Loan Interest Rates</h2>
            <div className="icons__value"><span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Personallogo--div" />
            </span>
            <span>
              Personal loan rates vary from bank starts from 10.50 % depending
              upon your profile and the policies/scheme you decide to opt for.
              In case you need to find out more about personal loan rates from
              different banks, please take a look at our compare personal loans
              page. Credex loans works with a wide range of personal loan
              providers to get you the best deals and interest rates for your
              financial profile.
            </span></div>
            
          </div>
          <div className="personal-loanuvnder-div">
            <h2>How Fast Can I Get a Personal Loan? (Instant Loans)</h2>
            <div className="icons__value">
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Personallogo--div" />
            </span>
            <span>
              Personal loans don’t take too long to process. Banks usually
              disburse your loan with in seven working days. However, it is
              recommended that you keep all your documents ready and in order,
              especially the post dated cheques (PDC), to avoid any delays. How
              fast you get your personal loan is dependent on your document
              collection process.
            </span>
            </div>
          </div>
          <div className="personal-loanuvnder-div">
            <h2>Personal Loan Co-Applicants</h2>
            <div className="icons__value">
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Personallogo--div" />
            </span>
            <span>
              Personal loans can be taken with Co-Applicants to help you
              increase the loan amount you are eligible for. The income of the
              co-applicant also features in your valuation and helps in
              increasing your chances of getting a personal loan.
            </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonLoan;
