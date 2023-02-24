import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  DashOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import logo from "../assets/logo/log.png";

const { Header, Sider, Content } = Layout;

const MyLayout: React.FC = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{ width: "100vw", height: "100vh" }}
      id="components-layout-demo-custom-trigger"
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            style={{
              display: "block",
              width: "50%",
              height: "44px",
              margin: "10px auto",
            }}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "/dashboard",
              icon: <DashboardOutlined />,
              label: "看板",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "药品管理",
              children: [
                {
                  key: "/admin/medical_categories",
                  label: "药品分类",
                },
                {
                  key: "/admin/medical_info",
                  label: "药品信息",
                },
              ],
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "文章管理",
              children: [
                {
                  key: "/admin/article_categories",
                  label: "文章分类",
                },
                {
                  key: "/admin/article_info",
                  label: "文章信息",
                },
              ],
            },
            {
              key: "4",
              label: "会员信息",
              icon: <UserOutlined />,
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
