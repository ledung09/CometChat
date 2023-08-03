import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact"> 
      {/* When submitting the form, it will track the action at the given path */}
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </Form>
      {data && data.error && <p>{data.error}</p>}
    </div>
  )
}

export const contactAction = async ({ request }) => {
  // Request object take form submitted value
  const data = await request.formData()
  const submission = {
    email : data.get('email'),
    message : data.get('message')
  }

  if (submission.message.length < 10) 
    return {error: "Message must over 10 characters long"}  

  return redirect('/')
}

