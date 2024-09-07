// import React, { useState } from 'react';

//  import './CreatePost.css';

// const ShopManagementForm = () => {
//   const [revenue, setRevenue] = useState('');
//   const [expenses, setExpenses] = useState('');
//   const [otherInfo, setOtherInfo] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform calculations or submit data based on the input values
//     // You can implement the logic for predicting shop profit, updating a dashboard, or performing segmentation here

//     console.log('Revenue:', revenue);
//     console.log('Expenses:', expenses);
//     console.log('Other Information:', otherInfo);

//     // You can add more logic here based on your project requirements
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="revenueInput" className="form-label">Shop Revenue</label>
//         <input
//           type="number"
//           className="form-control"
//           id="revenueInput"
//           value={revenue}
//           onChange={(e) => setRevenue(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="expensesInput" className="form-label">Shop Expenses</label>
//         <input
//           type="number"
//           className="form-control"
//           id="expensesInput"
//           value={expenses}
//           onChange={(e) => setExpenses(e.target.value)}
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="otherInfoInput" className="form-label">Other Information</label>
//         <textarea
//           className="form-control"
//           id="otherInfoInput"
//           rows="3"
//           value={otherInfo}
//           onChange={(e) => setOtherInfo(e.target.value)}
//         />
//       </div>

//       <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
//   );
// };

// export default ShopManagementForm;
import React, { useState } from 'react';
 
import './CreatePost.css';
const ShopManagementForm = () => {
  const [revenue, setRevenue] = useState('');
  const [expenses, setExpenses] = useState('');
  const [otherInfo, setOtherInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform calculations or submit data based on the input values
    // You can implement the logic for predicting shop profit, updating a dashboard, or performing segmentation here

    console.log('Revenue:', revenue);
    console.log('Expenses:', expenses);
    console.log('Other Information:', otherInfo);

    // You can add more logic here based on your project requirements
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <h1 className='text-gradient centered '>
          Add items
        </h1>
        <label htmlFor="revenueInput" className="form-label  ">Shop Revenue</label>
        <input
          type="number"
          className="form-control"
          id="revenueInput"
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="expensesInput" className="form-label">Shop Expenses</label>
        <input
          type="number"
          className="form-control"
          id="expensesInput"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="otherInfoInput" className="form-label">Other Information</label>
        <textarea
          className="form-control"
          id="otherInfoInput"
          rows="3"
          value={otherInfo}
          onChange={(e) => setOtherInfo(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ShopManagementForm;
