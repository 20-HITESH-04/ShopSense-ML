// // frontend/src/components/MaxSalesPrediction.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import './MaxProfit.css';

// const MaxSalesPrediction = () => {
//   const [formData, setFormData] = useState({
//     item_weight: '',
//     item_fat_content: '',
//     item_visibility: '',
//     item_type: '',
//     item_mrp: '',
//     outlet_establishment_year: '',
//     outlet_size: '',
//     outlet_location_type: '',
//     outlet_type: ''
//   });

//   const [prediction, setPrediction] = useState("");
//   const [recommendation, setRecommendation] = useState("");

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/predict', formData);
//       setPrediction(response?.data?.prediction?.[0]);
//       setRecommendation(response?.data?.recommendation);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="login">
//       <h1>Sales Maximization Prediction</h1>

//       {/* Main Input For Receiving Query to our ML */}
//       <form onSubmit={handleSubmit} className='d-flex flex-column gap-6'>
//         <div className="form-group">
//           <input type="text" name="item_weight" id="item_weight" className="form-control" required onChange={handleChange} />
//           <label htmlFor="item_weight" >Enter Item Weight</label>
//         </div>

//         <div className="form-group">
//           <select className="form-control" name="item_fat_content" required onChange={handleChange}>
//             <option value="" selected>Item Fat Content</option>
//             <option value="1">Low Fat</option>
//             <option value="2">Regular</option>
//             <option value="0">High Fat</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <input type="text" name="item_visibility" id="item_visibility" className="form-control" required onChange={handleChange} />
//           <label htmlFor="item_visibility" className="ph-area">Enter Item Visibility</label>
//         </div>

//         <div className="form-group">
//           <select className="form-control chosenn" name="item_type" required onChange={handleChange}>
//             <option value="" selected>Item Type</option>
//             <option value="0">Baking Goods</option>
//             <option value="1">Breads</option>
//             <option value="2">Breakfast</option>
//             <option value="3">Canned</option>
//             <option value="4">Dairy</option>
//             <option value="5">Frozen Foods</option>
//             <option value="6">Fruits and Vegetables</option>
//             <option value="7">Hard Drinks</option>
//             <option value="8">Health and Hygiene</option>
//             <option value="9">Household</option>
//             <option value="10">Meat</option>
//             <option value="11">Others</option>
//             <option value="12">Seafood</option>
//             <option value="13">Snack Foods</option>
//             <option value="14">Soft Drinks</option>
//             <option value="15">Starchy Foods</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <input type="text" name="item_mrp" id="item_mrp" className="form-control" required onChange={handleChange} />
//           <label htmlFor="item_mrp" className="ph-area">Enter Item MRP</label>
//         </div>

//         <div className="form-group">
//           <input type="text" name="outlet_establishment_year" id="outlet_establishment_year" className="form-control" required onChange={handleChange} />
//           <label htmlFor="outlet_establishment_year" className="ph-area">Outlet Establishment Year (YYYY)</label>
//         </div>

//         <div className="form-group">
//           <select className="form-control chosenn" name="outlet_size" required onChange={handleChange}>
//             <option value="" selected>Outlet Size</option>
//             <option value="0">High</option>
//             <option value="1">Medium</option>
//             <option value="2">Small</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <select className="form-control chosenn" name="outlet_location_type" required onChange={handleChange}>
//             <option value="" selected>Outlet Location Type</option>
//             <option value="0">Tier 1</option>
//             <option value="1">Tier 2</option>
//             <option value="2">Tier 3</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <select className="form-control chosenn" name="outlet_type" required onChange={handleChange}>
//             <option value="" selected>Outlet Type</option>
//             <option value="0">Grocery Store</option>
//             <option value="1">Supermarket Type1</option>
//             <option value="2">Supermarket Type2</option>
//             <option value="3">Supermarket Type3</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <input type="submit" className="btn btn-primary" value="Predict" />
//           <input type="reset" className="btn btn-danger" value="Reset" />
//         </div>
//       </form>

//       {prediction !== "" && (
//   <div>
//     <p>Max Prediction: {prediction}</p>
//     <p>Recommendation: {recommendation}</p>
//   </div>
// )}

