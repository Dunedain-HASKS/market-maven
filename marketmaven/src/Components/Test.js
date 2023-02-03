import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";

import Switch from "@mui/material/Switch";


export default function Buy(props) {
  const [checked, setChecked] = useState(true);
  const [buyorsell,setBuyOrSell] = useState(true);
  const handleChange = (event) => {
    setBuyOrSell(!buyorsell);
    setChecked(event.target.checked);
  };
  const [show, setShow] = useState(false);

  const [qty, setQty] = useState();
  const [price, setPrice] = useState(props.stock.current_price);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="bg-dark">
        <button
          onClick={handleShow}
          className="block mx-auto m-2 shadow bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Buy
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {(buyorsell)? "Buy" : "Sell"}
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setQty("");
                setPrice("");
                //   POST req to server for buy / props should be here...
              }}
              id="buy"
              className="w-full max-w-sm"
            >
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="qty"
                  >
                    Name : {props.stock.name}
                  </label>
                </div>
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="qty"
                  >
                    Qty.
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="qty"
                    placeholder="01"
                    type="number"
                    min="1"
                    defaultValue={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                      setPrice(e.target.value * props.stock.current_price);
                    }}
                  />
                  {/* {console.log(props.chart)} */}
                  <h5>
                    Price :{" "}
                    {props.stock ? <p>{props.stock.current_price}</p> : null}
                  </h5>
                  <h6>Total Amount : {price}</h6>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="shadow bg-slate-400 hover:bg-slate-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleClose}
            >
              Close
            </button>
            {(buyorsell) ? <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              form="buy"
              onClick={handleClose}
            >
              Buy
            </button> : <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              form="Sell"
              onClick={handleClose}
            >
              Sell
            </button>}
            
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
