import { useRef, React, useState } from "react";
import ReactToPrint from "react-to-print";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
import image from "../../images/nikhil logo pic.jpg";

const PrintoutPage = (props) => {
  const { details } = props;
  const { name, startDate, trip, stay, count, amount } = details;

  const [discount, setDiscount] = useState(0);
  const [due, setDue] = useState(0);

  const len = uuidv4().slice(33, 36);

  const componentRef = useRef();

  const onChangedis = (event) => {
    setDiscount(event.target.value);
  };

  const onChangeDue = (event) => {
    setDue(event.target.value);
  };

  const disAmount = count * discount;
  const totalAmount = count * amount;
  const disCountAmount = disAmount - totalAmount;

  const paid = disAmount - due;

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const todaydate = mm + "/" + dd + "/" + yyyy;

  return (
    <div className="total-body">
      <div ref={componentRef} className="print-body">
        <header>
          <h1>Invoice</h1>
          <p className="p">BILLED DATE ON {todaydate}</p>
          <address>
            <div className="logodetails">
              <img src={image} alt="logo" className="logo" />
            </div>
            <div>
              <p className="p2">BHARAT GHUMO HYD</p>
              <p>
                meerpet, RangaReddy
                <br />
                9951805558 <br />
                bharatghumo007@gmail.com
              </p>
            </div>
          </address>
        </header>
        <article className="artical">
          <address>
            <p className="p1">
              BILL TO <br /> <span className="p2">{name}</span>
            </p>
          </address>
          <table className="meta">
            <tbody>
              <tr>
                <th>
                  <span>Invoice #</span>
                </th>
                <td>
                  <span>BGH{len}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Date</span>
                </th>
                <td>
                  <span>{startDate} </span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="inventory">
            <thead>
              <tr>
                <th>
                  <span>DESCRIPTION</span>
                </th>
                <th>
                  <span>QTY</span>
                </th>
                <th>
                  <span>PRICE</span>
                </th>
                <th>
                  <span>Amount</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="span2">
                    {trip} & {stay} <br />
                    <span className="span1">
                      thank you for traveling with bharat ghumo hyd
                    </span>
                  </span>
                </td>
                <td>
                  <span>{count}</span>
                </td>
                <td>
                  <span data-prefix></span>
                  <span>{amount}</span>
                </td>
                <td>
                  <span data-prefix></span>
                  <span>{totalAmount}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="balance">
            <tbody>
              <tr>
                <th>
                  <span>Discount</span>
                </th>
                <td>
                  <span data-prefix></span>
                  <span>
                    {disAmount}({disCountAmount})
                  </span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Amount Paid</span>
                </th>
                <td>
                  <span data-prefix></span>
                  <span>{due}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Balance Due</span>
                </th>
                <td>
                  <span data-prefix></span>
                  <span>{paid}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Total</span>
                </th>
                <td>
                  <span data-prefix></span>
                  <span>{disAmount}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </article>
        <aside>
          <div className="stamp">
            <p>Rs.{due}/- payment done ✔</p>
            <p className="sign">
              <span className="f1">Authorized</span> <br />
              Stamp and sign
            </p>
          </div>
          <hr />
          <ul className="instructions">
            <span className="span">INSTRUCTIONS:</span>
            <li>
              Prescribed Original ID proofs are:- Voter Identity Card / Passport
              / PAN Card / Driving License / Photo ID card issued by Central /
              State Govt. / Public Sector Undertakings of State / Central
              Government ,District Administrations , Municipal bodies and
              Panchayat Administrations which are having serial number / Student
              Identity Card with photograph issued by recognized School or
              College for their students / Nationalized Bank Passbook with
              photograph /Credit Cards issued by Banks with laminated
              photograph/Unique Identification Card "Aadhaar", m-Aadhaar,
              e-Aadhaar. /Passenger showing the Aadhaar/Driving Licence from the
              "Issued Document" section by logging into his/her DigiLocker
              account considered as valid proof of identity. (Documents uploaded
              by the user i.e. the document in "Uploaded Document" section will
              not be considered as a valid proof of identity).
            </li>
            <li>
              2. While booking this ticket, you have agreed of having read the
              Health Protocol of Destination State of your travel. You are again
              advised to clearly read the Health Protocol advisory of
              destination state before start of your travel and follow them
              properly.
            </li>
            <li>
              Please confirm your booking at least 30 days prior to get the
              confirm tickets
            </li>
            <li>
              To confirm your slot 25% (non refundable) payment and remaining
              before one week of travel has to be made.
            </li>
            <li>Bharat gumo organiser will be provided on demand</li>
            <li>
              Any accidental expenses which are not given inclusions have to be
              paid directly.
            </li>
            <li>
              Any monument entry fee or camera or guide charges has to be paid
              at your own convenience
            </li>
            <li>
              The food which is mentioned in the itinerary and inclusions will
              only be provided by BG{" "}
            </li>
            <li>
              BG is not responsible for food in train and the food which is not
              mentioned in the itenary and has to be paid at the hotel directly.
            </li>
          </ul>
          <hr />
          <ul className="instructions">
            <li>
              Participation in the adventure activity including travelling in
              vehicles, trekking, climbing, camping can result in injury or
              accidents. Exposure to the natural elements like sun-burn,
              de-hydration, heat exhaustion, heat stroke, heat cramps, wind,
              rain, cold, altitude sickness, difficult terrain, fatigue and
              exhaustion can be uncomfortable or harmful or cause injury.
            </li>
            <li>
              I understand that there is a certain level of unpredictability and
              uncertainly and discomfort associated with any adventure activity.
              Things may not go as planned. There may be delays in starting the
              journey or delays reaching the intended destination. Food can be
              cooked outdoors and may not be delicious. The stay may be outdoors
              and not comfortable or luxurious.
            </li>
            <li>
              I acknowledge and i am fully aware of the inherent risks
              associated with participation in the trip/activity and to the
              maximum extent allowed by law, i waive, release and discharge
              BHARAT GHUMO HYD, its organizers, members associates from any
              negligence, claims, losses, cause of action including, but not
              limited to death. Personal injury or property damage arising out
              of my own voluntary participation in the above
              mentioned activity/trip.
            </li>
            <li>
              I understand that the said activity i am participating is an
              immature outdoor activity organized by BHARAT GHUMO HYD, which is
              meant for recreation purpose only. I understand and agree that the
              organizer have simply facilitated the gathering of members
              interested in the trip/activity and i am voluntarily participating
              and consented to my own risks and peril involved in
              this trip/activity.
            </li>
            <li>
              I affirm that i am in good physical health and i have read the
              difficulty rating and i am confident of my ability to take part in
              the said activity. I have no significant injury, medical
              alignments or conditions that would counter-indicate any
              disability to take parting the outdoor activity.
            </li>
            <li>
              Rules and Regulations have been adopted for the safe enjoyment of
              the activity and i agree to adhere to those regulations.
            </li>
            <li>
              I will follow the organizers instructions and i will not deviate
              from the planned route. I will not litter, smoke or drink alcohol.
              I will pay all shared expenses and dues and any other expenditures
              that may come up later.
            </li>
            <li>
              I hereby give permissions for the BHARAT GHUMO HYD and its
              organizer to secure medical treatment for me in the need of any
              emergency. I authorize the Physician or Medical Personnel or
              Certified First-Aider present to provide treatment deemed
              necessary by them.
            </li>
          </ul>
        </aside>
      </div>

      <div className="button">
        <div>
          <input type="number" onChange={onChangedis} placeholder="dis" />
        </div>
        <div>
          <input
            type="number"
            onChange={onChangeDue}
            placeholder="Paid Amount"
          />
        </div>
        <ReactToPrint
          trigger={() => (
            <button type="button" className="b1">
              Print
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
    </div>
  );
};
export default PrintoutPage;
