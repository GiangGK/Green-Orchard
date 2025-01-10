import React from "react";
import {
  Menu,
  Layout,
  Carousel,
  Row,
  Col,
  Typography,
  Card,
  Avatar,
} from "antd";
import { Content } from "antd/es/layout/layout";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const { Header } = Layout;
const topics = [
  {
    image: "https://placehold.co/380x380?text=1",
    title: "Chủ đề 1",
    description:
      "Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các chị.",
  },
  {
    image: "https://placehold.co/380x380?text=2",
    title: "Chủ đề 2",
    description:
      "Sản phẩm của chúng tôi được kiểm định chặt chẽ để đảm bảo an toàn thực phẩm và chất lượng vượt trội.",
  },
  {
    image: "https://placehold.co/380x380?text=3",
    title: "Chủ đề 3",
    description:
      "Đội ngũ chuyên nghiệp, luôn nỗ lực mang lại sự hài lòng tuyệt đối cho khách hàng.",
  },
  {
    image: "https://placehold.co/380x380?text=4",
    title: "Chủ đề 4",
    description:
      "Đồng hành cùng sức khỏe và hạnh phúc của gia đình bạn mỗi ngày.",
  },
];
const features = [
  {
    image: "https://placehold.co/135x127?text=1",
    title: "Trang trại hữu cơ",
    description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
  },
  {
    image: "https://placehold.co/135x127?text=2",
    title: "Thực phẩm sạch",
    description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
  },
  {
    image: "https://placehold.co/135x127?text=3",
    title: "An toàn sinh học",
    description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
  },
  {
    image: "https://placehold.co/135x127?text=4",
    title: "Đa dạng sinh học",
    description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
  },
];

export default function Home() {
  return (
    <Layout>
      <Header className="sticky top-0 z-10 w-full h-24 flex items-center bg-white shadow-md px-5">
        <div className="flex flex-1 items-center justify-around">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/160x54?text=Nhanh+Organic"
              alt="Nhanh Organic"
            />
          </div>

          {/* Navigation */}
          <ul className="flex list-none m-0 p-0 gap-14">
            <li>
              <a
                href="#home"
                className="text-black text-base no-underline hover:text-green-500"
              >
                Trang chủ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-black text-base no-underline hover:text-green-500"
              >
                Giới thiệu
              </a>
            </li>
            <li>
              <a
                href="#products"
                className="text-black text-base no-underline hover:text-green-500"
              >
                Sản phẩm
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black text-base no-underline hover:text-green-500"
              >
                Liên hệ
              </a>
            </li>
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <div className="relative">
              <img
                src="https://via.placeholder.com/24?text=Bag"
                alt="Cart"
                className="w-6 h-6"
              />
            </div>
            <img
              src="https://via.placeholder.com/24?text=User"
              alt="User"
              className="w-6 h-6"
            />
            <img
              src="https://via.placeholder.com/24?text=Search"
              alt="Search"
              className="w-6 h-6"
            />
          </div>
        </div>
      </Header>

      <Content>
        <Carousel autoplay autoplaySpeed={3200} pauseOnHover={false}>
          <div>
            <img
              src="https://placehold.co/1519x672?text=1"
              alt="1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://placehold.co/1519x672?text=2"
              alt="2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://placehold.co/1519x672?text=3"
              alt="3"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div>
            <img
              src="https://placehold.co/1519x672?text=4"
              alt="4"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Carousel>
        <Row className="h-auto flex flex-wrap gap-0">
          {topics.map((topic, index) => (
            <Col key={index} span={6} className="w-full sm:w-1/2 lg:w-1/4 p-0">
              <div className="relative">
                <img
                  src={topic.image}
                  alt={topic.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                  <Typography className="pb-1 text-lg font-bold h-10">
                    {topic.title}
                  </Typography>
                  <p className="h-44 text-sm">{topic.description}</p>
                  <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 dark:border-[#f5f6fc] border-none font-medium">
                    <div className="inline-flex h-12 translate-x-0 items-center justify-center bg-black px-6 text-white transition group-hover:-translate-x-[150%]">
                      Nhấn đi mài
                    </div>
                    <div className="absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-green-500 px-6 text-white transition duration-300 group-hover:translate-x-0">
                      Nhấn đi mài
                    </div>
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="py-10 bg-white">
          <div className="text-center">
            <h2 className="text-4xl bg-gradient-to-r from-[#8EBE5F] via-[#D2C94D] to-[#F18D5E] bg-clip-text text-transparent">
              VỀ CHÚNG TÔI
            </h2>
            <div className="flex justify-center items-center mt-2">
              <span className="w-12 h-px bg-green-500"></span>
              <img
                src="https://via.placeholder.com/24?text=🌿"
                alt="Icon"
                className="mx-2"
              />
              <span className="w-12 h-px bg-green-500"></span>
            </div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Hiện tại vùng nguyên liệu của chúng tôi có thể cung cấp các thực
              tập tươi sạch với số lượng lớn vì đang vào vụ mùa thu hoạch nên
              chúng tôi có thể cung ứng cho tất cả các đối tác xuất khẩu nông
              sản trên cả nước
            </p>
          </div>
        </div>
        <div className="px-60 bg-white">
          <Row
            gutter={[24, 24]}
            justify="center"
            align="middle"
            className="w-full px-4 bg-white pb-20"
          >
            {features.map((feature, index) => (
              <Col
                key={index}
                xs={24}
                sm={12}
                md={6}
                className="flex flex-col items-center justify-center text-center "
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="mb-4 h-[90px] object-contain rounded-full"
                />
                <Typography className="text-base font-semibold text-gray-800">
                  {feature.title}
                </Typography>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </Col>
            ))}
          </Row>
          <Row>
            <Card
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}
