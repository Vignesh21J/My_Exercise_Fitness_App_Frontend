import React from 'react'

const ExerciseImage = ({ exerciseId }) => {

    //const apiKey = process.env.REACT_APP_RAPID_API_KEY; // Replace with your actual RapidAPI key
    
    const resolution = "180";

    const imageUrl = `https://my-exercise-fitness-app-backend.onrender.com/api/image/${exerciseId}?resolution=${resolution}`;

    // const imageUrl = `http://localhost:5000/api/image/${exerciseId}?resolution=${resolution}`;


    

    // Why not used below one? Bcoz see here: https://chatgpt.com/share/688457da-b12c-800f-83fc-4189948d409d
    // const imageUrl = `https://exercisedb.p.rapidapi.com/image?exerciseId=${exerciseId}&resolution=${resolution}&rapidapi-key=${apiKey}`;
  
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img
                src={imageUrl}
                alt="Exercise animation"
                width={resolution}
                style={{ borderRadius: "8px" }}
                loading="lazy"
            />
        </div>
  );

}

export default ExerciseImage