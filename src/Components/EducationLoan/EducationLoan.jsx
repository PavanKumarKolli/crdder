import React, { useState } from "react";
import "./Education.css";
import { MdOutlineLabelImportant } from "react-icons/md";

const Education = ({ Educationloan }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const ReadMore = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <div className="Education-total-divcontainer">
      <h1>Education Loan</h1>
      <div className="Education-about-maincontainer">
        {Educationloan?.map((i, index) => (
          <div className="Education-loanmain-divcon" key={index}>
            <div className="About-Educationloan-container">
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
            <div className="Education-loanimg-container">
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
        <div className="Education-loanuvnder-div">
          <div className="Education-privacy-custom icons__value">
            <span>
              <MdOutlineLabelImportant id="logo--div" />
              The quantum of expenses covered by this type of loan covers not
              just the direct expenses such as tuition fees and
              registration/examination fees, but also allied expenses such as
              those for uniforms, lab equipment/tools required for the course,
              travelling expenses and laptop. Aside from the fee payable to the
              school/college, other expenses covered by most education loans
              include:
            </span>
          </div>
          <div className="Educationloan-notepoints">
            <span>
            <span>Amount required towards the purchase of books, uniforms, equipment and instruments.</span>
            <span>Purchase of computers/laptops, if deemed necessary for the completion of the course.</span>
            <span>Fees paid for Exams, Library, Laboratories, Hostel, etc.</span>
            <span>Building fund, Caution deposit, Refundable deposit (must be supported by receipts/bills).</span>
            <span>Costs incurred in travel, specifically for studies abroad.</span>
            <span>Additional costs that are required to successfully complete the course, including but not limited to, Study tours, Thesis work, Projects, etc.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
