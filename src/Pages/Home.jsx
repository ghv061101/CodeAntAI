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
            <main className="p-2">
                <section className="bg-white w-full rounded-xl border flex flex-col">
                    {/* Header Section */}
                    <header className="flex flex-col gap-4 border-b p-4">
                        <div className="flex justify-between items-center flex-wrap gap-4">
                            <div>
                                <h1 className="font-semibold text-xl">Repositories</h1>
                                <p className="font-light text-sm">{DataMock.length} total repositories</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex text-xs items-center p-2 px-4 gap-2 rounded-md border">
                                    <ArrowPathIcon className="w-4 h-4" />
                                    Refresh All
                                </button>
                                <button className="flex text-xs items-center p-2 px-4 gap-2 bg-blue-600 text-white rounded-md">
                                    <PlusIcon className="w-4 h-4" />
                                    Add Repository
                                </button>
                            </div>
                        </div>
                        {/* Search Bar */}
                        <div>
                            <label
                                htmlFor="inputSearch"
                                className="border w-fit rounded-md flex gap-2 items-center px-2 py-2"
                            >
                                <MagnifyingGlassIcon className="w-4 h-4 stroke-2" />
                                <input
                                    id="inputSearch"
                                    placeholder="Search Repositories"
                                    onChange={handleFilter}
                                    className="text-xs w-[200px] placeholder-gray-700 outline-none"
                                />
                            </label>
                        </div>
                    </header>

                    {/* Repository List Section */}
                    <div className="flex flex-col w-full">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <article
                                    key={index}
                                    className={`flex flex-col p-4 gap-3 hover:bg-gray-100 ${
                                        index !== filteredData.length - 1 ? "border-b" : ""
                                    }`}
                                >
                                    <div className="flex gap-2 items-center">
                                        <span>{item.title}</span>
                                        <span className="bg-blue-50 border border-blue-200 text-blue-700 text-xs px-2 rounded-full">
                                            {item.type}
                                        </span>
                                    </div>
                                    <div className="flex gap-4 md:gap-8 text-sm font-light">
                                        <span className="flex items-center gap-2">
                                            {item.language}
                                            <span className="bg-blue-600 p-1 rounded-full"></span>
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <CircleStackIcon className="w-4 h-4" />
                                            {item.size}
                                        </span>
                                        <span>{item.updatedAt}</span>
                                    </div>
                                </article>
                            ))
                        ) : (
                            <div className="flex flex-col border-b p-4 gap-3 text-gray-500 text-center">
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