//     </div>
//   );
// }

// export default MaxSalesPrediction;
// frontend/src/components/MaxSalesPrediction.js

import React, { useState } from 'react';
import axios from 'axios';

const MaxSalesPrediction = () => {
  const [formData, setFormData] = useState({
    item_weight: '',
    item_fat_content: '',
    item_visibility: '',
    item_type: '',
    item_mrp: '',
    outlet_establishment_year: '',
    outlet_size: '',
    outlet_location_type: '',
    outlet_type: ''
  });

  const [prediction, setPrediction] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/predict', formData);
      setPrediction(response?.data?.prediction?.[0]);
      setRecommendation(response?.data?.recommendation);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="login">
      <h1 className='text-gradient'> Sales Maximization Prediction</h1>

      {/* Main Input For Receiving Query to our ML */}
      <form onSubmit={handleSubmit} className='d-flex flex-column gap-6'>
        <div className="form-group">
          <input type="text" name="item_weight" id="item_weight" className="form-control" required onChange={handleChange} />
          <label htmlFor="item_weight" >Enter Item Weight(kg)</label>
        </div>

        <div className="form-group">
          <select className="form-control" name="item_fat_content" required onChange={handleChange}>
            <option value="" selected>Item Fat Content</option>
            <option value="1">Low Fat</option>
            <option value="2">Regular</option>
            <option value="0">High Fat</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" name="item_visibility" id="item_visibility" className="form-control" required onChange={handleChange} />
          <label htmlFor="item_visibility" >Enter Item Visibility(%)</label>
        </div>

        <div className="form-group">
          <select className="form-control chosenn" name="item_type" required onChange={handleChange}>
            <option value="" selected>Item Type</option>
            <option value="0">Baking Goods</option>
            <option value="1">Breads</option>
            <option value="2">Breakfast</option>
            <option value="3">Canned</option>
            <option value="4">Dairy</option>
            <option value="5">Frozen Foods</option>
            <option value="6">Fruits and Vegetables</option>
            <option value="7">Hard Drinks</option>
            <option value="8">Health and Hygiene</option>
            <option value="9">Household</option>
            <option value="10">Meat</option>
            <option value="11">Others</option>
            <option value="12">Seafood</option>
            <option value="13">Snack Foods</option>
            <option value="14">Soft Drinks</option>
            <option value="15">Starchy Foods</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" name="item_mrp" id="item_mrp" className="form-control" required onChange={handleChange} />
          <label htmlFor="item_mrp" >Enter Item MRP(INR)</label>
        </div>

        <div className="form-group">
          <input type="text" name="outlet_establishment_year" id="outlet_establishment_year" className="form-control" required onChange={handleChange} />
          <label htmlFor="outlet_establishment_year" >Outlet Establishment Year (YYYY)</label>
        </div>

        <div className="form-group">
          <select className="form-control chosenn" name="outlet_size" required onChange={handleChange}>
            <option value="" selected>Outlet Size</option>
            <option value="0">High</option>
            <option value="1">Medium</option>
            <option value="2">Small</option>
          </select>
        </div>

        <div className="form-group">
          <select className="form-control chosenn" name="outlet_location_type" required onChange={handleChange}>
            <option value="" selected>Outlet Location Type</option>
            <option value="0">Tier 1</option>
            <option value="1">Tier 2</option>
            <option value="2">Tier 3</option>
          </select>
        </div>

        <div className="form-group">
          <select className="form-control chosenn" name="outlet_type" required onChange={handleChange}>
            <option value="" selected>Outlet Type</option>
            <option value="0">Grocery Store</option>
            <option value="1">Supermarket Type1</option>
            <option value="2">Supermarket Type2</option>
            <option value="3">Supermarket Type3</option>
          </select>
        </div>

        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Predict" />
          <input type="reset" className="btn btn-danger" value="Reset" />
        </div>
      </form>

      {prediction !== "" && (
  <div>
    <p>Max Prediction: {prediction}</p>
    <p>Recommendation: {recommendation}</p>
  </div>
)}

    </div>
  );
}

export default MaxSalesPrediction;
