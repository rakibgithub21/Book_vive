const UpCommingDetails = () => {
    

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg text-center grid gap-6 my-10 grid-cols-1 sm:grid-cols-2">
                <div className="space-y-4 flex flex-col justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Thank You for Your Patience</h1>
                    <p className="text-lg text-gray-600">Dear valued customers, we want to express our sincere gratitude for your continued support and enthusiasm for our literary endeavors.</p>
                    <p className="text-lg text-gray-600">As we prepare for the release of our upcoming books, we kindly ask for your patience. Rest assured, our team is diligently working to bring you captivating stories that will ignite your imagination and transport you to new worlds.</p>
                    <p className="text-lg text-gray-600">Thank you for your understanding and continued support. We can not wait to share these exciting new adventures with you!</p>
                    <p className="text-lg text-gray-600">Thanks By</p>
                    <p className="text-lg text-gray-600">[Md Rakibul Islam]</p>
                </div>
                <div className="border border-gray-300 p-4 rounded-lg flex flex-col justify-center items-center space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Enter Your Information & Wanted Book Name:</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="block border border-gray-300 w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="block border border-gray-300 w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                        type="text"
                        name="wantedbook"
                        placeholder="Wanted Book Name"
                        className="block border border-gray-300 w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <textarea
                        name="comment"
                        placeholder="Your Comment"
                        className="block border border-gray-300 w-full px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        rows="5"
                    ></textarea>
                    <button 
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpCommingDetails;
