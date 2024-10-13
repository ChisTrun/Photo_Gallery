const GetPhoto = async (id: string | null) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch photos");
        }
        const photo = await response.json();
        return photo
    } catch (error: any) {
        console.error("Error fetching photos:", error);
        return null;
    }
}

export default GetPhoto;