import UserCard from "./components/UserCard";
import ProductCard from "./components/ProductCard";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import NameInput from "./components/NameInput";
import ProfileForm from "./components/ProfileForm";
import UserList from "./components/UserList";
import PageTitle from "./components/PageTitle";
import UserProfile from "./components/UserProfile";
import CheckForms from "./components/CheckForms";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import UserDetails from "./components/UserDetails";

function App() {
  // let userName = "Usman";
  // let X = 5;
  // let Y = 30;


  // const products = [
  //   { id: 1, title: "Laptop", price: 10001, stock: 10, category: "Electronics" },
  //   { id: 2, title: "Phone", price: 5000, stock: 20, category: "Electronics" },
  //   { id: 3, title: "Shirt", price: 2000, stock: 50, category: "Clothing" },
  // ];

  return (

    <BrowserRouter>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/1">User1</Link>
        <Link to="/user/2">User2</Link>
        <Link to="/user/3">User3</Link>
      </nav>


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/user" element={<User />} /> */}
        <Route path="*" element={<NotFound />} />
        <Route path="/user/:id" element={< UserDetails />} />
      </Routes>

    </BrowserRouter>
  );


    // <>

      /* <CheckForms />
      <UserProfile userId={1} />
      <PageTitle userName="Usman" />
      <UserList />
      <ProfileForm />
      <NameInput />
      <ThemeToggle />
      <Counter />
      <UserCard name={userName} />
      <ProductCard title="Laptop" price={10001} stock={10} category="Electronics" />

      <h1>Welcome to 3logy {userName}</h1>
      <h2>Sum is {X + Y}</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      {X > 10 && <p>X is greater than 10</p>}
      {X > 10 ? <p>X is greater than 10</p> : <p>X is less than or equal to 10</p>} */}
// </>
// );


export default App;