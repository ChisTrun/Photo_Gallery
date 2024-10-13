import { useEffect, useState } from "react";
import ListPhoto from "../features/photo/api/listphoto"
import Card from "../components/card/card";
import useInfiniteScroll from "../hooks/infiniteScroll"
import InfoAlert from "../components/alerts/infoalert";
import Spinner from "../components/loading/spinner";
import MainTitle from "../components/banner/mainbanner";

function Gallery() {
    const [cards, setCards] = useState<JSX.Element[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(1)
    const { isFetching, doneFetching } = useInfiniteScroll(updatePageIndex, 200);
    const [alert, setAlert] = useState(false)

    function updatePageIndex() {
        if (!isFetching) {
            const newIndex = index + 1
            setIndex(newIndex)
            doneFetching()
        }
    }
    useEffect(() => {
        if (!loading) {
            setLoading(true)
            const fetchPhotos = async () => {
                let photos = await ListPhoto(index, 20);
                if (photos.length == 0) {
                    setAlert(true)
                    setTimeout(() => {
                        setAlert(false)
                    }, 4000);
                }
                const cardList = photos.map((photo: any, index: number) => {
                    return <Card key={index} url={photo.urls.small} userName={photo.user.username} userAvatar={photo.user.profile_image.small} id={photo.id} />;
                });
                const newCardList = [...cards.slice(0, cardList.length), cardList];
                setCards(newCardList)
            };
            fetchPhotos();
            setLoading(false)
        }
    }, [index]);
    return <div className="m-10">
        {alert && (<InfoAlert mss="You have exceeded the rate limit."></InfoAlert>)}
        <MainTitle title="photo gallery"></MainTitle>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
            {cards}
        </div>
        <Spinner></Spinner>
    </div >
}

export default Gallery;