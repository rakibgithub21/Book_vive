import image1 from '../assets/Img/image1.png'
import image2 from '../assets/Img/image2.png'
import image3 from '../assets/Img/image-3.png'
import { useNavigate } from 'react-router-dom';

const CustomerReview = () => {
    const navigate = useNavigate()
    const showStories = () => {
        navigate('/success')
    }
    return (
        <section className='my-10'>
            <div className="md:flex gap-10">
                <div className='space-y-5 text-lg my-10 md:my-0'>
                    <h1 className='text-[#ff226f] font-medium text-4xl'>Read what our customers love about us</h1>
                    <p>
                        At DreamScape Adventure, we take pride in creating unforgettable travel experiences, and our
                        customers have spoken!
                        Here is what they love about us:
                    </p>
                    <p>
                        We take pride in our role of enhancing numerous journeys, ensuring each one is a masterpiece of
                        unforgettable moments.
                        With our dedicated support, we have turned ordinary trips into extraordinary adventures. Let us continue
                        to make your
                        journey the best it can be, creating memories that last a lifetime.
                    </p>
                    <button onClick={showStories} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-semibold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Read our success stories...</button>

                </div>
                <div className='space-y-5'>
                    <div className='md:flex gap-5 items-center shadow-lg rounded-2xl border border-lime-200 p-5'>
                        <div className='flex justify-center'>
                            <img className='w-[150px] md:w-full ' src={image1} alt="user" />
                        </div>
                        <div>
                            <div >
                                <p>
                                    I stumbled upon the website for vive while searching for new reads, and I was instantly drawn in. The layout is sleek and modern, making it easy to navigate. What impressed me the most was the wealth of information available about the book and its author. The synopsis provided a tantalizing glimpse into the story, leaving me eager to delve deeper. The authors bio added a personal touch, giving me insight into their background and inspirations. Overall, a fantastic website that truly enhances the readers experience.
                                </p>
                                <h4>- Md Saiful Islam</h4>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex gap-5 items-center shadow-lg rounded-2xl border border-lime-200 p-5'>
                        <div className='flex justify-center'>
                            <img className='w-[150px] md:w-full ' src={image2} alt="user" />
                        </div>
                        <div >
                            <div >
                                <p>
                                    Navigating the website for Vive felt like embarking on a journey into the heart of the story. The captivating visuals and immersive design instantly transported me into the world of the book. I appreciated the attention to detail in every aspect, from the vivid imagery to the carefully curated content. Whether it was exploring the character profiles or delving into the themes explored in the book, every section felt thoughtfully crafted to enhance the readers experience. Bravo to the creators for seamlessly bringing the essence of Vive to life on the web!
                                </p>
                                <h4>- Md Tarekul Islam</h4>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex gap-5 items-center shadow-lg rounded-2xl border border-lime-200 p-5'>
                        <div className='flex justify-center'>
                            <img className='w-[150px] md:w-full ' src={image3} alt="user" />
                        </div>
                        <div >
                            <div>
                                <p>
                                    As a book lover, I am always on the lookout for new titles to add to my collection, and I am glad I stumbled upon the website for Vive. Not only is the website visually appealing, but it is also incredibly user-friendly. I appreciated the intuitive layout that made it easy to explore different sections and learn more about the book. The inclusion of reviews and testimonials from other readers helped me gauge the books reception, further piquing my interest. Kudos to the team behind this website for creating such an engaging platform for book enthusiasts like myself!
                                </p>
                                <h4>Md Rakibul Islam</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CustomerReview;