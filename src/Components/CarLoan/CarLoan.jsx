import React, { useState } from "react";
import "./CarLoan.css";
import { MdOutlineLabelImportant } from "react-icons/md";

const CarLoan = ({ Carloan }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const ReadMore = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter((item) => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  return (
    <div className="Car-total-divcontainer">
      <h1>Car Loan</h1>
      <div className="Car-about-maincontainer">
        {Carloan?.map((i, index) => (
          <div className="Car-loanmain-divcon" key={index}>
            <div className="About-Carloan-container">
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
            <div className="Car-loanimg-container">
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
        <div className="Car-loanuvnder-div">
          <h2>Benefits of Car Loans</h2>
          <div className="Car-privacy-custom icons__value">
            <span>
              <MdOutlineLabelImportant id="logo--div" />
              <strong>
                In India, apart from the issue that paying such a huge sum of
                cash may disturb one's budget, massive purchases with liquid
                cash could put you on the Income Tax department's radar as well.
                When you get a car loan to pay for your car, you manage to
                retain your savings for other current and future expenses. One
                of the greatest car loan benefits in India that the loan is
                secured against the car itself, so, you do not have to mortgage
                your property or other assets to get a car loan. You also get to
                use your car while you are servicing the car loan term, so a few
                years down the line you have added to your original savings and
                have the opportunity to own the car having paid off your car
                loan completely. This gives you the chance to augment crucial
                credit history by procuring a car loan and strictly adhering to
                the repayment cycle. A good credit history including timely
                payments and cleared debts help you obtain further loans in the
                future. Car loans, therefore, are a very safe and certain way of
                purchasing your own car.
              </strong>
            </span>
          </div>
          <div className="Carloan-notepoints">
            <h2>Car Loan Characteristics</h2>
            <span>
              Car loans in India generally carry the following features:
            </span>
            <span>
             <strong> One can opt for new or used car loan depending upon the need and
              the kind of car requirement. Though, most people prefer a car loan
              over new cars and not the second hand ones.</strong>
            </span>
            <span>
              <strong>Car loan option in India, for a majority, is an alternative that
              lets them purchase a car which is better than the one available in
              their budget since the car loan approval is quick.</strong>
            </span>
            <span>
            <strong>  Car loans in India generally provide a fixed rate of interest
              option while repayment through EMIs. This keeps you assured of a
              fixed repayable amount on a monthly basis towards the car loan,
              facilitating better budget planning without disturbing your usual
              expenses.</strong>
            </span>
            <span>
           <strong>   A bank offering car loan mostly also provide flexible repayment
              tenure options of 1-7 years to repay the car loan amount in
              regular EMIs.</strong>
            </span>
            <span>
              <strong>Car loan borrowers can avail loans up to Rs. 1.5 cores, mostly
              comprising of 100% of the vehicle's on-road price.</strong>
            </span>
            <span>
              <strong>Most banks have reasonable EMIs within flexible tenure options to
              offer on Car loans.</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarLoan;
