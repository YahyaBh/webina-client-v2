import client from "@/app/lib/sanityClient";

export async function POST(request) {
    try {
        // Parse the request body
        const { fullName, email, message } = await request.json();

        // Validate the input
        if (!fullName || !email || !message) {
            return new Response(
                JSON.stringify({ success: false, message: "All fields are required" }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const result = await client.create({
            _type: "contact", 
            name : fullName,
            email,
            message,
        });

        // Return success response
        return new Response(
            JSON.stringify({ success: true, message: "Message sent successfully!", data: result }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error sending message:", error);

        // Return error response
        return new Response(
            JSON.stringify({ success: false, message: "Failed to send message", error: error.message }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}