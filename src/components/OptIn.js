import useFormContext from "../hooks/useFormContext"

const OptIn = () => {
    const { data, handleChange } = useFormContext()

    const content = (
        <>
            <label htmlFor="optInNews">
                <input type="checkbox" id="optInNews" name="optInNews" checked={data.optInNews} onChange={handleChange} />
                Receive our newsletter
            </label>
           
        </>
    )

    return content
}
export default OptIn