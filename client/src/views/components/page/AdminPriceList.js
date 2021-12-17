import React from 'react';
import {Card,Table,Button,Row,Container,Col,Form} from 'react-bootstrap';
import {useContext,useEffect} from 'react';
import {ProductContext} from '../../../contexts/ProductContext';
import AddCarModal from '../../../components/modal/AddCarModal'
import UpdateCarModal from '../../../components/modal/UpdateCarModal'
import ViewCarModal from '../../../components/modal/ViewCarModal';
import ConfirmModal from '../../../components/modal/ConfirmModal'


export default function AdminPriceList() {
    const {
        productState:{products,productLoading},
        getProduct,setShowAddCar,
        showDelCar:{show,productId},
        setShowDelCar,deleteProduct,
        getProductDetail,setShowUpdateCar,
        setShowViewCar

    }=useContext(ProductContext);
    useEffect(()=>{
        getProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const handleDelProduct = ()=>{
        deleteProduct(productId);
        handleClose();
    }
    const handleClose =() =>setShowDelCar({show:false,productId:''});
    const choseProductUpdate= (productId)=>{
        getProductDetail(productId)
        setShowUpdateCar(true)
    }
    const choseProductView =(productId)=>{
        getProductDetail(productId)
        setShowViewCar(true)
    }
    return (
        <Container style={{padding:'36px 0'}}>
            {products.map(product=>(
                <Col key={product._id}>
                    <Card  border="light" style={{ width: '100%' }}>
                        <Card.Header as="h5">{product.nameCar}</Card.Header>

                    <center>
                    <Card.Img variant="top" src={product.imgCarUrl} width="100%" />
                    </center>
                    <Card.Body>
                    <Table  hover style={{borderBottom: '1px solid #DEE2E6'}}>
                        <thead>
                            <tr>
                                <th colSpan="3">Loại xe</th>
                                <th>Giá xe</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan="3">{product.nameCar}</td>
                                <td>{product.costCar}
                                <Form.Control style={{margin:'5px'}} type='text' placeholder='Nhập giá mới' name='priceCar' required/></td>
                                <td><Button onClick={()=>choseProductUpdate(product._id)} style={{marginLeft:'5%'}} variant="outline-info" size="sm"><i className="fas fa-pencil-alt"></i></Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Container>
    )
}