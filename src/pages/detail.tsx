import { useEffect, useState } from "react";
import GetPhoto from "../features/photo/api/getphoto";
import Spinner from "../components/loading/spinner";
import MainTitle from "../components/banner/mainbanner";
import DetailCard from "../components/card/detailcard";
import HomeButton from "../components/buttons/homebutton";


function Detail() {
    const [photo, setPhoto] = useState<any>(null)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    useEffect(() => {
        const fetchPhotos = async () => {
            const photoData = await GetPhoto(id);
            setPhoto(photoData)
        };
        fetchPhotos();
    }, []);

    return <div>
        <HomeButton></HomeButton>
        <MainTitle title="photo detail"></MainTitle>
        {photo == null && (<Spinner></Spinner>)}
        {photo != null && (<DetailCard photo={photo}></DetailCard>)}
    </div>
}

export default Detail;