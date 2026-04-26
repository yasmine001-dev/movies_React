import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserPlus,
  FaPhone,
} from "react-icons/fa";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { UserContext } from "../context/UserContext";


function Registration() {
  const [isLoading, setisLoading]=useState(false);
  const [apiError, setApiError] = useState(""); // الإيرور اللي جيلي من ال api 
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Required"),

    phone: Yup.string()
      // لازم الرقم يكون مصري (بناء ع ال api)
      .matches(/^01[0125][0-9]{8}$/, "Phone must be a valid Egyptian number")
      .required("Required"),

    password: Yup.string()

.matches(/^[A-Za-z0-9]{6,20}$/, "password must be valid")
      .required("Required"),

    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], "Passwords must match")
      .required("Required"),
  });

  let navigate = useNavigate();
let {setUserLogin} = useContext(UserContext);
  const handleRegister = async (formValues) => {
    // 1. تهيئة حالة واجهة المستخدم (UI State) قبل بدء الطلب
    setisLoading(true); // بدء حالة التحميل
  setApiError(""); // تصفير أي أخطاء سابقة قبل إرسال الطلب الجديد
    try {
      // 2. إرسال الطلب (HTTP Request) وانتظار الاستجابة
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        formValues
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
    const errorMessage = error.response?.data?.message || "An unexpected error occurred.";
    setApiError(errorMessage);    }

    finally {
    // 5. كتلة finally تُنفذ دائماً (سواء في حالة الـ try أو الـ catch)
    // هذا هو المكان الهندسي الصحيح لإيقاف مؤشر التحميل
    setisLoading(false);
  }
  };

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: SignupSchema,
    onSubmit: handleRegister,
  });

  return (
    <StyledWrapper>
      <Form onSubmit={formik.handleSubmit}>
        <h3 className="form-title">Create Account</h3>
        <p className="form-subtitle">Join us in AraCima</p>

{/* 1. التعديل الأول: عرض رسالة خطأ الـ API إن وجدت */}
{/* Account Already Exists */}

        {apiError && (
          <div className="alert alert-danger p-2 text-center" style={{ fontSize: "14px" }}>
            {apiError}
          </div>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <div className="input-wrap">
            <FaUser className="field-icon" />
            <Form.Control
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={!!(formik.errors.name && formik.touched.name)}
              placeholder="Enter your full name"
            />
          </div>
         
          {formik.errors.name && formik.touched.name && (
            <div className="err-msg text-danger mt-1" style={{fontSize: "12px"}}>{formik.errors.name}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <div className="input-wrap">
            <FaPhone className="field-icon" />
            <Form.Control
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              isInvalid={!!(formik.errors.phone && formik.touched.phone)}
              placeholder="Enter phone number"
            />
          </div>
         
          {formik.errors.phone && formik.touched.phone && (
            <div className="err-msg text-danger mt-1" style={{fontSize: "12px"}}>{formik.errors.phone}</div>
          )}
        </Form.Group>

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
            <div className="err-msg text-danger mt-1" style={{fontSize: "12px"}}>{formik.errors.email}</div>
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
            <div className="err-msg text-danger mt-1" style={{fontSize: "12px"}}>{formik.errors.password}</div>
          )}
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Confirm Password</Form.Label>
          <div className="input-wrap">
            <FaLock className="field-icon" />
            <Form.Control
              type="password"
              name="rePassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.rePassword}
              isInvalid={!!(formik.errors.rePassword && formik.touched.rePassword)}
              placeholder="Enter password again"
            />
          </div>

          {formik.errors.rePassword && formik.touched.rePassword && (
            <div className="err-msg text-danger mt-1" style={{fontSize: "12px"}}>{formik.errors.rePassword}</div>
          )}
        </Form.Group>

        <Button className="custom-submit-btn" type="submit" disabled={isLoading}>
          {isLoading ? (
            "Creating Account..." //Pending State
          ) : (
            <>
              <FaUserPlus style={{ marginRight: "8px" }} />
              Create Account
            </>
          )}
        </Button>

        <div className="text-center mt-4">
          <span style={{ color: "#999" }}>Already have an account? </span>
          <Link to="/login" className="register-link">
            Log In
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

  .register-link {
    color: #ffc107;
    font-weight: 600;
    text-decoration: none;
  }
  .register-link:hover {
    text-decoration: underline;
  }
`;

export default Registration;