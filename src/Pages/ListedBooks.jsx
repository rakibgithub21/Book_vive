import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from "./Read";
import Wish from "./Wish";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [readLs, setReadLs] = useState([]);
    const [wishLs, setWishLs] = useState([]);

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('readList')) || [];
        setReadLs(saveData)
    }, [])

    useEffect(() => {
        const saveData = JSON.parse(localStorage.getItem('wishList')) || [];
        setWishLs(saveData);
    }, [])

    const handleSorting = e => {
        let sortedList = [...readLs];
        let sortWishLs = [...wishLs]

        if (e.target.value === 'publishedYear') {
            sortedList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            sortWishLs.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing)
        }
        else if (e.target.value === 'ratings') {
            sortedList.sort((a, b) => b.rating - a.rating);
            sortWishLs.sort((a, b) => b.rating - a.rating);
        }
        else if (e.target.value === 'pageNumber') {
            sortedList.sort((a, b) => b.totalPages - a.totalPages);
            sortWishLs.sort((a, b) => b.totalPages - a.totalPages);
        }

        setReadLs(sortedList);
        setWishLs(sortWishLs);
    }

    return (
        <div className="mt-9">
            <div className="text-center bg-[#1313130d] py-8 my-10">
                <h3 className="text-3xl font-semibold">Books</h3>
            </div>

            <div className="text-center my-10">
                <select onChange={handleSorting} id="sortSelect" className="p-2 border bg-[#23BE0A] border-gray-300 rounded-md text-white font-medium focus:outline-none focus:border-blue-500 " defaultValue="default">
                    <option  value="default" disabled>Sort By</option>
                    <option value="publishedYear">Published Year</option>
                    <option value="ratings">Ratings</option>
                    <option value="pageNumber">Page Number</option>
                </select>
            </div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    {readLs.map(read => <Read key={read.bookId} read={read} />)}
                </TabPanel>
                <TabPanel>
                    {wishLs.map(wish => <Wish key={wish.bookId} wish={wish} />)}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;