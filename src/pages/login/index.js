import {
  Form,
  Input,
  Button,
  Checkbox,
  PageHeader,
  Row,
  Col,
  message,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import loginService from "../../services/login";
import "./index.scss";

export default function Login() {
  const onFinish = async (values) => {
    const { username, password } = values;
    let loginRes = await loginService.login({ username, password });
    console.log(loginRes);
    if (loginRes.ok) {
      message.success("Logged in");
    } else {
      message.error(loginRes);
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col xs={22} sm={18} md={12} lg={8} style={{ margin: "auto" }}>
          <PageHeader
            className="site-page-header"
            title="Login"
            subTitle="Enter auth info"
          />
          <Form
            name="normal_login"
            className=""
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
}
