const Hero =()=>{
    return(
        <main className='hero container'>
            <div className='hero-content '>
                <h1>Your feet deserves the best</h1>
                <p>There is only limited offer in the website 
                    avail it as soon as possible.
                </p>

                <div className='hero-button'>
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="Shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.jpg" alt="flipkart-logo" />
                    </div>
                </div>  
            </div>

            <div className="hero-image">
                <img src="/images/adidas.jpg" alt="shoe" />
            </div>
            
            
        </main>
    )
};

export default Hero