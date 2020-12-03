import {Row, Col, Divider, Form, Input, Button, Modal} from "antd";
import {Fragment, useState, useEffect} from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";


const Inicial = () => {

    const [modalInicial, modalLlamado] = useState(false);

    const [regNombre, regNombreMod] = useState("");

    const [regApellido, regApellidoMod] = useState("");

    const [regEmail, regEmailMod] = useState("");

    const [regPassword, regPasswordMod] = useState("");

    const funcionNombreMod = (e) =>{
        regNombreMod(e.target.value)
    }

    const funcionApellidoMod = (e) =>{
        regApellidoMod(e.target.value)
    }
    const funcionEmailMod = (e) =>{
        regEmailMod(e.target.value)
    }
    const funcionPasswordMod = (e) =>{
        regPasswordMod(e.target.value)
    }
    useEffect(() => {
        console.log(modalInicial);
    }, []);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 1, span: 10 },
    };

    const handleOk = async (e)=>{
        const registroAxios = await axios.post(`http://localhost:4000/user/registro`, {
        "user_name": regNombre,
            "user_lastname": regApellido,
            "user_password": regPassword,
            "user_avatar":"https://img.com",
            "user_email":regEmail

        })
        console.log(registroAxios.data)
        modalLlamado(false);
        <Redirect to="/mensajes" />
    }

    const handleCancel = (e) =>{
        console.log(e)
        modalLlamado(false)
    }



    return(
    <Fragment>
        <div className="contenedorCentral">
        <div className="contenedorPrincipal">
        <Divider orientation="center" className="divisor">Ingrese sus datos</Divider>
        <Row justify="center">
            <Col span={12}>
                <Button type="primary">Ingrese con Facebook</Button>
                <br/>
                ó
                <br/>
                <Button type="danger">Ingrese con Google</Button>

            </Col>

            <Col span={12} className="loginPropio">
                <Form
                    {...layout}
                    name="basic"
                >
                    <Form.Item
                        {...tailLayout}
                        label="Email"
                        name="username"
                        rules={[{ required: true, message: 'Ingresa tu email' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        {...tailLayout}
                        label="Contraseña"
                        name="password"
                        rules={[{ required: true, message: 'Ingresa tu contraseña' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Row justify="center">
                    <Form.Item>
                        <Button  type="primary"  htmlType="submit">
                            Ingresar
                        </Button>

                    </Form.Item>
                    </Row>
                </Form>
                <Row justify="center">
                    <Button  type="danger"  htmlType="submit" onClick={()=>{modalLlamado(true)}}>
                        Registrarse
                    </Button>
                    <Modal visible={modalInicial} onOk={handleOk} onCancel={handleCancel}>
                        <Form
                            {...layout}
                            name="basic"
                        >
                            <Form.Item
                                {...tailLayout}
                                label="Nombre"
                                name="name"
                                value={regNombre}
                                onChange={funcionNombreMod}
                                rules={[{ required: true, message: 'Ingresa tu nombre' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                {...tailLayout}
                                label="Apellido"
                                name="lastname"
                                value={regApellido}
                                onChange={funcionApellidoMod}
                                rules={[{ required: true, message: 'Ingresa tu email' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                {...tailLayout}
                                label="Email"
                                name="email"
                                value={regEmail}
                                onChange={funcionEmailMod}
                                rules={[{ required: true, message: 'Ingresa tu email' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                {...tailLayout}
                                label="Contraseña"
                                name="password"
                                value={regPassword}
                                onChange={funcionPasswordMod}
                                rules={[{ required: true, message: 'Ingresa tu contraseña' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                        </Form>
                    </Modal>
                </Row>
            </Col>
        </Row>
        </div>
        </div>
    </Fragment>
    )
}

export default  Inicial;