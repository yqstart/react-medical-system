import React from "react";
import { Button, Card, Col, Form, Input, message, Row } from "antd";
import logo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../services/auth";
import { setToken } from "../utils/tool";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col md={{ span: 8, push: 8 }} xs={{ span: 22, push: 1 }}>
        <img
          src={logo}
          style={{ display: "block", margin: "20px auto", width: "200px" }}
        />
        <Card title="好大夫管理平台">
          <Form
            labelCol={{ md: { span: 4 } }}
            onFinish={async (event) => {
              console.log(event);
              navigate("/admin/dashboard");
              // const res = await loginApi(event);
              // console.log(res);
              // if (res.success) {
              //   setToken(res.data);
              //   navigate("/admin/dashboard");
              //   message.success("登录成功！");
              // } else {
              //   message.error(res.message);
              // }
            }}
          >
            <Form.Item
              label="用户名"
              name="userName"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                },
              ]}
            >
              <Input placeholder="请输入用户名"></Input>
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
              ]}
            >
              <Input.Password placeholder="请输入用户名"></Input.Password>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                style={{ display: "block", margin: "8px auto", width: "30vw" }}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
