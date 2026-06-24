import React, { useState } from 'react'
import { webStore } from '../services/web.services.js';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
    const {setData} = webStore();
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    async function handleClick(e) {
        e.preventDefault();
        navigate(`/analytics?url=${encodeURIComponent(url)}`);
        setUrl("");
    }
    return (
        <div className="page">
            <div className='input-page'>
                <div className="horizontal-cut">
                    <div className="vertical-cut">
                        <form>
                            <input
                                type='text'
                                placeholder='Enter website URL'
                                className='url-input'
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                            <button
                                className='btn'
                                onClick={(e) => handleClick(e)}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputPage