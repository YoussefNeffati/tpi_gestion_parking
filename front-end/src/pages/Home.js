import React from 'react';

function Home() {
  return (
    <div className='home'>
      <h1>Home</h1>
      {/* <form
					onSubmit={(e) => {
						e.preventDefault();
						fetch("http://localhost:5050/date", {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								date: "Bonjour"
								
							})
						})
						
					}}
				>

					<button className="button" type="submit">
						Test Post
					</button>
				</form> */}
    </div>
  );
}

export default Home;
