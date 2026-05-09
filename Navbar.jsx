import { useState, useEffect, useRef } from "react";
import { drinks } from "../data/data";

function Navbar({
  page,
  setPage,
  onSearch,
  loggedIn,
  onLoginClick,
  onLogout,
  isAdmin
}) {

  const [q, setQ] = useState("");
  const [results, setResults] =
    useState([]);

  const ref = useRef();

  // ================= SEARCH =================
  const handleChange = (e) => {

    const val = e.target.value;

    setQ(val);

    if (val.trim().length > 0) {

      setResults(
        drinks
          .filter((d) =>
            d.name
              .toLowerCase()
              .includes(
                val.toLowerCase()
              )
          )
          .slice(0, 4)
      );

    } else {

      setResults([]);

    }

  };

  // ================= PILIH SEARCH =================
  const handleSelect = (drink) => {

    setQ("");

    setResults([]);

    onSearch(drink);

  };

  // ================= CLOSE DROPDOWN =================
  useEffect(() => {

    const fn = (e) => {

      if (
        ref.current &&
        !ref.current.contains(
          e.target
        )
      ) {

        setResults([]);

      }

    };

    document.addEventListener(
      "mousedown",
      fn
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        fn
      );

  }, []);

  return (

    <nav className="navbar">

      {/* LOGO */}
      <div
        className="nav-logo"
        onClick={() =>
          setPage("home")
        }
      >

        <span className="logo-badge">
          FD
        </span>

        <span className="logo-text">
          Fresh
          <span>Drink</span>
        </span>

      </div>

      {/* MENU */}
      <ul className="nav-links">

        <li>

          <a
            className={
              page === "home"
                ? "active"
                : ""
            }
            onClick={() =>
              setPage("home")
            }
          >
            Home
          </a>

        </li>

        <li>

          <a
            className={
              page === "kategori"
                ? "active"
                : ""
            }
            onClick={() =>
              setPage(
                "kategori"
              )
            }
          >
            Kategori
          </a>

        </li>

        <li>

          <a
            className={
              page === "about"
                ? "active"
                : ""
            }
            onClick={() =>
              setPage("about")
            }
          >
            About
          </a>

        </li>

        {/* ADMIN PANEL */}
        {loggedIn &&
          isAdmin && (

            <li>

              <a
                className={
                  page ===
                  "admin"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setPage(
                    "admin"
                  )
                }
              >
                Admin Panel
              </a>

            </li>

          )}

      </ul>

      {/* RIGHT */}
      <div className="nav-right">

        {/* SEARCH */}
        <div
          className="search-wrap"
          ref={ref}
        >

          <span className="search-icon">
            🔍
          </span>

          <input
            className="search-input"
            placeholder="search"
            value={q}
            onChange={handleChange}
          />

          {/* DROPDOWN */}
          {results.length >
            0 && (

            <div className="search-dropdown">

              {results.map(
                (d) => (

                  <div
                    key={d.id}
                    className="search-item"
                    onClick={() =>
                      handleSelect(
                        d
                      )
                    }
                  >

                    <img
                      src={d.img}
                      alt={d.name}
                    />

                    <span>
                      {d.name}
                    </span>

                  </div>

                )
              )}

            </div>

          )}

        </div>

        {/* LOGIN / LOGOUT */}
        {loggedIn ? (

          <div
            className="logged-menu"
            style={{
              display: "flex",
              alignItems:
                "center",
              gap: "10px"
            }}
          >

            {/* ICON USER */}
            <button className="btn-login">
              👤
            </button>

            {/* LOGOUT */}
            <button
              className="btn-logout"
              onClick={
                onLogout
              }
            >
              Logout
            </button>

          </div>

        ) : (

          <button
            className="btn-login"
            onClick={
              onLoginClick
            }
          >
            👤
          </button>

        )}

      </div>

    </nav>

  );

}

export default Navbar;