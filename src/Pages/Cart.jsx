import React from "react";

const Cart = () => {
  return (
    <>
      <h1 className="mt-3 text-center text-3xl font-bold underline">
        Cart items
      </h1>
      <table>
        <thead className="border-2 border-gray-700 m-auto">
            <tr>
        
                <th> S.No</th>
                <th> Products</th>
                <th> Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
      </table>
    </>
  );
};

export default Cart;
