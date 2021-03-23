/** @format */

import Utils from '../UIKit/Utils'
import Input from '../UIKit/Input'
import { useEffect, useState } from 'react'
import UploadImage from '../UploadImage'
import Button from '../UIKit/Button'
const AddHotel = (props) => {
    const [hotel, setHotel] = useState({
        name: null,
        location: null,
        description: null,
        discount: null,
        images: [],
        rating: null,
        status: null,
        taxes: null,
        // facilities: {},
        // policy: {},
    });
    const [urlImages, setUrlImages] = useState([]);
    useEffect(() => {
        setHotel({...hotel, images: urlImages})
    },[urlImages]);
    const handleSubmit = () =>{
        if(hotel.name && hotel.location && hotel.description && hotel.images){
            console.log(hotel);
            console.log(urlImages)
        }
        else{alert("Something went wrong!")}
    }
    const body = (
        <>
            <div className="row">

                <p className="fs-2 text-center">Add hotel </p>
                <div className="col-lg-6">
                    <Input
                        type="text"
                        onChange={(e) => setHotel({ ...hotel, name: e.target.value })}
                        placeholder="Name"
                    />
                    <Input
                        type="text"
                        onChange={(e) => setHotel({ ...hotel, location: e.target.value })}
                        placeholder="Location"
                    />
                    <Input
                        type="text"
                        onChange={(e) => setHotel({ ...hotel, description: e.target.value })}
                        placeholder="Description" />
                    <Input
                        type="number"
                        onChange={(e) => setHotel({ ...hotel, rating: e.target.value })}
                        placeholder="Rating"
                    />
                </div>
                <div className="col-lg-6">
                    <Input
                        type="number"
                        onChange={(e) => setHotel({ ...hotel, discount: e.target.value })}
                        placeholder="Dicount"
                    />
                    <Input
                        type="number"
                        onChange={(e) => setHotel({ ...hotel, taxes: e.target.value })}
                        placeholder="Taxes"
                    />
                </div>
                <p>Upload image</p>
                    <UploadImage setUrlImages={setUrlImages} />
                <div className="d-flex justify-content-center mx-auto">
                <Button
                    text="Create hotel"
                    variant="warning"
                    onClick={handleSubmit}
                />
                </div>
            </div>

        </>
    )
    return (
        <div className="col-lg-8 col-sm-10 mx-auto">
            <Utils.Card
                body={body} />
        </div>
    )
}

export default AddHotel