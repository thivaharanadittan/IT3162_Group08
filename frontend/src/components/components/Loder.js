import React, { useState, CSSProperties } from 'react';
import HashLoader from "react-spinners/HashLoader";
export default function Loder() {
    let [loading, setLoading] = useState(true);

    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    return (
        <div style={{ marginTop: '150px', marginLeft: '1000px' }} >
            <div className="sweet-loading ">
                <HashLoader
                    color='black'
                    loading={loading}
                    cssOverride=''
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    );

}