import useFormContext from "../hooks/useFormContext"

const Billing = () => {

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex-col">
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="billFirstName">First Name</label>
                    <input
                        type="text"
                        id="billFirstName"
                        name="billFirstName"
                        placeholder="Jensi"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billFirstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="billLastName">Last Name</label>
                    <input
                        type="text"
                        id="billLastName"
                        name="billLastName"
                        placeholder="Bodrya"
                        pattern="([A-Z])[\w+.]{1,}"
                        value={data.billLastName}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <label htmlFor="billAddress1">Address</label>
            <input
                type="text"
                id="billAddress1"
                name="billAddress1"
                placeholder="8 Hariom Bunglows"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress1}
                onChange={handleChange}
            />

            <label htmlFor="billAddress2" className="offscreen">2nd Address line</label>
            <input
                type="text"
                id="billAddress2"
                name="billAddress2"
                placeholder="Mota Varachha"
                pattern="[\w\d\s.#]{2,}"
                value={data.billAddress2}
                onChange={handleChange}
            />

            <label htmlFor="billCity">City</label>
            <input
                type="text"
                id="billCity"
                name="billCity"
                placeholder="Surat"
                pattern="([A-Z])[\w\s.]{1,}"
                value={data.billCity}
                onChange={handleChange}
            />

            <label htmlFor="billState">State</label>
            <select
                id="billState"
                name="billState"
                value={data.billState}
                onChange={handleChange}
            >
                <option value="GJ">Gujarat</option>
                <option value="MH">Maharashtra</option>
                <option value="RJ">Rajasthan</option>
                <option value="DH">Delhi</option>
                <option value="BI">Bihar</option>
                
            </select>

            <label htmlFor="billZipCode">Zip Code</label>
            <input
                type="text"
                id="billZipCode"
                name="billZipCode"
                placeholder="394101"
                pattern="[0-9]{6}"
                maxLength="6"
                value={data.billZipCode}
                onChange={handleChange}
            />
        </div>
    )

    return content
}
export default Billing