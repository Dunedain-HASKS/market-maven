import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { baseUrl } from "../shared";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { blue, deepPurple } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>{props ? "Buy" : "Sell"}</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Are you sure ?</h2>
          <p id="child-modal-description">
            The action you are doing, won't be able to undo.{" "}
          </p>
          <Button onClick={handleClose}>Confirm</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function NestedModal(props) {
  const id = localStorage.getItem("id");
  useEffect(() => {
    console.log(props);
  }, []);

  const baseurl = baseUrl;
  function buy(id, amt, stockid) {
    const data = { id: id, amount: amt };
    const url = baseurl + "stocks/" + stockid + "/buy";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error("Insufficient Funds");
        }
        return response.json();
      })
      .then((data) => {
        //assume the data was added successfully
        //modal closed
        //handleClose()
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = React.useState(true);
  const [buyorsell, setBuyOrSell] = React.useState(true);
  const handleChange = (event) => {
    setBuyOrSell(!buyorsell);
    setChecked(event.target.checked);
  };
  const [show, setShow] = React.useState(false);

  const [qty, setQty] = React.useState();
  const [price, setPrice] = React.useState(
    props.stock.stock.historic_data[props.stock.stock.historic_data.length - 1]
      .price.close
  );
  const col = deepPurple["A100"];
  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        
        style={{ marginTop: "20px" }}
      >
        Buy
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          {buyorsell ? "Buy" : "Sell"}
          <Switch
            checked={checked}
            onChange={buy(id, price, props.stock.stock._id)}
            // onChange={handleClose}

            inputProps={{ "aria-label": "controlled" }}
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setQty("");
              setPrice("");
            }}
            id="buy"
            className="w-full max-w-sm"
          >
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="qty"
                >
                  Name : {props.stock.stock.company.name}
                </label>
              </div>
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="qty"
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
                    setPrice(
                      e.target.value *
                        props.stock.stock.historic_data[
                          props.stock.stock.historic_data.length - 1
                        ].price.close
                    );
                  }}
                />
                <h5>
                  Price :{" "}
                  {props.stock ? (
                    <p>
                      {
                        props.stock.stock.historic_data[
                          props.stock.stock.historic_data.length - 1
                        ].price.close
                      }
                    </p>
                  ) : null}
                </h5>
                <h6>Total Amount : {price}</h6>
              </div>
            </div>
          </form>
          <ChildModal buyorsell={buyorsell} />
        </Box>
      </Modal>
    </div>
  );
}
