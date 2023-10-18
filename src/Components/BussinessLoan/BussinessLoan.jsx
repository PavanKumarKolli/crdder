import React, { useState } from "react";
import "./BussinessLoan.css";
import { MdOutlineLabelImportant } from "react-icons/md";

const BussinessLoan = ({ Businessloan }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const ReadMore = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <div className="Business-total-divcontainer">
      <h1>Business Loan</h1>
      <div className="Business-about-maincontainer">
        {Businessloan?.map((i, index) => (
          <div className="Business-loanmain-divcon" key={index}>
            <div className="About-Businessloan-container">
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
            <div className="Business-loanimg-container">
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
        <div className="Business-loanuvnder-div">
          <div className="Business-privacy-custom">
            <span>
              Business loans are categorized broadly into following 2 segments.
            </span>
            <span>
              {" "}
              <MdOutlineLabelImportant id="logo--div" />
              <strong>Unsecured business loans</strong> : 3 year term loan for
              proprietorship, partnership, private limited companies and limited
              companies based on a sound balance sheet.
            </span>
            <span>
              {" "}
              <MdOutlineLabelImportant id="logo--div" />
              <strong>Secured business loans</strong> : Working capital funding
              in rupees as well as foreign currency for proprietorship,
              partnership, private limited companies and limited companies
            </span>
          </div>
          <h2>Business Loan Eligibility Criteria</h2>
          <div className="Business-loan-criteriacontainer">
            <span>
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />
              Most banks have a common set of parameters that they evaluate loan
              applicats with, but what exactly these parameters are depends from
              bank to bank.
            </span>
          </div>
          {/* Business Loan Interest Rates: */}
          <div className="Business-loanuvnder-div Business-loan-criteriacontainer">
            <h2>Business Loan Amount</h2>
            <span>
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />
              An individual can borrow as much as they can repay. This in
              banking terms would mean a Business loan that has an EMI that does
              not exceed 40% of your monthly take home income, where the EMIs
              for existing loans are also deducted.
            </span>
          </div>
          {/* Business Loan – Fixed Interest Rate: */}
          <div className="Business-loanuvnder-div">
            <h2>Age</h2>
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />
              Most banks will disburse business loans to individuals aged
              between 24 to 65 years.
            </span>
          </div>
          <div className="Business-loanuvnder-div">
            <h2>Current Business Experience</h2>
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />
              Banks will prefer that your business has been showing stable signs
              of growth at least for the last 3 years. If you can show sustained
              billing and revenues and top it off with profit, getting a
              business loan should not be a problem for you. Some banks give a
              loan amount up to 60 to 80% of your median annual profits.
            </span>
          </div>
          <div className="Business-loanuvnder-div">
            <h2>Total Business Experience</h2>
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />A bank
              will prefer if you have been engaged in sustainable business for
              atleast 5 years to consider giving you a loan. Your diversity in
              terms of business experience and so on along with good results
              will help you acquire your business loan..
            </span>
          </div>
          <div className="Business-loanuvnder-div Business-loan-criteriacontainer">
            <h2>Documents Required</h2>

            <span><MdOutlineLabelImportant size={20} id="Businesslogo--div" />Identity Proof</span>
            <span><MdOutlineLabelImportant size={20} id="Businesslogo--div" />Address Proof</span>
            <span><MdOutlineLabelImportant size={20} id="Businesslogo--div" />Bank Statement (Latest 6 months)</span>
            <span><MdOutlineLabelImportant size={20} id="Businesslogo--div" />
              Latest ITR along with other relevant docs like Balance Sheet, P&L,
              Audit Report (Certified by a CA)
            </span>
          </div>
          <div className="Business-loanuvnder-div">
            <h2>Tenure</h2>
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />Business loans range from min. of 1 year up to a max of 4 years
            </span>
          </div>
          <div className="Business-loanuvnder-div">
            <h2>Processing Time</h2>
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />The processing of the loans usually takes 4 working days after all the documents are submitted.
            </span>
          </div>
          <div className="Business-loanuvnder-div">
            <h2>Pre-Payment</h2>
            <span>
              {" "}
              <MdOutlineLabelImportant size={20} id="Businesslogo--div" />You can pre-pay the loan after repaying a min. of 6 EMI’s. Foreclosure charges would be applicable as per the banks term and condition.You can make a part pre-payment with a minimum amount of Rs.50,000 after 6 months from the date of disbursement of the loan. This part pre-payment can be made only once in a financial year.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussinessLoan;
