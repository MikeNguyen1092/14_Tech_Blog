document.querySelector("#post-form").addEventListener("submit", handleFormSubmit);
const handleFormSubmit = async (event) => {
	event.preventDefault();

	// Get form data
	const title = document.querySelector("#title").value.trim();
	const content = document.querySelector("#content").value.trim();
	const postData = {
		title,
		content,

	};

	try {

		const response = await fetch("/api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(postData),
		});

		if (response.ok) {

			console.log("Post submitted successfully");

		} else {

			console.error("Failed to submit post");
		}
	} catch (error) {

		console.error("Fetch error:", error);
	}
};



