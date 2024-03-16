import React from "react";

const Cart = () => {
  return (
    <>
      <h1 className="mt-3 text-center text-3xl font-bold underline">
        Cart items
      </h1>
      <table className="m-auto w-3/4 mt-2 rounde-lg">
        <thead className=" bg-gray-400 text-white">
          <tr>
            <th className="w-1/12 rounded-tl-md"> S.No</th>
            <th className="w-1/12 rounded-tl-md"> Products</th>
            <th className="w-1/12 rounded-tl-md"> Quantity</th>
            <th className="w-1/12 rounded-tl-md">Price</th>
            <th className="w-1/12 rounded-tl-md">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src={""}
                alt=""
                style={{ height: "100px" }}
                className="m-auto"
              />
            </td>
            <td>5</td>
            <td>Rs. 1000</td>
            <td>Rs. 5000</td>
            <td className="text-center">
              <button className="edit">
                <i className="bi bi-pencil-square"></i>
              </button>
              <button className="remove">
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7066.820131550814!2d85.3029437363148!3d27.673718194844906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1993e63639df%3A0x9c226ed83c641ea6!2sRambagh%20Mahal!5e0!3m2!1sen!2snp!4v1710416325310!5m2!1sen!2snp"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Cart;
