import Banner from "../components/Banner/Banner";
import BooksCards from "../components/BooksCards/BooksCards";


const Home = () => {
    return (
        <div className="mt-10">
            {/* Banner */}
            <Banner></Banner>
            <BooksCards></BooksCards>
        </div>
    );
};

export default Home;