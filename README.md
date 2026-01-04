# 🏥 Hospital Management System (HMS) – Frontend (Patient Panel)

This is the **patient-facing frontend application** for the Hospital Management System (HMS).

Users can view available doctors, book appointments, and make secure online payments.  
The frontend communicates with the HMS backend through REST APIs.

---

## ✨ Features

### 👤 User Authentication
- User signup and login
- JWT-based authentication
- Protected routes (booking & payment require login)

---

### 🧑‍⚕️ Doctor Listing
- Display all available doctors
- Doctor details:
  - Name
  - Specialization
  - Experience
  - Consultation fees

---

### 📅 Appointment Booking
- Book appointments with selected doctors
- Appointment request sent to backend
- Status updated after doctor approval or rejection

---

### 💳 Online Payments
- Payment options available on **Pay Now**
  - Stripe
  - Razorpay
- Secure payment flow
- Payment status stored and verified by backend

---

### 📱 Responsive UI
- Mobile-friendly design
- Works on desktop, tablet, and mobile devices
- Clean and user-friendly interface

---

## 🛠 Tech Stack

- React.js (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- React Router
- Axios
- Stripe & Razorpay SDKs

---

## 📂 Project Structure

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── routes/
│ ├── context/
│ └── main.jsx
├── public/
├── vercel.json
├── package.json
└── README.md