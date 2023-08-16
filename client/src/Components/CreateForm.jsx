import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";


const CreateForm = () => {
    const [formValue, setFormValue] = useState({
        productName: "",
        productCode: "",
        productImage: "",
        unitPrice: "",
        quantity: "",
        totalPrice: ""
    });
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const inputOnChange = (property, value) => {
        setFormValue({ ...formValue, [property]: value });
    }
    const onSubmit = async () => {
        setLoading(true);

        try {
            const res = await axios.post('http://localhost:5000/api/v1/createProduct', formValue);

            if (res.status === 200) {
                // toast.success("Data Inserted Successfully!")
                alert("Data Inserted Successfully!");
                setFormValue({})
                navigate('/')
            } else {
                alert("Something went wrong!");
            }
        } catch (error) {
            alert("An Occurred while something the form.")
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center my-4  text-primary">Add Your Products</h2>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Product Name</label>
                    <input value={formValue.productName} onChange={(e) => { inputOnChange("productName", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Product Code</label>
                    <input value={formValue.productCode} onChange={(e) => { inputOnChange("productCode", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Product Image</label>
                    <input value={formValue.productImage} onChange={(e) => { inputOnChange("productImage", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Unit Price</label>
                    <input value={formValue.unitPrice} onChange={(e) => { inputOnChange("unitPrice", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Product Quantity</label>
                    <input value={formValue.quantity} onChange={(e) => { inputOnChange("quantity", e.target.value) }} type="text" className="form-control" required />
                </div>

                <div className="col-md-4 p-2">
                    <label htmlFor="">Total Price</label>
                    <input value={formValue.totalPrice} onChange={(e) => { inputOnChange("totalPrice", e.target.value) }} type="text" className="form-control" required />
                </div>
                <br />
                <br />

                <button onClick={onSubmit} className="btn btn-info mt-3 w-25 mx-auto"> Save</button>

            </div>

        </div>
    );
};

export default CreateForm;