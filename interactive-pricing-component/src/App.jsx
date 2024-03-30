import { useState } from 'react';
import checkMark from "./assets/icon-check.svg";
import bg from "./assets/bg-pattern.svg";
import circles from "./assets/pattern-circles.svg";
import slider from "./assets/icon-slider.svg";
import { useDispatch, useSelector } from 'react-redux';
import { change } from './state/counter';
import DarkMode from './components/DarkMode/DarkMode.jsx';

const Pricing = {
  1: {
    pageViews: "10K",
    monthly: 8,
    yearly: 72
  },
  2: {
    pageViews: "50K",
    monthly: 12,
    yearly: 108
  },
  3: {
    pageViews: "100K",
    monthly: 16,
    yearly: 144
  },
  4: {
    pageViews: "500K",
    monthly: 24,
    yearly: 216
  },
  5: {
    pageViews: "1M",
    monthly: 36,
    yearly: 324
  },
};

function App() {

  const dispatch = useDispatch();

  const {pageViews}  = useSelector((state) => state.counter);

  const [isMonthly, setIsMonthly] = useState(true);


  return (
    <>
    <DarkMode />
    <div className="grid-xl">
      <img src={bg} alt="" className="bg-img" />
      <div className="grid-md relative">
        <img src={circles} alt="" className="circles" />
        <h1 className='h1'>Simple, traffic-based pricing</h1>
        <div className="text-wrapper">
          <p>Sign-up for our 30-day trial.</p>
          <p>No credit card required.</p>
        </div>
      </div>
      <div className="card">
        <div className="slider-wrapper">
          <p className='uppercase pageviews'>{Pricing[pageViews].pageViews} pageviews</p>
          <div className="range-wrapper">
            <input type="range" name='pageviews' id='pageviews' min={1} max={5} step={1} defaultValue={3} aria-label={`${Pricing[pageViews].pageViews} pageviews`} value={pageViews} onInput={(e) => dispatch(change(e.target.value))}/>
            <div className="fake-range" style={{"--width": `${(pageViews-1) * 23}%`,}}>
              <div className="track">
                <div className="track-fill"></div>
              </div>
              <div className="thumb">
                <img src={slider} alt="" className="slider" />
              </div>
            </div>
          </div>
          <p className='price-wrapper'>
            <span className='price'>${Pricing[pageViews][isMonthly ? 'monthly' : 'yearly']}{".00"}</span> /{isMonthly ? 'month' : 'year'}
          </p>
        </div>
        <div className="billing-wrapper">
          <input type='checkbox' name='billingType' id='billingType' onChange={(e) => setIsMonthly(!isMonthly)}/>
          <label htmlFor='billingType' className='billing-type'>
            <p>Monthly Billing</p>
            <div className="fake-checkbox"></div>
            <p> Yearly Billing</p>
            <span className='discount'>25% <span>discount</span></span>
          </label>
        </div>
        <div className="grid-md checkmark-wrapper">
          <div className="checkmarks">
            <div className="flex-sm">
              <img src={checkMark} alt='img'/>
              <p>Unlimited websites</p>
            </div>
            <div className="flex-sm">
              <img src={checkMark} alt='img'/>
              <p>100% data ownership</p>
            </div>
            <div className="flex-sm">
              <img src={checkMark} alt='img'/>
              <p>Email reports</p>
            </div>
          </div>
          <button className='btn'> Start my trial</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
