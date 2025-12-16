import React, { useState, useEffect } from "react";
import { Server_URL } from "../../utils/config";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";
import { FiBook, FiSearch, FiClock, FiUser, FiCalendar } from "react-icons/fi";
import Preloader from "../../components/Preloader";
import { useNavigate } from "react-router-dom";
import { showErrorToast, showSuccessToast } from "../../utils/toasthelper";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [stats, setStats] = useState({
    totalBooks: 0,
    availableBooks: 0,
    students: 0,
  });
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function issueBook(bookid) {
    try {
      console.log("bookId");
      console.log(bookid);
      const authToken = localStorage.getItem("authToken");
      console.log(authToken);
      if (!authToken) {
        showErrorToast("Please login to issue a book.");
        return;
      }
      const url = Server_URL + "borrow/request-issue/" + bookid;
      const response = await axios.post(
        `${Server_URL}books/borrow/request-issue/${bookid}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      // alert(response.data);
      const { error, message } = response.data;
      if (error) {
        console.log(error);
        showErrorToast(message);
      } else {
        showSuccessToast(message);
      }
    } catch (error) {
      // console.error("Error:", error.response?.data || error.message);
      showErrorToast(
        error.response?.data?.message ||
          "Something went wrong! Please try again."
      );
    }
  }

  async function bookDetails(bookid) {
    console.log(bookid);
    navigate(`/bookdetails/${bookid}`);
  }

  const fetchData = React.useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(Server_URL + "home");
      if (!data.error) {
        console.log(data);
        setStats(data.stats);
        setCategories(data.categories);
        setNewArrivals(data.newArrivals);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <Preloader />;

  return (
    <div className="library-homepage">
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Welcome to City University Library</h1>
          <p className="hero-subtitle">
            Access academic resources, textbooks, and research materials
          </p>

          <div className="hero-buttons">
            <Link to="/books" className="btn btn-primary">
              <FiBook size={18} className="mr-2" />
              Browse collections
            </Link>
          </div>
        </div>
      </header>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-cardhome">
              <FiBook className="stat-icon" />
              <h3>{stats.totalCategories}+</h3>
              <p>Total Categories</p>
            </div>
            <div className="stat-cardhome">
              <FiBook className="stat-icon" />
              <h3>{stats.totalBooks}+</h3>
              <p>Total Books</p>
            </div>

            <div className="stat-cardhome">
              <FiUser className="stat-icon" />
              <h3>{stats.totalActiveStudents}</h3>
              <p>Active Students</p>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Browse By Categories</h2>
          <p className="section-subtitle">Find resources for your courses</p>

          <div className="categories-grid">
            {categories.map((cat, index) => (
              <div key={index} className="d-flex flex-column category-card">
                <div className="category-img-container">
                  <img
                    src={cat.coverImage || "/images/default-subject.jpg"}
                    alt={cat.category}
                    loading="lazy"
                  />
                </div>
                <div className="d-flex flex-column flex-fill justify-content-between category-info">
                  <h3>{cat.category}</h3>
                  <p>Books: {cat.count}</p>
                  <Link
                    to={`/books?category=${cat.category}`}
                    className="btn btn-outline"
                  >
                    View Collection
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/category" className="btn btn-view-all">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      <section className="na-section">
        <div className="na-container">
          <h2 className="na-heading">New Arrivals</h2>
          <p className="na-subheading">Recently added to our collection</p>

          <div className="na-grid-container">
            {newArrivals.map((book, index) => (
              <div key={index} className="d-flex flex-column  na-book-item">
                <div className="na-cover-wrapper">
                  <img
                    src={book.coverImage || "/images/default-book.jpg"}
                    alt={book.title}
                    className="na-cover-image"
                    loading="lazy"
                  />
                </div>
                <div className="d-flex flex-column flex-fill justify-content-between p-3">
                  <div>
                    <h3 className="na-book-title">{book.title}</h3>
                  <p className="na-book-author">{book.author}</p>
                  <span className="na-book-category">{book.category}</span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-3">
                    <span className="card-price">৳{book.price}</span>
                      <button
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => bookDetails(book._id)}
                      >
                        Details
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => issueBook(book._id)}
                      >
                        Issue
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hours-section">
        <div className="container">
          <h2 className="section-title">Library Hours</h2>
          <div className="hours-grid">
            <div className="hours-card">
              <FiClock className="hours-icon" />
              <h3>Regular Hours</h3>
              <p>Fri-Tue: 9:00 AM - 4:00 PM</p>
              <p>Wednesday - Thursday: Closed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
