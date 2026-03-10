import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 },
];

const categories = ["All", "Electronics", "Clothing", "Home"];

const categoryIcons = {
  Electronics: "⚡",
  Clothing: "👗",
  Home: "🏠",
  All: "✦",
};

function ProductCard({ product }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
        e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            flexShrink: 0,
          }}
        >
          {categoryIcons[product.category]}
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              color: "#fff",
            }}
          >
            {product.name}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#a78bfa",
              marginTop: "2px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {product.category}
          </div>
        </div>
      </div>
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "18px",
          color: "#c4b5fd",
          whiteSpace: "nowrap",
        }}
      >
        ₹{product.price.toLocaleString()}
      </div>
    </div>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0d14; }
        input::placeholder { color: rgba(167,139,250,0.4); }
        input:focus { outline: none; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #4c1d95; border-radius: 4px; }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#0d0d14",
          fontFamily: "'DM Sans', sans-serif",
          color: "#fff",
          padding: "40px 24px",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120,40,200,0.25), transparent)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "36px", textAlign: "center" }}>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "0.3em",
                color: "#7c3aed",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              Product Explorer
            </div>
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Find What You{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Need
              </span>
            </h1>
          </div>

          {/* Search */}
          <div
            style={{
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "18px",
                pointerEvents: "none",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px 14px 46px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "12px",
                color: "#fff",
                fontSize: "15px",
                fontFamily: "'DM Sans', sans-serif",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) =>
                (e.target.style.borderColor = "rgba(139,92,246,0.6)")
              }
              onBlur={(e) =>
                (e.target.style.borderColor = "rgba(255,255,255,0.12)")
              }
            />
          </div>

          {/* Category Filters */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "28px",
              flexWrap: "wrap",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "100px",
                  border:
                    activeCategory === cat
                      ? "1px solid #7c3aed"
                      : "1px solid rgba(255,255,255,0.12)",
                  background:
                    activeCategory === cat
                      ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                      : "rgba(255,255,255,0.04)",
                  color: activeCategory === cat ? "#fff" : "#a78bfa",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "'Syne', sans-serif",
                  transition: "all 0.2s",
                  letterSpacing: "0.02em",
                }}
              >
                {categoryIcons[cat]} {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div
            style={{
              fontSize: "12px",
              color: "rgba(167,139,250,0.6)",
              marginBottom: "14px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>

          {/* Product List */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {filtered.length > 0 ? (
              filtered.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  color: "rgba(167,139,250,0.5)",
                  fontSize: "15px",
                }}
              >
                <div style={{ fontSize: "40px", marginBottom: "12px" }}>🔍</div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    marginBottom: "6px",
                    color: "#fff",
                  }}
                >
                  No products found
                </div>
                <div style={{ fontSize: "13px" }}>
                  Try a different search or category
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
