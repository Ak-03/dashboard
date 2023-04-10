import { useRef, React, useState } from "react";
import ReactToPrint from "react-to-print";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

const PrintoutPage = (props) => {
  const { details } = props;
  const { name, trip, stay, startDate, count, amount } = details;

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
              <img src="nikhil logo pic.jpg" alt="logo" className="logo" />
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
            <tr>
              <th>
                <span>Total</span>
              </th>
              <td>
                <span data-prefix></span>
                <span>{totalAmount}</span>
              </td>
            </tr>
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
          </table>
        </article>
        <aside>
          <div>Rs.{due}/- payment done ✔</div>
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
