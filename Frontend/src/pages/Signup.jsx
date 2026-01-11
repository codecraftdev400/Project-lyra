import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthSidebar from "../components/AuthSidebar";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!agreedToTerms) {
      newErrors.terms = "You must agree to terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      setTimeout(async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 1500));
          console.log("Signup successful", formData);
          alert("Account created successfully! Welcome to Lyra.");
          navigate("/login");
        } finally {
          setIsLoading(false);
        }
      }, 0);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <AuthSidebar />

      <div className="flex-1 ml-20 flex items-center justify-center py-12">
        <div className="w-full max-w-6xl px-12">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="hidden lg:flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl mb-6">
                {/* Placeholder Image - Replace with actual image */}
                <div className="w-full h-full bg-linear-to-br from-amber-900 via-slate-900 to-slate-950 flex flex-col items-center justify-center">
                  <div className="text-7xl mb-6">🎯</div>
                  <p className="text-amber-300 text-2xl font-bold text-center px-4">Welcome to Lyra</p>
                  <p className="text-amber-200/60 text-sm mt-3 text-center px-4">Unlock the power of intelligent AI</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-slate-400 text-sm">Join thousands of users already using Lyra</p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-10">
                <h1 className="text-5xl font-bold text-white mb-3">Create account</h1>
                <p className="text-slate-400 text-lg">Join Lyra and start your journey</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className={`w-full px-5 py-3 rounded-xl bg-slate-800/50 border transition-all duration-300 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className={`w-full px-5 py-3 rounded-xl bg-slate-800/50 border transition-all duration-300 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent ${
                      errors.email ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
                </div>

                {/* Password */}
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className={`w-full px-5 py-3 rounded-xl bg-slate-800/50 border transition-all duration-300 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent ${
                      errors.password ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.password && <p className="text-red-400 text-xs mt-2">{errors.password}</p>}
                </div>

                {/* Terms & Conditions */}
                <div className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  errors.terms ? "border-red-500/50 bg-red-500/5" : "border-slate-700/50 bg-slate-800/30"
                }`}>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => {
                        setAgreedToTerms(e.target.checked);
                        if (e.target.checked && errors.terms) {
                          setErrors(prev => ({ ...prev, terms: "" }));
                        }
                      }}
                      className="w-5 h-5 rounded cursor-pointer accent-amber-400"
                      disabled={isLoading}
                    />
                    <span className="text-sm text-slate-300">
                      I agree to the{" "}
                      <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                        Terms of Service
                      </a>
                      {" "}and{" "}
                      <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors font-medium">
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                  {errors.terms && <p className="text-red-400 text-xs mt-2 ml-8">{errors.terms}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      Creating account...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700/50"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-slate-950 text-slate-400">or continue with</span>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    disabled={isLoading}
                    className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800/60 transition-all duration-300 text-slate-300 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </button>
                  <button
                    type="button"
                    disabled={isLoading}
                    className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800/30 hover:bg-slate-800/60 transition-all duration-300 text-slate-300 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4.77 0 1.4.63 1.4 1.4v4.34h2.5M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69-.93 0-1.69.76-1.69 1.69 0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.5H5.5v8.5h2.77z"/>
                    </svg>
                    LinkedIn
                  </button>
                </div>
              </form>

              {/* Sign In Link */}
              <div className="mt-8 text-center">
                <p className="text-slate-400 text-sm">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;


              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border transition-all duration-300 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.email ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                  }`}
                  placeholder="you@example.com"
                  disabled={isLoading}
                />
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border transition-all duration-300 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.password ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                  }`}
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                {errors.password && <p className="text-red-400 text-sm mt-2">{errors.password}</p>}
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-400">Password strength</span>
                      <span className={`text-xs font-semibold ${passwordStrength === "strong" ? "text-green-400" : "text-yellow-400"}`}>
                        {passwordStrength === "strong" ? "Strong" : "Weak"}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          passwordStrength === "strong" ? "w-full bg-green-500" : "w-1/3 bg-yellow-500"
                        }`}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border transition-all duration-300 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.confirmPassword ? "border-red-500" : "border-slate-700 hover:border-slate-600"
                  }`}
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                {errors.confirmPassword && <p className="text-red-400 text-sm mt-2">{errors.confirmPassword}</p>}
              </div>

              {/* Terms Checkbox */}
              <div className={`p-4 rounded-lg border transition-all duration-300 ${
                errors.terms ? "border-red-500 bg-red-500/10" : "border-slate-700 bg-slate-800/30"
              }`}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      if (e.target.checked && errors.terms) {
                        setErrors(prev => ({ ...prev, terms: "" }));
                      }
                    }}
                    className="w-5 h-5 rounded mt-0.5 cursor-pointer accent-purple-500"
                    disabled={isLoading}
                  />
                  <span className="text-sm text-slate-300">
                    I agree to the{" "}
                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Terms of Service
                    </a>
                    {" "}and{" "}
                    <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Privacy Policy
                    </a>
                  </span>
                </label>
                {errors.terms && <p className="text-red-400 text-sm mt-2">{errors.terms}</p>}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {errors.submit}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-lg font-bold text-white bg-linear-to-r from-blue-500 to-purple-600 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 mt-6"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Creating account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
            <div className="space-y-3">
              <button
                type="button"
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 font-medium text-slate-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button
                type="button"
                disabled={isLoading}
                className="w-full px-4 py-3 rounded-lg border border-slate-700 bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 font-medium text-slate-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.4 24c5.3 0 10-1.1 13.6-4.3.7-.7 1.3-1.5 1.6-2.4.3-1 .5-2.1.5-3.3V5.5c0-1.6-.4-3.1-1.3-4.3C24.2.5 20 0 16.5 0H4C1.5 0 0 1.5 0 4v16c0 2.5 1.5 4 4 4h7.4z" fill="#0078D4"/>
                </svg>
                Microsoft
              </button>
            </div>

            {/* Sign In Link */}
            <div className="mt-8 text-center">
              <p className="text-slate-400 text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-slate-500 text-center mt-6">
              By signing up, you agree to our{" "}
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center text-sm text-slate-400">
            <p>
              Questions?{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                Check our FAQ
              </a>
              {" "}or{" "}
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                contact support
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
