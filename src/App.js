import "./App.css";
import BankTransfer from "./Components/BalanceTransfer/BalanceTransfer";
import BussinessLoan from "./Components/BussinessLoan/BussinessLoan";
import CarLoan from "./Components/CarLoan/CarLoan";
import Education from "./Components/EducationLoan/EducationLoan";
import Home from "./Components/Home/Home";
import PersonLoan from "./Components/PersonalLoan/PersonalLoan";

const HomeLoan = [
  {
    id: "1",
    Heading: "Home Loans",
    Image: "./homeloan.jpg",
    firstline:
      "A Home Loan is a secured loan product where the lender provides finances for the purchase or construction of a residential/commercial property. One can also avail a housing loan to buy a plot of land and construct on it. Home Loans are also issued to extend/ repair/ renovate/ alter a new or second-hand property. The Home Loan is taken by a borrower against the property/security to be bought. This is done by giving the banker a conditional ownership over the property i.e. if the borrower fails to pay back the loan, the banker can retrieve the lent money by selling the property.",
    secondline:
      "Most lenders get the property valued independently and provide loans based on their estimated value. It is important to remember, however, that frequently their valuation is significantly lower than the actual cost and hence the requirement of the borrowers goes up. Home loans in Indian Banks are provided up to maximum of 80% (90% for loan amount below INR 20 lakhs) of the value of the house. Home loans are repaid using Equated Monthly Installments (EMIs) spread over a fixed tenure.",
    Strong:
      "CredEx Loans Brings You The Best Deals In Home Loans Using Its Extensive Network of Partner Banks. Apply For A Home Loan Today – Fill The Free Quote Form Now!",
  },
];
const PersonalLoan = [
  {
    id: "2",
    Heading: "Personal Loan",
    Image: "./PersonalLoan.jpg",
    firstline:
      "A personal loan is a loan for your personal use, be it your child’s wedding, a dream vacation, or a shopping extravaganza. A personal loan does not require any security or collateral and can be availed without much fuss. Typically personal loans range from Rs. 50,000 to Rs. 50 Lacs with a tenure typically ranging from 12 to 60 months. Getting a Personal loan is quite stress free and there are typically a number of offers in the market most of the time.",
    secondline:
      "Apart from the rate of interest banks also charge some fees which are usually of two types. Once when you are applying for the loan and once when you are pre-closing the loan. The fees when charged at the time of processing called as Processing Fees vary from bank to bank from 0% - 2% of the loan amount. the second charge is the prepayment penalty paid at the time of pre-closure. This too varies from 2% – 3 %.",
  },
];

const Businessloan = [
  {
    id: "3",
    Heading: "Business Loan",
    Image: "./Business-Loan-Eligibility.png",
    firstline:
      "Financial Flow is the life blood of any successful organisation. Most businesses will need a large amount of working capital to start up a new business or enable the rapid growth of an existing business. Scaling up always requires a influx of finances.",
    secondline:
      "Which is why, we go to all lengths to ensure that we can disburse a loan that can help you take your business to the next level. Business loans are very special to Andromeda and we have been helping our customers scale to new heights of success by helping them finance their dreams for their enterprises. While a personal is given on a personal capacity and income, a business loan is given based on company’s income and capacity and is given in the company’s name.",
  },
];
const Educationloan = [
  {
    id: "4",
    Heading: "Education Loan",
    Image: "./Educationloan.jpg",
    firstline:
      "Nothing can replace quality education when it comes to building a bright and successful future for your child and education is the only thing that can get a happy life going. However, due to the rising cost of higher education for students in India as well as abroad, parents are finding it more and more difficult to self-finance their children's education hence there is a huge demand for loans to cover education expenses. ",
    secondline:
      " Unlike most educational institutions today, educationalloans are given to meritorious and deserving students so that nothing hinders their progress and they achieve the best of education in India or abroad. At present, almost every Indian bank and NBFC offer education loans in India to students interested in pursuing a wide range of graduate, post graduate, professional and doctoral courses/degrees.",
  },
];
const Carloan = [
  {
    id: "5",
    Heading: "Car Loan",
    Image: "./CarLoan.jpg",
    firstline:
      "There was a time when owning a car was a luxury not all could afford to have. Buying a car was a life milestone for everyone who could shell out those huge amounts of money all at once to buy their dream car. With growing times, changing demographics and emerging car loan lenders, for a majority of the Indian middle class, owning a car today is no longer a luxury, but in fact a necessity made possible by taking a car loan.",
    secondline:
      " You cannot imagine living without a car because that would restrict you form going places for work, duties or leisure, hindering a good social and professional life. But with newer technologies and lesser resources, the cost of cars are on a rise, often making it extremely difficult for the average individual to purchase their vehicle outright only using ones savings. Therefore, viewing the huge demand for financing both used and new cars, leading loan lenders in India offer car loans, which are floated products, which enable you to purchase your car and pay off the car loan amount borrowed bit by bit through car loan EMIs or installments.",
  },
];
// ./BankTransfer.png
const Banktransfer = [
  {
    id: "6",
    Heading: "Balance Transfer Your Loan",
    Image: "./BankTransfer.png",
    firstline: "When was the last time you checked your home loan statement? ",
    middle: "Has your loan tenure increased since your signed up?",
    secondline: "Are you paying more than 10.5% interest on your home loan?",
  },
];
function App() {
  return (
    <div className="App">
      <Home HomeLoan={HomeLoan} />
      <PersonLoan PersonalLoan={PersonalLoan} />
      <BussinessLoan Businessloan={Businessloan} />
      <Education Educationloan={Educationloan} />
      <CarLoan Carloan={Carloan} />
      <BankTransfer Banktransfer={Banktransfer} />
    </div>
  );
}

export default App;
