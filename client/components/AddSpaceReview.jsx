import React, { useState } from 'react';
import axios from 'axios';

const addSpaceReview = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [rating, setRating] = useState('');
  const [wifi, setWifi] = useState('');
  const [type, setType] = useState('');
  const [noise, setNoise] = useState('');
  const [outlets, setOutlets] = useState('');
  const [time, setTime] = useState('');
  const [laptopChecked, setLaptop] = useState(false);
  const [busy, setBusy] = useState('');
  const [outdoorChecked, setOutdoor] = useState(false);
  const [petChecked, setPetFriendly] = useState(false);
  const [url, setUrlAddress] = useState('');
  const [food, setFood] = useState('');
  const [coffee, setCoffee] = useState('');
  const [seating, setSeating] = useState('');
  const [additional, setAdditional] = useState('');

  // function to handle button click for add Space
  const handleAddSpace = (event) => {
    // we want to pass all of the input values to an object to pass to the db
    event.preventDefault();

    const inputObj = {
      'workspaceName': name,
      'zipcode': zipCode,
      'address': address,
      'rating': rating,
      'wifi': wifi,
      'type': type,
      'quiet': noise,
      'outlets': outlets,
      'timeLimit': time,
      'laptopRestrictions': laptopChecked,
      'crowded': busy,
      'outdoorSeating': outdoorChecked,
      'petFriendly': petChecked,
      'url': url,
      'foodRating': coffee,
      'coffeeRating': food,
      'seating': seating,
      'other': additional
    };

    // TODO: edge cases to check if required fields aren't entered
    if (name === '') {
      alert('Please enter a valid workspace name.');
    }

    // send POST request to server with new workspace info in body
    axios.post('/workspace', inputObj)
      .then(res => {
        // panda whale - need something to respond so we know it successfully posted
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  return (
    <>
      <h7>Add a Review for a Workspace</h7>
      <div className='review'>
        <form className='location_submission'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <input
            type='text'
            placeholder='Street address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}/>
          <input
            type='text'
            placeholder='Zip code'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <label>
              Overall Rating:
              <select 
              value={rating}
              onChange={(e) => setRating(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option> 
              </select>
          </label>
          <label>
              Wifi:
              <select 
              value={wifi}
              onChange={(e) => setWifi(e.target.value)}>
              <option value='Fast'>High speed and reliable</option>
              <option value='Moderate'>Moderate speed and reliable</option>
              <option value='Slow'>Slow and spotty</option>
              <option value='None'>Not available</option>
              </select>
          </label>
          <label>
              Type:
              <select 
              value={type}
              onChange={(e) => setType(e.target.value)}>
              <option value='Cafe'>Cafe</option>
              <option value='Bar'>Bar</option>
              <option value='Restaurant'>Restaurant</option>
              </select>
          </label>
          <label>
          Noise level:
              <select 
              value={noise}
              onChange={(e) => setNoise(e.target.value)}>
              <option value='Quiet'>Quiet</option>
              <option value='Moderate'>Moderate</option>
              <option value='Loud'>Loud</option>
              </select>
          </label>
          <label>
          Outlets:
              <select 
              value={outlets}
              onChange={(e) => setOutlets(e.target.value)}>
              <option value='Many'>Many and accessible</option>
              <option value='Medium'>Medium</option>
              <option value='Few'>Few</option>
              </select>
          </label>
          <label>
          Laptop restrictions:
              <input type="checkbox"
              checked={laptopChecked}
              onChange={(e) => setLaptop(e.target.checked)}
              />
          </label>
          <label>
          Busy:
              <select 
              value={busy}
              onChange={(e) => setBusy(e.target.value)}>
              <option value='Very'>Very busy</option>
              <option value='Moderate'>Moderately busy </option>
              <option value='Slow'>Slow</option>
              </select>
          </label>
          <label>
          Outdoor seating:
              <input type="checkbox"
              checked={outdoorChecked}
              onChange={(e) => setOutdoor(e.target.checked)}
              />
          </label>
          <label>
          Pet friendly:
              <input type="checkbox"
              checked={petChecked}
              onChange={(e) => setPetFriendly(e.target.checked)}
              />
          </label>
          <input
            type='URL'
            placeholder='Website'
            value={url}
            onChange={(e) => setUrlAddress(e.target.value)} />
            <label>
              Food Rating:
              <select 
              value={food}
              onChange={(e) => setFood(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>  
              </select>
          </label>
          <label>
              Coffee Rating:
              <select 
              value={coffee}
              onChange={(e) => setCoffee(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>  
              </select>
          </label>
          <label>
          Seating:
              <select 
              value={seating}
              onChange={(e) => setSeating(e.target.value)}>
              <option value='Small'>0 - 10</option>
              <option value='Medium'>10 - 25 </option>
              <option value='Large'>25 - 40</option>
              </select>
          </label>
          <input
            type='Additional'
            placeholder='Other'
            value={additional}
            onChange={(e) => setAdditional(e.target.value)} />
          <button onClick={handleAddSpace} type='submit' className='submit_btn'>
              Submit
          </button>
        </form>
      </div>
      </>
    );
};

export default addSpaceReview;
