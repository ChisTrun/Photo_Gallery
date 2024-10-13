const ListPhoto = async (page: number = 1, perPage: number = 10) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_ACCESS_KEY}&page=${page}&per_page=${perPage}`);
        if (!response.ok) {
            throw new Error("Failed to fetch photos");
        }
        const photos = await response.json();
        return photos
    } catch (error: any) {
        console.error("Error fetching photos:", error);
        return [];
    }
}

export default ListPhoto;