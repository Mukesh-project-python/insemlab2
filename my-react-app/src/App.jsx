function Feedback() {
    return (
        <form>
            <div>

                <h1><b>Feedback form</b></h1>
                <p>write your feedback here</p>

                <label>Name</label>
                <input type="text" placeholder="Enter your name"></input>

                <label><b>star rating</b></label>
                <input type="number" placeholder="Give your star rating"></input>

                <label>Comment</label>
                <input type="text" placeholder="Write your comment here"></input>

                <h1><b>Thank you...</b></h1>

                <button>Submit</button>

            </div>
        </form>
    );
}

export default Feedback;
