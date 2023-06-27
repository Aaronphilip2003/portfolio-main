import "./index.scss"
import Loader from 'react-loaders';
const Portfolio=()=>{
    return(
        <>
        <div className="outer-div">
            <div class="card">
                
            <div className="card-content">
                <h3 className="card-title">Real-time Bitcoin Price</h3>
                <p className="card-description">
                This project gets real-time Bitcoin Price making Api calls after every specified interval of time. At the end of the total specified time, it utilises the matplotlib module in python and makes a BITCOIN PRICE vs TIME graph, which helps us visualise the fluctuation in the price of Bitcoin. 
                <br/>
                <br/>    
                </p>
                <a href="https://github.com/Aaronphilip2003/Bitcoin-Real-Time-Data" class="card-link" target="_blank">View on GitHub</a>
            </div>
            </div>

            <div class="card">
            <div className="card-content">
                <h3 className="card-title">Quotes Website</h3>
                <p className="card-description">
                The Random Quotes Generator is a delightful web application designed to brighten your day with inspiring and uplifting quotes. With just a click of a button, the app generates random quotes from a curated collection, providing you with a dose of positivity and motivation.
                <br/>
                <br/>
                <br/>
                </p>
                <a href="https://github.com/Aaronphilip2003/Quotes-App" class="card-link" target="_blank">View on GitHub</a>
            </div>
            </div>

            <div class="card">
            <div className="card-content">
                <h3 className="card-title">Predicting Airbnb Locations using Linear Regression and Decision Tree Classification</h3>
                <p className="card-description">
                The Predicting Airbnb Locations project is a machine learning project that focuses on predicting the optimal locations for Airbnb listings using linear regression and decision tree classification algorithms. 
                <br/>
                <br/>
                </p>
                <a href="https://github.com/Aaronphilip2003/Jovian_Final_Project" class="card-link" target="_blank">View on GitHub</a>
            </div>
            </div>

    </div>
    </>

    )
}

export default Portfolio;