function DetailCard({ photo }: { photo: any }) {
    console.log(photo)
    const collectionNames = photo.current_user_collections.map((collection: { title: any; }, index: any) => {
        return collection.title
    })
    const collections = collectionNames.join("; ")
    const topicNames = photo.topics.map((topic: { title: any; }, index: any) => {
        return topic.title
    })
    const topics = topicNames.join("; ")
    return <div className="lg:columns-2 m-10 bg-white rounded-lg">
        <div className="flex p-5 justify-center items-center">
            <img className="rounded-lg w-2/3" src={photo.urls.full} alt={photo.urls.full} />
        </div>
        <div className="p-5">
            <div className="mb-3 flex items-center justify-between">
                <div className="flex">
                    <div className="flex ">
                        <svg className="w-5 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f91f1f" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                        <span className="flex items-center">{photo.likes}</span>
                    </div>
                    <div className="flex ms-3">
                        <svg className="w-5 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" /></svg>
                        <span className="flex items-center">{photo.downloads}</span>
                    </div>
                </div>
                <div >
                    <p> {photo.updated_at}</p>
                </div>
            </div>
            <div className="flex">
                <img src={photo.user.profile_image.small} className="rounded-full w-10 h-10" alt="" />
                <div className="text-left ml-5">
                    <div className="flex items-center  font-bold text-2xl">{photo.user.name} ({photo.user.username})</div>
                    <i className="opacity-50 text-sm">{photo.location.name}</i>
                </div>
            </div>
            <ul>
                <li className="mt-2 mb-2"><span className="font-bold">Decription:</span> {photo.alt_description != "" ? photo.alt_description : (<i className="text-red-400"> The photo has no description.</i>)}</li>
                <li className="mt-2 mb-2"><span className="font-bold">Topics:</span> {topics.length != 0 ? topics : (<i className="text-red-400">The photo does not belong to any topic.</i>)}</li>
                <li className="mt-2 mb-2"><span className="font-bold">From collection:</span> {collections.length != 0 ? collections : (<i className="text-red-400">The photo does not belong to any collection.</i>)}</li>
            </ul>
        </div>
    </div>
}

export default DetailCard