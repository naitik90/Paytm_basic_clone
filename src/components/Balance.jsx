
export const Balance = ({ value }) => {
    return <div className="flex ">
        <div className="font-bold text-lg p-4">
            Your balance
        </div>
        <div className="font-semibold p-4 text-lg">
            Rs {value}
        </div>
    </div>
}