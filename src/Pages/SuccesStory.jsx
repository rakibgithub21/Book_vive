import { useNavigate } from "react-router-dom";

const SuccesStory = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/review')
    }
    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Success Story</h2>
                <p className="text-lg text-gray-700 mb-8">
                    At Book Vibe, our journey has been one of passion, innovation, and above all, a deep love for literature. Since our inception, we have strived to create an online platform that not only connects readers with their next favorite book but also fosters a vibrant community of bibliophiles worldwide.
                </p>
                <h3 className="text-2xl font-bold mb-4">From Idea to Reality</h3>
                <p className="text-lg text-gray-700 mb-8">
                    It all started with a simple idea: to make discovering great books effortless and enjoyable. Armed with this vision, our team of avid readers and tech enthusiasts embarked on a journey to bring Book Vibe to life. We spent countless hours brainstorming, refining our concept, and developing the technology necessary to make it happen.
                </p>
                <h3 className="text-2xl font-bold mb-4">Innovating the Reading Experience</h3>
                <p className="text-lg text-gray-700 mb-8">
                    One of our key breakthroughs was the development of advanced algorithms that analyze reading preferences and recommend personalized book suggestions. This technology lies at the heart of Book Vibe, ensuring that each user receives tailored recommendations based on their unique tastes and interests.
                </p>
                <h3 className="text-2xl font-bold mb-4">Building a Thriving Community</h3>
                <p className="text-lg text-gray-700 mb-8">
                    But Book Vibe is more than just a recommendation engine—its a community. From book clubs and discussion forums to author interviews and literary events, we have worked tirelessly to create a space where readers can connect, share their passion for books, and discover new voices in the literary world.
                </p>
                <h3 className="text-2xl font-bold mb-4">Milestones and Achievements</h3>
                <ul className="list-disc text-lg text-gray-700 mb-8">
                    <li>Reached [X] million registered users worldwide</li>
                    <li>Recommended over [Y] million books to readers</li>
                    <li>Partnered with leading publishers and authors to feature exclusive content</li>
                    <li>Received accolades and recognition from the literary community</li>
                </ul>
                <h3 className="text-2xl font-bold mb-4">Our Vision for the Future</h3>
                <p className="text-lg text-gray-700 mb-8">
                    As we look ahead, our commitment to innovation and excellence remains unwavering. We envision Book Vibe as the go-to destination for readers everywhere, a place where they can explore endless literary possibilities and connect with like-minded individuals who share their passion.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                    <span className="font-bold">Join Us on the Journey</span>
                    <br />
                    We invite you to join us on this incredible journey as we continue to redefine the way the world discovers and experiences books. Whether youre a lifelong bookworm or just beginning your reading adventure, there is a place for you at Book Vibe.
                </p>
                <p className="text-lg text-gray-700">
                    Thank you for being a part of our story.
                </p>
            </div>
            <div className="text-center my-3">
                <button onClick={goBack} type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go Back...</button>
            </div>
        </div>
    );
};

export default SuccesStory;