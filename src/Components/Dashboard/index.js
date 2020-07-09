import React from 'react';
import './Dashboard.scss'

const Dashboard = ({
    handlePoints
}) => {
    const handleSubmit = (e, value) => {
        e.preventDefault();
        const lon = parseInt(e.target[0].value);
        const lat = parseInt(e.target[1].value);
        handlePoints(lon, lat);
    }


    return (
        <div className="map-dashboard">
            <label>add point on map</label>
            <form onSubmit={handleSubmit} className="dashboard-form">
                <input type="number" placeholder="lon (this center = 1)"/>
                <input type="number" placeholder="lat (this center = 1)"/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Dashboard;