import React, { useState } from "react";
import { Button, Card, Form, Input, message, Modal, Table } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import MyUpload from "../../components/MyUpload";

const MedicalCategories = () => {
  const [isShow, setIsShow] = useState(false);
  const [myForm] = Form.useForm();
  return (
    <>
      <Card
        title="药品分类"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsShow(true)}
          ></Button>
        }
      >
        <Form layout="inline" style={{ marginBottom: "16px" }} onFinish={(event) => {
            console.log(event)
            message.success('查询成功！')
        }}>
          <Form.Item label="名字">
            <Input placeholder="请输入关键词"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" icon={<SearchOutlined />} htmlType='submit'></Button>
          </Form.Item>
        </Form>
        <Table
          columns={[
            {
              title: "序号",
              width: 80,
              align: "center",
            },
            {
              title: "名字",
            },
            {
              title: "主图",
              width: 120,
            },
            {
              title: "简介",
            },
            {
              title: "操作",
              width: 110,
            },
          ]}
        ></Table>
      </Card>

      <Modal
        title="编辑"
        open={isShow}
        onCancel={() => setIsShow(false)}
        maskClosable={false}
        destroyOnClose
        onOk={() => {
          myForm.submit();
        }}
      >
        <Form
          onFinish={(event) => {
            console.log(event);
            message.success("保存成功");
          }}
          labelCol={{ span: 3 }}
          form={myForm}
          preserve={false}
        >
          <Form.Item
            label="名字"
            name="name"
            rules={[{ required: true, message: "请输入名字" }]}
          >
            <Input placeholder="请输入名字"></Input>
          </Form.Item>
          <Form.Item label="主图">
            <MyUpload></MyUpload>
          </Form.Item>
          <Form.Item label="简介" name="desc">
            <Input.TextArea placeholder="请输入简介"></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default MedicalCategories;
