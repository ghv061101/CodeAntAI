import { useState } from "react";
import Layout from "../components/Layout";
import { ArrowPathIcon, CircleStackIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { DataMock } from "../../data";

const Home = () => {
    const [filteredData, setFilteredData] = useState(DataMock);

    const handleFilter = (e) => {
        const value = e.target.value.toLowerCase();
        const filtered = DataMock.filter(
            (item) =>
                item.title.toLowerCase().includes(value) ||
                item.language.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    return (
        <Layout>
            <main style={{ padding: "16px", width: "100%" }}>
                <section style={{ backgroundColor: "white", width: "1150px", borderRadius: "12px", border: "1px solid #eaeaea", display: "flex", flexDirection: "column",height:'660px',top:"0px" }}>
                    {/* Header Section */}
                    <header style={{ display: "flex", flexDirection: "column", gap: "16px", borderBottom: "1px solid #eaeaea", padding: "16px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                            <div>
                                <h1 style={{ fontWeight: "600", fontSize: "20px" }}>Repositories</h1>
                                <p style={{ fontWeight: "300", fontSize: "14px" }}>{DataMock.length} total repositories</p>
                            </div>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <button style={{ display: "flex", fontSize: "12px", alignItems: "center", padding: "8px 16px", gap: "8px", borderRadius: "6px", border: "1px solid #eaeaea" }}>
                                    <ArrowPathIcon style={{ width: "16px", height: "16px" }} />
                                    Refresh All
                                </button>
                                <button style={{ display: "flex", fontSize: "12px", alignItems: "center", padding: "8px 16px", gap: "8px", backgroundColor: "#1D4ED8", color: "white", borderRadius: "6px" }}>
                                    <PlusIcon style={{ width: "16px", height: "16px" }} />
                                    Add Repository
                                </button>
                            </div>
                        </div>
                        {/* Search Bar */}
                        <div>
                            <label htmlFor="inputSearch" style={{ border: "1px solid #eaeaea", width: "fit-content", borderRadius: "6px", display: "flex", gap: "8px", alignItems: "center", padding: "8px" }}>
                                <MagnifyingGlassIcon style={{ width: "16px", height: "16px", strokeWidth: "2" }} />
                                <input
                                    id="inputSearch"
                                    placeholder="Search Repositories"
                                    onChange={handleFilter}
                                    style={{ fontSize: "12px", width: "100%", maxWidth: "300px", outline: "none", color: "#4B5563", padding: "0" }}
                                />
                            </label>
                        </div>
                    </header>

                    {/* Repository List Section */}
                    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <article
                                    key={index}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: "16px",
                                        gap: "12px",
                                        backgroundColor: "#f9fafb",
                                        borderBottom: index !== filteredData.length - 1 ? "1px solid #eaeaea" : "none",
                                        width: "calc(100% - 32px)", // Increased card width
                                        maxWidth: "1200px", // Adjust the max width as needed
                                        margin: "0 auto", // Center the card horizontally
                                    }}
                                >
                                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                        <span>{item.title}</span>
                                        <span style={{ backgroundColor: "#DBEAFE", border: "1px solid #BFDBFE", color: "#1D4ED8", fontSize: "12px", padding: "4px 8px", borderRadius: "9999px" }}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <div style={{ display: "flex", gap: "16px", fontSize: "14px", fontWeight: "300" }}>
                                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            {item.language}
                                            <span style={{ backgroundColor: "#1D4ED8", padding: "4px", borderRadius: "9999px" }}></span>
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                            <CircleStackIcon style={{ width: "16px", height: "16px" }} />
                                            {item.size}
                                        </span>
                                        <span>{item.updatedAt}</span>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid #eaeaea", padding: "16px", gap: "12px", color: "#6B7280", textAlign: "center" }}>
                                Looks like there is no repository to show.
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Home;
