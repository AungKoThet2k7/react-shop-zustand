# AeroCart (React + Zustand)

A modern, responsive e-commerce shopping interface built with **React**, **Vite**, and **Zustand** for efficient state management.

## 🚀 Features

- **Product Listing**: Browse a variety of products with detailed information.
- **Category Filtering**: Quickly find products by filtering through different categories.
- **Interactive Shopping Cart**:
  - Add products to the cart.
  - Remove items or clear the entire cart.
  - Update item quantities dynamically.
  - Real-time price calculations (Subtotal, Tax, Total).
- **Product Details**: View in-depth details for each product.
- **Animations**: Smooth scroll-reveal animations powered by **AOS**.
- **User Feedback**:
  - Toast notifications using **React Hot Toast**.
  - Elegant alerts with **SweetAlert2**.
- **Responsive Design**: Fully responsive layout built with **Tailwind CSS**, featuring a custom theme.

## 🛠️ Tech Stack

- **Core**: [React 18](https://react.dev/), [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **State Management**: [Zustand 5](https://github.com/pmndrs/zustand)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Utilities**: [UUID](https://github.com/uuidjs/uuid), [React Hot Toast](https://react-hot-toast.com/), [SweetAlert2](https://sweetalert2.github.io/)

## 📂 Project Structure

- `src/components`: UI components (Header, Footer, ProductCard, etc.)
- `src/pages`: Main application pages (Home, MyCart, ProductDetail).
- `src/store`: Zustand stores for global state management.
- `src/data`: Static or mock data for the application.
- `src/routes`: Application routing configuration.
