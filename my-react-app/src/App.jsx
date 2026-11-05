
function Feedback() {
    return (
        <form>
            <div>
                <h1>Feedback Form</h1>
                <p>Write your feedback here</p>

                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                />

                <br /><br />

                <label>Star Rating:</label>
                <input
                    type="number"
                    placeholder="Give your star rating"
                    min="1"
                    max="5"
                />

                <br /><br />

                <label>Comment:</label>
                <textarea
                    placeholder="Write your comment here"
                />

                <br /><br />

                <button type="submit">Submit</button>

                <h2>Thank you!</h2>
            </div>
        </form>
    );
}

export default Feedback;

