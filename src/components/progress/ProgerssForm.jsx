import { useState, useMemo, useCallback } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";                                                                                                                                                                                                                                                                                                           
import "./Form.css";

const FormComponent = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({});

  const steps = useMemo(
    () => [
      {
        title: "Step 1",
        content: (
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name...",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
        ),
      },
      {
        title: "Step 2",
        content: (
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email...",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        ),
      },
      {
        title: "Step 3",
        content: (
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your phone number...",
              },
            ]}
          >
            <Input placeholder="Phone" />
          </Form.Item>
        ),
      },
      {
        title: "Step 4",
        content: (
          <Form.Item
            label="Services"
            name="services"
            rules={[
              {
                required: true,
                message: "Please select at least one service...",
              },
            ]}
          >
            <div className="services">
              <h3 style={{ marginBottom: "1rem" }}>Services</h3>
              <Checkbox.Group className="service-head">
                <Checkbox value="Website Development">
                  Website Development
                </Checkbox>
                <Checkbox value="SEO Services">SEO Services</Checkbox>
                <Checkbox value="Brand Design">Brand Design</Checkbox>
                <Checkbox value="E-Commerce Development">
                  E-Commerce Development
                </Checkbox>
                <Checkbox value="Mobile App Development">
                  Mobile App Development
                </Checkbox>
                <Checkbox value="CRM & ERP Development">
                  CRM & ERP Development
                </Checkbox>
                <Checkbox value="Digital Marketing">
                  Digital Marketing
                </Checkbox>
                <Checkbox value="Others">Others</Checkbox>
              </Checkbox.Group>
            </div>
          </Form.Item>
        ),
      },
    ],
    []
  );

  const handleNext = useCallback(() => {
    form
      .validateFields()
      .then((values) => {
        setFormData((prevFormData) => ({ ...prevFormData, ...values }));
        setCurrentStep((prevStep) => prevStep + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [form]);

  const handlePrev = useCallback(() => {
    setCurrentStep((prevStep) => prevStep - 1);
  }, []);

  const onFinish = async () => {
   
    setLoading(true);
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      services: formData.services,
    };

    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setSuccess(true);
        form.resetFields();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };
  return (
    <div className="form-wrapper">
      <Form form={form} onFinish={onFinish}>
        {steps[currentStep].content}
        <div className="steps-action">
          {currentStep  > 0 && (
        <Button
          style={{ margin: "10px 8px", color: "white" }}
          onClick={handlePrev}
        >
          Previous
        </Button>
      )}
      {currentStep < steps.length - 1 && (
        <Button type="primary" onClick={handleNext}>
          Next
        </Button>
      )}
      {currentStep === steps.length - 1 && (
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      )}
    </div>
    {success && (
      <div className="success">
        <p>Thank you for contacting us!</p>
      </div>
    )}
  </Form>
</div>
  )}

export default FormComponent;