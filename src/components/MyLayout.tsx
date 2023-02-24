import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Dropdown, Layout, Menu, message, theme } from "antd";
import logo from "../assets/logo/log.png";
import { useLocation, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const sideMenuData = [
  {
    key: "/admin/dashboard",
    icon: <DashboardOutlined />,
    label: "看板",
  },
  {
    key: "/admin/medical",
    icon: <VideoCameraOutlined />,
    label: "药品管理",
    children: [
      {
        key: "/admin/medical/categories",
        label: "药品分类",
      },
      {
        key: "/admin/medical/info",
        label: "药品信息",
      },
    ],
  },
  {
    key: "/admin/article",
    icon: <UploadOutlined />,
    label: "文章管理",
    children: [
      {
        key: "/admin/article/categories",
        label: "文章分类",
      },
      {
        key: "/admin/article/info",
        label: "文章信息",
      },
    ],
  },
  {
    key: "/admin/user",
    label: "会员信息",
    icon: <UserOutlined />,
  },
];

const findOpenKeys = (key: string) => {
  const result: string[] = [];

  const findInfo = (arr: any) => {
    arr.forEach((item: any) => {
      if (key.includes(item.key)) {
        result.push(item.key);
        if (item.children) {
          findInfo(item.children); // 递归查找默认选中项
        }
      }
    });
  };

  findInfo(sideMenuData);

  return result;
};

const findDeepPath = (key: string) => {
  const result: any = []; // 扁平化
  const findInfo = (arr: any) => {
    arr.forEach((item: any) => {
      const { children, ...info } = item;
      result.push(info);
      if (children) {
        findInfo(children);
      }
    });
  };
  findInfo(sideMenuData);
  const tempData = result.filter((item: any) => key.includes(item.key));
  if (tempData.length) {
    return [{ label: "首页", key: "/admin/dashboard" }, ...tempData];
  }
  return [];
};

const MyLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false);
  const [breadcrumb, setBreadcrumb] = useState<any>([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const temOpenKeys = findOpenKeys(pathname);
  useEffect(() => {
    setBreadcrumb(findDeepPath(pathname));
  }, [pathname]);
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
          defaultOpenKeys={temOpenKeys}
          defaultSelectedKeys={temOpenKeys}
          onClick={({ key }) => navigate(key)}
          items={sideMenuData}
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
          <Dropdown
            menu={{
              items: [
                {
                  key: "userCenter",
                  label: "个人中心",
                },
                {
                  key: "logout",
                  label: "退出登录",
                },
              ],
              onClick: (event) => {
                if (event.key === "logout") {
                  navigate("/");
                } else {
                  message.info("暂未开通");
                }
              },
            }}
          >
            <img
              src={logo}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                float: "right",
                margin: "16px",
              }}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Breadcrumb>
            {breadcrumb.map((item: any) => (
              <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyLayout;
