import React, { useState, useContext } from "react";import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
  FaPhone,
  FaSignInAlt
} from "react-icons/fa";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { UserContext } from "../context/UserContext";



function Login() {
  const [isLoading, setisLoading] = useState(false);
  const [apiError, setApiError] = useState(""); // الإيرور اللي جيلي من ال api
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),

    password: Yup.string()

      .matches(/^[A-Za-z0-9]{6,20}$/, "password must be valid")
      .required("Required"),
  });

  let navigate = useNavigate();
let {setUserLogin} = useContext(UserContext);
  const handleLogin = async (formValues) => {
    // 1. تهيئة حالة واجهة المستخدم (UI State) قبل بدء الطلب
    setisLoading(true); // بدء حالة التحميل
    setApiError(""); // تصفير أي أخطاء سابقة قبل إرسال الطلب الجديد
    try {
      // 2. إرسال الطلب (HTTP Request) وانتظار الاستجابة
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        formValues,
      );
      // 3. التحقق من حالة النجاح وتوجيه المستخدم (Routing)
      if (data.message === "success") {
        console.log(data);
         localStorage.setItem("userToken", data.token);
        setUserLogin(data.token)
        navigate("/");
      }
    } catch (error) {
      // 4. معالجة الأخطاء واستخراج الرسالة من الخادم (Server)
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      setApiError(errorMessage);
    } finally {
      // 5. كتلة finally تُنفذ دائماً (سواء في حالة الـ try أو الـ catch)
      // هذا هو المكان الهندسي الصحيح لإيقاف مؤشر التحميل
      setisLoading(false);
    }
  };

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: handleLogin,
  });

  return (
    <StyledWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <h3 className="form-title">Log in</h3>
        <p className="form-subtitle">Welcome back</p>

        {apiError && (
          <div
            className="alert alert-danger p-2 text-center"
            style={{ fontSize: "14px" }}
          >
            {apiError}
          </div>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <div className="input-wrap">
            <FaEnvelope className="field-icon" />
            <Form.Control
              type="email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              isInvalid={!!(formik.errors.email && formik.touched.email)}
              placeholder="example@email.com"
            />
          </div>

          {formik.errors.email && formik.touched.email && (
            <div
              className="err-msg text-danger mt-1"
              style={{ fontSize: "12px" }}
            >
              {formik.errors.email}
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <div className="input-wrap">
            <FaLock className="field-icon" />
            <Form.Control
              type="password"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              isInvalid={!!(formik.errors.password && formik.touched.password)}
              placeholder="Enter password"
            />
          </div>

          {formik.errors.password && formik.touched.password && (
            <div
              className="err-msg text-danger mt-1"
              style={{ fontSize: "12px" }}
            >
              {formik.errors.password}
            </div>
          )}
        </Form.Group>

        <Button
          className="custom-submit-btn"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            "Loging in..." //Pending State
          ) : (
            <>
<FaSignInAlt style={{ marginRight: "8px" }} />              Log In
            </>
          )}
        </Button>

        <div className="text-center mt-4">
          <span style={{ color: "#999" }}>Dont have an account? </span>
          <Link to="/register" className="login-link">
            register now
          </Link>
        </div>
      </Form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  background-color: #1c1c1c;
  padding: 40px;
  border-radius: 12px;
  max-width: 550px;
  margin: 50px auto;
  color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);

  .form-title {
    color: #ffc107;
    font-weight: 700;
    text-align: center;
    margin-bottom: 4px;
  }
  .form-subtitle {
    text-align: center;
    color: #888;
    font-size: 13px;
    margin-bottom: 24px;
  }
  .form-label {
    font-weight: 500;
    color: #eaeaea;
    font-size: 14px;
  }

  .input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .field-icon {
    position: absolute;
    left: 13px;
    color: #666;
    font-size: 13px;
    z-index: 1;
  }

  .input-wrap .form-control,
  .input-wrap .form-select {
    padding-left: 36px;
  }

  .form-control,
  .form-select {
    background-color: #2b2b2b;
    border: 1px solid #444;
    color: white;
    padding: 10px 15px;
    &:focus {
      background-color: #2b2b2b;
      color: white;
      border-color: #ffc107;
      box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);
    }
    &::placeholder {
      color: #666;
    }
  }

  .custom-submit-btn {
    width: 100%;
    background-color: transparent;
    color: #ffc107;
    border: 2px solid #ffc107;
    border-radius: 50px;
    padding: 12px;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover {
      background-color: #ffc107;
      color: #121212;
    }
  }

  .login-link {
    color: #ffc107;
    font-weight: 600;
    text-decoration: none;
  }
  .login-link:hover {
    text-decoration: underline;
  }
`;

export default Login;
