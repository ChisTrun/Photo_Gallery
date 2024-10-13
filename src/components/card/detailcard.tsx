function DetailCard({ photo }: { photo: any }) {
    const collectionNames = photo.current_user_collections.map((collection: { title: any; }, index: any) => {
        return collection.title
    })
    const names = collectionNames.join("; ")
    return <div className="lg:columns-2 m-10 bg-white rounded-lg">
        <div className="flex p-5 justify-center items-center">
            <img className="rounded-lg w-2/3" src={photo.urls.full} alt={photo.urls.full} />
        </div>
        <div className="p-5">
            <div className="mb-3 flex">
                <svg className="w-5 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f91f1f" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                <span className="flex items-center">{photo.likes}</span>
            </div>
            <div className="flex">
                <img src={photo.user.profile_image.small} className="rounded-full w-10 h-10" alt="" />
                <div className="flex items-center ml-5 font-bold text-2xl">{photo.user.name} ({photo.user.username})</div>
            </div>
            <ul>
                <li className="mt-2 mb-2"><span className="font-bold">Decription:</span> {photo.description != null ? photo.description : (<i className="text-red-400"> The photo has no description.</i>)}</li>
                <li className="mt-2 mb-2"><span className="font-bold">From collection:</span> {names.length != 0 ? names : (<i className="text-red-400">The photo does not belong to any collection.</i>)}</li>
            </ul>
        </div>
    </div>
}

export default DetailCard