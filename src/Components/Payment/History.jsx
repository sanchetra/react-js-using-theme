import React, { useState } from "react";

const History = () => {
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  if (history.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h1>No Payment History Found</h1>
        <button
          className="btn btn-secondary mt-3"
          onClick={clearHistory}
        >
          Clear History
        </button>
      </div>
    );
  }
  console.log("History in LocalStorage:", localStorage.getItem("history"));


  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Payment History</h1>
        <button
          className="btn btn-danger"
          onClick={clearHistory}
        >
          Clear All History
        </button>
      </div>
      {history.map((record, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Order ID: {record.orderId}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Total: ${record.total.toFixed(2)}
            </h6>
            <ul className="list-group">
              {record.items.map((item) => (
                <li className="list-group-item d-flex align-items-center" key={item.id}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "contain",
                      marginRight: "15px",
                    }}
                  />
                  <div>
                    <span className="fw-bold lh-base">{item.title}</span> <br /> <br />
                    <span>
                      {item.quantity} x ${item.price.toFixed(2)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default History;
