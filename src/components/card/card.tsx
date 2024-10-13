import { useNavigate } from 'react-router-dom';

function Card({ url, userName, userAvatar, id }: { url: string, userName: string, userAvatar: string, id: string }) {
    const navigate = useNavigate();
    const redirectToDetail = () => {
        navigate(`/detail?id=${id}`);
    };

    return <div className="p-1 rounded-lg hover:z-10 transition-transform duration-300 transform hover:scale-125  bg-white" onClick={redirectToDetail}>
        <div>
            <img src={url} alt="photo" className="rounded-lg h-60 w-full object-cover  peer" />
            <div className="flex content-center" >
                <img src={userAvatar} alt={userAvatar} className="rounded-full h-10 p-2" />
                <div className="flex items-center justify-center "><p>{userName}</p></div>
            </div>
        </div>
    </div>
}

export default Card

