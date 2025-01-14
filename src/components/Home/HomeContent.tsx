import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Carousel,
  Col,
  Flex,
  Input,
  Row,
  Typography,
} from "antd";
import { Content } from "antd/es/layout/layout";
import BaseFontAwesomeIcon from "../base/font-awesome-icon/BaseFontAwesomeIcon";
import Banner1 from "../../assets/images/Banner1.png";
import Banner2 from "../../assets/images/Banner2.png";
import Banner3 from "../../assets/images/Banner3.png";
import Banner4 from "../../assets/images/Banner4.png";
import Banner5 from "../../assets/images/Banner5.png";
import Banner6 from "../../assets/images/Banner6.png";
import Banner7 from "../../assets/images/organic_farm_illustration.png";
import Banner8 from "../../assets/images/organic_food_illustration.png";
import Banner9 from "../../assets/images/biosecurity_in_farming.png";
import Banner10 from "../../assets/images/biodiversity_illustration.png";

const { Meta } = Card;
export default function () {
  const topics = [
    {
      image: Banner3,
      title: "Chủ đề 1",
      description:
        "Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng, sạch, an toàn và đảm bảo chất lượng ngon nhất giao đến tận tay người tiêu dùng, để san sẻ sự vất vả của các mẹ, các chị.",
    },
    {
      image: Banner4,
      title: "Chủ đề 2",
      description:
        "Sản phẩm của chúng tôi được kiểm định chặt chẽ để đảm bảo an toàn thực phẩm và chất lượng vượt trội.",
    },
    {
      image: Banner5,
      title: "Chủ đề 3",
      description:
        "Đội ngũ chuyên nghiệp, luôn nỗ lực mang lại sự hài lòng tuyệt đối cho khách hàng.",
    },
    {
      image: Banner6,
      title: "Chủ đề 4",
      description:
        "Đồng hành cùng sức khỏe và hạnh phúc của gia đình bạn mỗi ngày.",
    },
  ];
  const features = [
    {
      image: Banner7,
      title: "Trang trại hữu cơ",
      description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
    },
    {
      image: Banner8,
      title: "Thực phẩm sạch",
      description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
    },
    {
      image: Banner9,
      title: "An toàn sinh học",
      description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
    },
    {
      image: Banner10,
      title: "Đa dạng sinh học",
      description: "Cung cấp 100% thực phẩm sạch đảm bảo an toàn và ngon nhất",
    },
  ];
  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x150",
      date: "25-03-2022",
      author: "Admin",
      title: "Organic là gì? Vì sao nên sử dụng thực phẩm hữu cơ?",
      description:
        "Hiện nay, những cửa hàng bán thực phẩm organic mọc lên như nấm. Vậy thực phẩm organic là gì? Và tại sao mọi người có xu hướng sử dụng thực phẩm...",
    },
    // Add more card objects here
    {
      id: 2,
      image: "https://via.placeholder.com/300x150",
      date: "26-03-2022",
      author: "Editor",
      title: "Lợi ích của thực phẩm hữu cơ",
      description:
        "Thực phẩm hữu cơ giúp cải thiện sức khỏe, giảm tác động xấu từ hóa chất. Tìm hiểu ngay!",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x150",
      date: "27-03-2022",
      author: "Author",
      title: "Các loại thực phẩm hữu cơ phổ biến",
      description:
        "Dưới đây là danh sách các loại thực phẩm hữu cơ phổ biến và cách chọn mua chúng.",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x150",
      date: "28-03-2022",
      author: "Admin",
      title: "Tầm quan trọng của thực phẩm hữu cơ",
      description:
        "Sử dụng thực phẩm hữu cơ không chỉ bảo vệ sức khỏe mà còn bảo vệ môi trường.",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x150",
      date: "29-03-2022",
      author: "Expert",
      title: "Thực phẩm hữu cơ và xu hướng hiện đại",
      description:
        "Thực phẩm hữu cơ đang trở thành xu hướng phổ biến trong cuộc sống hiện đại.",
    },
  ];
  return (
    <Content>
      <Carousel dots={false} autoplay autoplaySpeed={3200} pauseOnHover={false}>
        <div>
          <img
            src={Banner1}
            alt="1"
            style={{ width: "1519px", height: "672px" }}
          />
        </div>
        <div>
          <img
            src={Banner2}
            alt="2"
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
                  width: "380px",
                  height: "380px",
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
      {/* Về chúng tôi */}
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
            Hiện tại vùng nguyên liệu của chúng tôi có thể cung cấp các thực tập
            tươi sạch với số lượng lớn vì đang vào vụ mùa thu hoạch nên chúng
            tôi có thể cung ứng cho tất cả các đối tác xuất khẩu nông sản trên
            cả nước
          </p>
        </div>
      </div>
      {/* banner scroll */}
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
        <Row gutter={[16, 20]} justify={"space-between"}>
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_WnD8zo2vQ46vCMRSe3ig4nJ5.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_me84ECu0sxuUEGJodaQz6iJ6.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_KEhOiEC673Mtq8r67mcTYdl5.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_Pj6IzwD8fO4ALaBr4cL30hp6.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
        </Row>
        {/* Sản phẩm mới nhất */}
        <div className="pt-20 pb-6 text-center">
          <h2 className="text-4xl bg-gradient-to-r from-[#8EBE5F] via-[#D2C94D] to-[#F18D5E] bg-clip-text text-transparent">
            SẢN PHẤM MỚI NHẤT
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
        </div>
        <Row gutter={[16, 20]} justify={"space-between"} className="pb-8">
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_WnD8zo2vQ46vCMRSe3ig4nJ5.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_me84ECu0sxuUEGJodaQz6iJ6.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_KEhOiEC673Mtq8r67mcTYdl5.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
          <Card
            className="w-80 pb-4 transition-transform transform hover:scale-105 hover:shadow-lg"
            style={{ width: 250 }}
            cover={
              <img
                alt="example"
                src="https://pos.nvncdn.com/16a837-71503/ps/20220324_Pj6IzwD8fO4ALaBr4cL30hp6.jpg"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
            ]}
          >
            <Meta
              title={
                <div className="h-11 flex items-center justify-center break-words text-center whitespace-normal">
                  Ba rọi heo rút sườn C.P123 123 123
                </div>
              }
              description={
                <div className="h-8 flex items-center justify-center text-green-500 font-bold">
                  200.000 VNĐ
                </div>
              }
              className="text-center"
            />
          </Card>
        </Row>
      </div>
      <div>
        {/* Parallax Section */}
        <div
          className="h-80 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://pos.nvncdn.com/16a837-71503/bn/20220326_3arP6bc1BIU8XFZTL7wqLawn.jpg')",
          }}
        >
          <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-40 text-white">
            <h1 className="text-4xl font-bold mb-4">Hotline</h1>
            <h2 className="text-5xl font-bold mb-4">1900.2812</h2>
            <p className="text-center max-w-lg">
              Chúng tôi cam kết 100% các sản phẩm có nguồn gốc xuất xứ rõ ràng,
              sạch, an toàn và đảm bảo chất lượng ngon nhất.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 bg-white">
        <div className="text-center">
          <h2 className="text-4xl bg-gradient-to-r from-[#8EBE5F] via-[#D2C94D] to-[#F18D5E] bg-clip-text text-transparent">
            Tin tức mới nhất
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
        </div>
      </div>
      {/* Tin tức mới nhất */}
      <div className="bg-white px-[182px]">
        <Carousel
          dots={false}
          draggable={true}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {cards.map((item) => (
            <div key={item.id}>
              <Card className="mx-3 h-96">
                <img src={item.image} alt={item.title} className="h-64" />
                <div>
                  <p className="text-sm text-gray-500 m-0">
                    <span className="mr-2">📅 {item.date}</span>
                    <span>✍️ {item.author}</span>
                  </p>
                  <h3 className="text-lg mt-2 mb-1">{item.title}</h3>
                  <p className="text-base text-gray-600">{item.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Top thương hiệu */}
      <div className="py-10 bg-white">
        <div className="text-center">
          <h2 className="text-4xl bg-gradient-to-r from-[#8EBE5F] via-[#D2C94D] to-[#F18D5E] bg-clip-text text-transparent">
            TOP THƯƠNG HIỆU
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
        </div>
      </div>
      <div className="px-48 bg-white">
        <Carousel
          dots={false}
          draggable={true}
          slidesToShow={6}
          slidesToScroll={3}
        >
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/400x400"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=2"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=3"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=4"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=5"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=6"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=7"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=8"
              alt="{item.title}"
            />
          </Card>
          <Card className="mx-3 border-none">
            <img
              className="w-24 h-24 rounded-full"
              src="https://placehold.co/96x96?text=9"
              alt="{item.title}"
            />
          </Card>
        </Carousel>
      </div>
      <div className="bg-[#f1e9de] h-24 flex  items-center justify-around">
        <Typography className=" text-[28px] font-bold ">
          Đăng ký khuyến mãi
        </Typography>
        <div className="flex items-center">
          <Input className="w-96 rounded-full" />
          <Button>Gửi</Button>
        </div>
      </div>
      <Row className="mx-56 h-64 py-10">
        <Col flex={1}>
          <Row className="h-20 py-2">
            <img src="https://placehold.co/160x54?text=3" alt="" />
          </Row>
          <Row className="py-2">
            <Flex align="center" gap={10}>
              <BaseFontAwesomeIcon icon={["fas", "location-dot"]} />
              30 Phạm Văn Đồng Cầu Giấy, Hà Nội
            </Flex>
          </Row>
          <Row className="py-2">
            <Flex align="center" gap={10}>
              <BaseFontAwesomeIcon icon={["fas", "phone"]} />
              1900.2812
            </Flex>
          </Row>
          <Row className="py-2">
            <Flex align="center" gap={10}>
              <BaseFontAwesomeIcon icon={["fas", "envelope"]} />
              abctheme205@gmail.com
            </Flex>
          </Row>
        </Col>
        <Col flex={0.5}>
          <Row className="py-2 font-bold text-lg">Cẩm nang sử dụng</Row>
          <Row className="py-2">Trang chủ</Row>
          <Row className="py-2">Giới thiệu</Row>
          <Row className="py-2">Sản phẩm</Row>
        </Col>
        <Col flex={0.5}>
          <Row className="py-2 font-bold text-lg">Chính sách</Row>
          <Row className="py-2">Trang chủ</Row>
          <Row className="py-2">Giới thiệu</Row>
          <Row className="py-2">Sản phẩm</Row>
        </Col>
        <Col flex={0.5}>
          <Row className="py-2 font-bold text-lg">Dịch vụ</Row>
          <Row className="py-2">Trang chủ</Row>
          <Row className="py-2">Giới thiệu</Row>
          <Row className="py-2">Sản phẩm</Row>
        </Col>
      </Row>
      <div className="bg-[#f1e9de] h-14 flex  items-center justify-around">
        <Typography className=" text-base  ">
          Thiết kế bởi Trường Giang đẹp trai
        </Typography>
      </div>
    </Content>
  );
}
