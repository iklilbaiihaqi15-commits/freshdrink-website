import { useState } from "react";

function LoginModal({
  onClose,
  onSuccess
}) {

  const [isAdmin, setIsAdmin] =
    useState(false);

  const [isLogin, setIsLogin] =
    useState(true);

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  // USER
  const users =
    JSON.parse(
      localStorage.getItem("users")
    ) || [];

  // SUBMIT
  const handleSubmit = () => {

    // ================= ADMIN =================
    if (isAdmin) {

      if (
        username === "admin" &&
        password === "admin123"
      ) {

        const adminUser = {
          username: "admin"
        };

        localStorage.setItem(
          "currentUser",
          JSON.stringify(adminUser)
        );

        onSuccess(
          "✅ Login berhasil!"
        );

      } else {

        alert(
          "Username atau password admin salah!"
        );

      }

      return;
    }

    // ================= LOGIN USER =================
    if (isLogin) {

      const foundUser =
        users.find(
          (u) =>
            u.username === username &&
            u.password === password
        );

      if (foundUser) {

        localStorage.setItem(
          "currentUser",
          JSON.stringify(foundUser)
        );

        onSuccess(
          "✅ Login berhasil!"
        );

      } else {

        alert(
          "Username atau password salah!"
        );

      }

    }

    // ================= DAFTAR USER =================
    else {

      const userExist =
        users.find(
          (u) =>
            u.username === username
        );

      if (userExist) {

        alert(
          "Username sudah digunakan!"
        );

        return;
      }

      const newUser = {
        username,
        password
      };

      localStorage.setItem(
        "users",
        JSON.stringify([
          ...users,
          newUser
        ])
      );

      localStorage.setItem(
        "currentUser",
        JSON.stringify(newUser)
      );

      onSuccess(
        "✅ Daftar berhasil!"
      );
    }
  };

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        {/* CLOSE */}
        <button
          className="modal-close"
          onClick={onClose}
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className="modal-title">
          {isAdmin
            ? "LOGIN ADMIN"
            : isLogin
            ? "LOGIN USER"
            : "DAFTAR USER"}
        </h2>

        {/* PILIH LOGIN */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px"
          }}
        >

          {/* USER */}
          <button
            onClick={() => {
              setIsAdmin(false);
              setIsLogin(true);
            }}
            style={{
              flex: 1,
              padding: "12px",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "700",
              background: !isAdmin
                ? "#34D399"
                : "#E5E7EB",
              color: !isAdmin
                ? "#fff"
                : "#111827"
            }}
          >
            {isLogin
              ? "Login User"
              : "Daftar User"}
          </button>

          {/* ADMIN */}
          <button
            onClick={() =>
              setIsAdmin(true)
            }
            style={{
              flex: 1,
              padding: "12px",
              border: "none",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "700",
              background: isAdmin
                ? "#EF4444"
                : "#E5E7EB",
              color: isAdmin
                ? "#fff"
                : "#111827",
              whiteSpace: "nowrap"
            }}
          >
            Login Admin
          </button>

        </div>

        {/* USERNAME */}
        <div className="modal-field">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
          />

        </div>

        {/* PASSWORD */}
        <div className="modal-field">

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "16px",
            marginTop: "10px",
            background: isAdmin
              ? "#EF4444"
              : "#34D399",
            color: "#fff"
          }}
        >
          Masuk
        </button>

        {/* DAFTAR */}
        {!isAdmin && (

          <div
            style={{
              marginTop: "16px",
              textAlign: "center",
              fontSize: "14px"
            }}
          >

            {isLogin ? (
              <>
                Belum punya akun?{" "}

                <span
                  onClick={() =>
                    setIsLogin(false)
                  }
                  style={{
                    color: "#34D399",
                    cursor: "pointer",
                    fontWeight: "700"
                  }}
                >
                  Daftar User
                </span>
              </>
            ) : (
              <>
                Sudah punya akun?{" "}

                <span
                  onClick={() =>
                    setIsLogin(true)
                  }
                  style={{
                    color: "#34D399",
                    cursor: "pointer",
                    fontWeight: "700"
                  }}
                >
                  Login User
                </span>
              </>
            )}

          </div>

        )}

        {/* INFO ADMIN */}
        {isAdmin && (

          <div
            style={{
              marginTop: "16px",
              fontSize: "13px",
              opacity: 0.7,
              textAlign: "center"
            }}
          >
            Username: admin
            <br />
            Password: admin123
          </div>

        )}

      </div>

    </div>

  );
}

export default LoginModal;