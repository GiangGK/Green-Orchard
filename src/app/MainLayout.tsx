import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

export default function MainLayout() {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
