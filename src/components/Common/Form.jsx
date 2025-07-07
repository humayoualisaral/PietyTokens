import { useState } from "react";

export default function MembershipApplication({ 
  width = "447px", 
  borderRadius = "rounded-l-xl" 
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investedAmount: '',
    membershipType: '',
    referralCode: ''
  });

  const [errors, setErrors] = useState({});

  const membershipOptions = [
    { value: '', label: 'Select Membership Type' },
    { value: 'basic', label: 'Basic' },
    { value: 'premium', label: 'Premium' },
    { value: 'vip', label: 'VIP' }
  ];

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Full name is required';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Please enter a valid email';
        break;
      case 'phone':
        const phoneRegex = /^\+?[\d\s-()]{10,}$/;
        if (!value.trim()) error = 'Phone number is required';
        else if (!phoneRegex.test(value)) error = 'Please enter a valid phone number';
        break;
      case 'investedAmount':
        const amount = parseFloat(value);
        if (!value.trim()) error = 'Investment amount is required';
        else if (isNaN(amount) || amount <= 1000) error = 'Amount must be greater than 1000';
        break;
      case 'membershipType':
        if (!value) error = 'Please select a membership type';
        break;
      case 'referralCode':
        // Optional field, no validation needed
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = () => {
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Application submitted successfully!');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div 
        className={`max-w-[${width}] w-full max-lg:max-w-[447px] max-lg:w-[447px] p-[48px] max-sm:p-[24px] bg-[#E5E7EB] ${borderRadius} border-outset border-[1px] border-[#EAB3084D]`}
      >
        <h2 className="font-bold text-[24px] max-sm:text-[20px] pb-[20px] max-sm:pb-[16px] text-[#111827]">Apply for Membership</h2>
        
        {/* Full Name */}
        <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
          <label htmlFor="name" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Full Name
          </label>
          <input 
            className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl ${
              errors.name ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            type="text" 
            name="name" 
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Enter Your Full Name" 
          />
          {errors.name && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
          <label htmlFor="email" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Email Address
          </label>
          <input 
            className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl ${
              errors.email ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            type="email" 
            name="email" 
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Enter Your Email Address" 
          />
          {errors.email && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.email}</span>}
        </div>

        {/* Phone */}
        <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
          <label htmlFor="phone" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Phone Number
          </label>
          <input 
            className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl ${
              errors.phone ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            type="tel" 
            name="phone" 
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Enter Your Phone Number" 
          />
          {errors.phone && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.phone}</span>}
        </div>

        {/* Investment Amount */}
        <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
          <label htmlFor="investedAmount" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Investment Amount
          </label>
          <input 
            className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl ${
              errors.investedAmount ? 'border-red-500' : 'border-[#D1D5DB]'
            }`}
            type="number" 
            name="investedAmount" 
            id="investedAmount"
            value={formData.investedAmount}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Enter Amount (Min: 1000)" 
          />
          {errors.investedAmount && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.investedAmount}</span>}
        </div>

        {/* Membership Type */}
        <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
          <label htmlFor="membershipType" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Membership Type
          </label>
          <div className="relative">
            <select 
              className={`border-[1px] outline-none text-[14px] max-sm:text-[12px] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl appearance-none bg-transparent w-full pr-8 ${
                errors.membershipType ? 'border-red-500' : 'border-[#D1D5DB]'
              } ${!formData.membershipType ? 'text-[#ADAEBC]' : ''}`}
              name="membershipType" 
              id="membershipType"
              value={formData.membershipType}
              onChange={handleInputChange}
              onBlur={handleBlur}
            >
              {membershipOptions.map(option => (
                <option key={option.value} value={option.value} className="bg-transparent border-none text-[#111827]">
                  {option.label}
                </option>
              ))}
            </select>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 max-sm:w-3 max-sm:h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.membershipType && <span className="text-red-500 text-[12px] max-sm:text-[10px] mt-1">{errors.membershipType}</span>}
        </div>

        {/* Referral Code */}
        <div className="flex flex-col pb-[16px] max-sm:pb-[14px]">
          <label htmlFor="referralCode" className="text-[14px] max-sm:text-[12px] text-[#1F2937] pb-[5px] max-sm:pb-[3px] font-medium">
            Referral Code (Optional)
          </label>
          <input 
            className="border-[#D1D5DB] border-[1px] outline-none text-[14px] max-sm:text-[12px] placeholder-[#ADAEBC] text-[#111827] p-[10px] max-sm:p-[8px] rounded-xl"
            type="text" 
            name="referralCode" 
            id="referralCode"
            value={formData.referralCode}
            onChange={handleInputChange}
            placeholder="Enter Referral Code" 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="button"
          onClick={handleSubmit}
          className="pt-[12px] pb-[12px] max-sm:pt-[10px] max-sm:pb-[10px] w-full text-[16px] max-sm:text-[14px] font-semibold text-[#000000] bg-[#CA8A04] rounded-[8px] hover:bg-[#CA8A04]/90 transition-colors"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
}