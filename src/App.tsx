import React, { useState } from 'react';
import thankyou from './images/illustration-thank-you.svg'
import star from './images/icon-star.svg'

const FeedbackComponent: React.FC = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRatingClick = (rating: number): void => {
    setSelectedRating(rating);
  };

  const handleSubmit = (): void => {
    if (selectedRating !== null) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <div className='bg-gradient-to-bl from-[#1e252f] to-[#161e26] text-white flex flex-col items-start px-8 py-4 justify-center mx-auto w-full max-w-md mt-20 rounded-3xl '>
          <img src={star} alt="star-icon" className='bg-gray-600 p-2 rounded-full mt-4' />
          <h2 className='mt-10 text-3xl text-gray-200'>How did we do?</h2>
          <p className='mt-4 text-gray-400'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className='flex flex-row gap-5 mb-4 mt-8'>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`px-6 py-4 rounded-full hover:bg-orange-500 ${selectedRating === rating ? 'bg-white text-black' : 'bg-gray-500 text-white'}`}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className='mt-4 mb-6 items-center justify-center bg-[#f5f4f4] text-black w-full py-1 rounded-full font-semibold'
          >
            SUBMIT
          </button>
        </div>
      ) : (
        <div className='bg-gradient-to-bl from-[#1e252f] to-[#161e26] flex flex-col mt-20 text-white w-full max-w-md items-center justify-center mx-auto rounded-3xl'>
          <img src={thankyou} alt="thanks-you-icon" className='mt-12 mb-4' />
          <div className='bg-gray-700 text-orange-500 px-2 py-2 mb-2 rounded-full text-sm'>You have selected {selectedRating} out of 5</div>
          <h2 className='mt-8 text-3xl font-semibold'>Thank you!</h2>
          <p className='px-8 mt-4 mb-10 text-sm text-gray-500'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      )}
    </>
  );
};

export default FeedbackComponent;
