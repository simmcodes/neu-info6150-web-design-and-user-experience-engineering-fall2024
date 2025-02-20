import React, { useState, useEffect } from 'react';
import '../styles/registrationpage.css'; 

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    subscribeCategories: false,
    preferences: '',
    comments: '',
    category: '',
    otherCategory: '',
    shippingAddress: '',
    billingAddress: '',
    billingAddressSame: false,
    productType: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    preferences: ''
  });

  const updateForm = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    }
    const emailPattern = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (!emailPattern.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validateConfirmEmail = (confirmEmail, email) => {
    if (!confirmEmail) {
      return 'Please confirm your email';
    }
    if (confirmEmail !== email) {
      return 'Emails do not match';
    }
    return '';
  };

  const validateName = (name) => {
    if (!name) {
      return 'Name is required';
    }
    return '';
  };

  const validatePreferences = (preferences) => {
    if (!preferences) {
      return 'Please select a content preference';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      confirmEmail: validateConfirmEmail(formData.confirmEmail, formData.email),
      preferences: validatePreferences(formData.preferences)
    };

    
    Object.values(newErrors).forEach(error => {
      if (error) {
        isValid = false;
      }
    });

    if (isValid) {
     
      console.log('Form submitted successfully!', formData);
     
      setFormData({
        name: '',
        email: '',
        confirmEmail: '',
        subscribeCategories: false,
        preferences: '',
        comments: '',
        category: '',
        otherCategory: '',
        shippingAddress: '',
        billingAddress: '',
        billingAddressSame: false,
        productType: ''
      });
      setErrors({
        name: '',
        email: '',
        confirmEmail: '',
        preferences: ''
      });
    } else {
      setErrors(newErrors);
    }
  };

  
  useEffect(() => {
    if (formData.category === 'makeup') {
      setFormData(prevState => ({
        ...prevState,
        productType: ''
      }));
    } else if (formData.category === 'skincare') {
      setFormData(prevState => ({
        ...prevState,
        productType: ''
      }));
    }
  }, [formData.category]);

  return (
    <div className="registration-page">
      <h1>Sign Up for Our Newsletter</h1>
      <p>Stay updated with the latest beauty tips, trends, and tutorials.</p>

      <form onSubmit={handleSubmit} className="registration-form">
       
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={e => updateForm('name', e.target.value)}
            required
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

      
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={e => updateForm('email', e.target.value)}
            onBlur={() => setErrors(prevState => ({ ...prevState, email: validateEmail(formData.email) }))}
            required
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

       
        <div className="form-group">
          <label htmlFor="confirm-email">Confirm Email:</label>
          <input
            type="text"
            id="confirm-email"
            name="confirm-email"
            placeholder="Re-enter your email"
            value={formData.confirmEmail}
            onChange={e => updateForm('confirmEmail', e.target.value)}
            onBlur={() => setErrors(prevState => ({ ...prevState, confirmEmail: validateConfirmEmail(formData.confirmEmail, formData.email) }))}
            required
          />
          {errors.confirmEmail && <span className="error-text">{errors.confirmEmail}</span>}
        </div>

     
        <div className="form-group">
          <label htmlFor="category">Beauty Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={e => updateForm('category', e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="makeup">Makeup</option>
            <option value="skincare">Skincare</option>
            <option value="other">Other</option>
          </select>
        </div>

       
        {formData.category === 'other' && (
          <div className="form-group">
            <label htmlFor="other-category">Please Specify:</label>
            <input
              type="text"
              id="other-category"
              name="other-category"
              value={formData.otherCategory}
              onChange={e => updateForm('otherCategory', e.target.value)}
            />
          </div>
        )}

        
        <div className="form-group">
          <label htmlFor="subscribe-categories">Subscribe to makeup and skincare categories:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="subscribe-categories"
                checked={formData.subscribeCategories}
                onChange={e => updateForm('subscribeCategories', e.target.checked)}
              />
              Yes, I would like to receive updates
            </label>
          </div>
        </div>

        
        <div className="form-group">
          <label htmlFor="preferences">Content Preferences:</label>
          <select
            id="preferences"
            name="preferences"
            value={formData.preferences}
            onChange={e => updateForm('preferences', e.target.value)}
            required
          >
            <option value="">Choose an option</option>
            <option value="makeup">Makeup Tips</option>
            <option value="skincare">Skincare Advice</option>
            <option value="beauty-hacks">Beauty Hacks</option>
          </select>
          {errors.preferences && <span className="error-text">{errors.preferences}</span>}
        </div>

       
        <div className="form-group">
          <label htmlFor="shipping-address">Shipping Address:</label>
          <input
            type="text"
            id="shipping-address"
            name="shipping-address"
            value={formData.shippingAddress}
            onChange={e => updateForm('shippingAddress', e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="billing-address-same"
              checked={formData.billingAddressSame}
              onChange={e => {
                updateForm('billingAddressSame', e.target.checked);
                if (e.target.checked) {
                  updateForm('billingAddress', formData.shippingAddress);
                } else {
                  updateForm('billingAddress', '');
                }
              }}
            />
            Billing Address Same as Shipping Address
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="billing-address">Billing Address:</label>
          <input
            type="text"
            id="billing-address"
            name="billing-address"
            value={formData.billingAddress}
            onChange={e => updateForm('billingAddress', e.target.value)}
            readOnly={formData.billingAddressSame}
            required={!formData.billingAddressSame}
          />
        </div>

       
        {formData.category && (
          <div className="form-group">
            <label htmlFor="product-type">Product Type:</label>
            <select
              id="product-type"
              name="product-type"
              value={formData.productType}
              onChange={e => updateForm('productType', e.target.value)}
              required
            >
              <option value="">Select Product Type</option>
              {formData.category === 'makeup' && (
                <>
                  <option value="foundation">Foundation</option>
                  <option value="lipstick">Lipstick</option>
                  <option value="mascara">Mascara</option>
                </>
              )}
              {formData.category === 'skincare' && (
                <>
                  <option value="cleanser">Cleanser</option>
                  <option value="moisturizer">Moisturizer</option>
                  <option value="serum">Serum</option>
                </>
              )}
            </select>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="comments">Additional Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={e => updateForm('comments', e.target.value)}
            placeholder="Enter your comments here"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;
