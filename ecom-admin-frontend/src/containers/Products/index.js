import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import NewModal from '../../components/UI/Modal'
import { Col, Container, Row, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getAllProduct } from '../../actions';

function Product(props) {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [productPicture, setProductPicture] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => {
        const form = new FormData();

        form.append('name',name);
        form.append('price',price);
        form.append('description',description);
        form.append('categoryId',categoryId);
        form.append('quantity',quantity);
        for(let pic of productPicture) {
            form.append('productPicture',pic);
        }
        if(name !== '' || categoryId !== ''){
            dispatch(addProduct(form));
            setName('');
            setCategoryId('');
            setDescription('');
            setPrice('');
            setProductPicture([]);
            setQuantity('');
        }
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const categoryList = (categories, options = []) => {
        for(let category of categories) {
            options.push({ value: category._id, name: category.name });
            if(category.children.length > 0){
                categoryList(category.children, options);
            }
        }
        return options;
    }
    
    const renderProducts = () => {
        return (
            <Table responsive="sm" striped hover bordered variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        );
    }

    return(
        <Layout sidebar title="Products">
            <Container fluid>
                <Row>
                    <Col md={10} className="border-right border-bottom">
                        {renderProducts()}
                    </Col>
                    <Col md={2}><Button className="btn btn-primary ml-5" onClick={handleShow}>Add Product</Button></Col>
                    <>
                    <NewModal show={show} handleClose={handleClose} handleShow={handleShow} title="Add New Product" >
                        <Input lable="Product Name" type="text" value={name} placeholder="Product Name" onChange={(e) => {setName(e.target.value)}} />
                            
                        <Input lable="Price" type="text" value={price} placeholder="Product Price" onChange={(e) => {setPrice(e.target.value)}} />
                        
                        <Input lable="Quantity" type="text" value={quantity} placeholder="Quantity" onChange={(e) => {setQuantity(e.target.value)}} />
                        
                        <Input lable="Description" type="text" value={description} placeholder="Product Description" onChange={(e) => {setDescription(e.target.value)}} />

                        <select className="form-control my-3" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                            <option value="" key="none">Select Category</option>
                            {categoryList(category.categories).map((option) => <option value={option.value} key={option.value}>{option.name}</option> )}
                        </select>
                        
                        <Input lable="Product Images" type="file" onChange={(e) => setProductPicture([...productPicture, e.target.files[0]])} /><hr/>

                        <ul>{
                            productPicture.length > 0 ? productPicture.map((pic, index) => <li key={index}>{JSON.stringify(pic.name)}</li>) : null
                        }</ul>
                    </NewModal>
                    </>
                </Row>
            </Container>
        </Layout>
    );
}

export default Product;