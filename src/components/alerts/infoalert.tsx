function InfoAlert({ mss }: { mss: string }) {
    return <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 fixed" role="alert">
        <p className="font-bold">Informational message</p>
        <p className="text-sm">{mss}</p>
    </div>
}

export default InfoAlert;