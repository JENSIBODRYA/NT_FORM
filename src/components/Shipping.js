import useFormContext from "../hooks/useFormContext"

const Shipping = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="sameAsBilling">
                <input
                    type="checkbox"
                    id="sameAsBilling"
                    name="sameAsBilling"
                    checked={data.sameAsBilling}
                    onChange={handleChange}
                />
                Same as Billing Address
            </label>

            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="shipFirstName">First Name</label>
                    <input
                        type="text"
                        id="shipFirstName"
                        name="shipFirstName"
                        placeholder="Jensi"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipFirstName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="shipLastName">Last Name</label>
                    <input
                        type="text"
                        id="shipLastName"
                        name="shipLastName"
                        placeholder="Bodrya"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.shipLastName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                    />
                </div>
            </div>

            <label htmlFor="shipAddress1">Address</label>
            <input
                type="text"
                id="shipAddress1"
                name="shipAddress1"
                placeholder="8 Hariom Bunglows"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress1}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipAddress2"></label>
            <input
                type="text"
                id="shipAddress2"
                name="shipAddress2"
                placeholder="Mota Varachha"
                pattern="[\w\d\s.#]{2,}"
                value={data.shipAddress2}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipCity">City</label>
            <input
                type="text"
                id="shipCity"
                name="ship-city"
                placeholder="Surat"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.shipCity}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />

            <label htmlFor="shipState">State</label>
            <select
                id="shipState"
                name="shipState"
                value={data.shipState}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            >
                <option value="GJ">Gujarat</option>
                <option value="MH">Maharashtra</option>
                <option value="RJ">Rajasthan</option>
                <option value="DH">Delhi</option>
                <option value="BI">Bihar</option>
            </select>

            <label htmlFor="shipZipCode">Zip Code</label>
            <input
                type="text"
                id="shipZipCode"
                name="shipZipCode"
                placeholder="394101"
                pattern="[0-9]{6}"
                maxLength="6"
                value={data.shipZipCode}
                onChange={handleChange}
                disabled={data.sameAsBilling}
            />
        </>
    )

    return content
}
export default Shipping