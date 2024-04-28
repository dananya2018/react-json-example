import React from 'react';
import data from "../db.json";

const Home = () => {
    console.log('data', data.courses)
    return(
        <div>
            <h1>Learning Courses</h1>
            <div>
                <ul>
                    <li>
                        <h2>Course Name:</h2>
                        <p>Course Details:</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Home;