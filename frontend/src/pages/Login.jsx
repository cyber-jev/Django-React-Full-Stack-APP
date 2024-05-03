import Form from "../components/Form";

function Login() {
  // return <div> login page </div>;
  return <Form route="/api/token/" method="login" />;
}

export default Login;
