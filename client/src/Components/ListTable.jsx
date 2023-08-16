import { useEffect, useState } from "react";
import { Delete, Read } from "../APIServices/CRUDServices";
import Table from 'react-bootstrap/Table'
import axios from "axios";


const ListTable = () => {
    const [dataList, setDataList] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/readProduct');
            setDataList(response.data['data']);
        } catch (error) {
            console.error('Error fetching data: ', error)
        }
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/v1/deleteProduct/${id}`);
            fetchData()
        } catch (error) {
            console.error("Error deleting Item :", error)
        }
    }
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Image</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataList.map((data) => {
                            // console.log(data);
                            return (
                                <tr key={data._id}>
                                    <td>{data.productName}</td>
                                    <td>{data.productCode}</td>
                                    <td><img className="image" src={data?.productImage} alt="" /></td>


                                    <td>{data.unitPrice}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.totalPrice}</td>
                                    <td> <button onClick={() => { updateProduct(data._id) }} className="btn btn-success">Edit</button> <button onClick={() => deleteProduct(data._id)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </Table>
        </div>
    );
};

export default ListTable;