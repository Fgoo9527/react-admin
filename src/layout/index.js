import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import React from "react";
import "./idnex.css";
import SideMenu from "../components/sideMenu";
import routes from "../router/index";
import { BrowserRouter as Router, Route } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Router>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <SideMenu />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <RouterView />
            </Content>
          </Layout>
        </Router>
      </Layout>
    );
  }
}

function RouterView() {
  return (
    <>
      {routes.map((item, i) => (
        <Route
          path={item.path}
          component={item.component}
          key={i}
          exact={item.exact}
        />
      ))}
    </>
  );
}

export default SiderDemo;
