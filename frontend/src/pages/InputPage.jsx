import React, { useState } from 'react'
import {submitData} from '../services/web.services.js';
const InputPage = () => {
    const [url, setUrl] = useState("");
    async function handleClick(e) {
        e.preventDefault();
        const data = {
            url,
        }
        setUrl("");
        await submitData(data);
    }
    return (
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
    )
}

export default InputPage