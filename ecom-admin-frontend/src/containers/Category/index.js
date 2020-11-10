import React, { useState } from 'react';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../actions';

import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

function Category(props) {

    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState('');
    const [parentId, setParentId] = useState('');
    const [categoryImg, setCategoryImg] = useState();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => {
        const form = new FormData();

        form.append('name', categoryName);
        form.append('parentId', parentId);
        form.append('categoryImg', categoryImg);

        if(categoryName !== ''){
            dispatch(addCategory(form));
            setCategoryName('');
            setParentId('');
            setCategoryImg();
        }
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let mycategories = [];
        for(let category of categories) {
            mycategories.push(
                <li key={category._id}>
                    {category.name}
                    <ul>
                        {category.children.length > 0 ? renderCategories(category.children) : null}
                    </ul>
                </li>
            );
        }
        return mycategories;
    }

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
        <Layout sidebar title="Category">
            <Container fluid>
                <Row>
                    <Col md={10} className="border-right border-bottom">
                        <ul>
                            {renderCategories(category.categories)}
                        </ul>
                    </Col>
                    <Col md={2}><Button className="btn btn-primary ml-5" onClick={handleShow}>Add Category</Button></Col>
                    <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Add Category</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Input lable="Category Name" type="text" value={categoryName} placeholder="Category Name" onChange={(e) => setCategoryName(e.target.value)} />

                            <select className="form-control my-3" value={parentId} onChange={(e) => setParentId(e.target.value)}>
                                <option value="" key="none">Select Parent Category</option>
                                {createCategoryList(category.categories).map((option) => <option value={option.value} key={option.value}>{option.name}</option> )}
                            </select>
                            
                            <Input lable="Category Image" type="file" onChange={(e) => setCategoryImg(e.target.files[0])} /><hr/>
                            
                            <Button type="submit" variant="primary" onClick={handleClose}>Add</Button>
                        </Modal.Body>
                    </Modal>
                    </>
                </Row>
            </Container>
        </Layout>
    );
}

export default Category;