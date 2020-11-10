import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getAllCategory } from '../../actions';

function Product(props) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category);

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
        dispatch(addProduct(form));
        setShow(false);
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const createCategoryList = (categories, options = []) => {
        for(let category of categories) {
            options.push({ value: category._id, name: category.name });
            if(category.children.length > 0){
                createCategoryList(category.children, options);
            }
        }
        return options;
    }

    return(
        <Layout sidebar title="Products">
            <Container fluid>
                <Row>
                    <Col md={10} className="border-right border-bottom">
                        <ul>
                        </ul>
                    </Col>
                    <Col md={2}><Button className="btn btn-primary ml-5" onClick={handleShow}>Add Product</Button></Col>
                    <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input lable="Product Name" type="text" value={name} placeholder="Product Name" onChange={(e) => {setName(e.target.value)}} />
                            
                            <Input lable="Price" type="text" value={price} placeholder="Product Price" onChange={(e) => {setPrice(e.target.value)}} />
                            
                            <Input lable="Quantity" type="text" value={quantity} placeholder="Quantity" onChange={(e) => {setQuantity(e.target.value)}} />
                            
                            <Input lable="Description" type="text" value={description} placeholder="Product Description" onChange={(e) => {setDescription(e.target.value)}} />

                            <select className="form-control my-3" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                                <option value="" key="none">Select Category</option>
                                {createCategoryList(categories.categories).map((option) => <option value={option.value} key={option.value}>{option.name}</option> )}
                            </select>
                            
                            <Input lable="Product Images" type="file" onChange={(e) => setProductPicture([...productPicture, e.target.files[0]])} /><hr/>

                            <ul>{
                                productPicture.length > 0 ? productPicture.map((pic, index) => <li key={index}>{JSON.stringify(pic.name)}</li>) : null
                            }</ul>
                            
                            <Button type="submit" variant="primary" onClick={handleClose}>Add</Button>
                        </Modal.Body>
                    </Modal>
                    </>
                </Row>
            </Container>
        </Layout>
    );
}

export default Product;