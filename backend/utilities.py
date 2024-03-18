from django.core.mail import EmailMessage
from django.template.loader import render_to_string


# Import to the views file to send an email.
def send_html_email(subject, template_name, context, recipient_list):
    # Render the HTML template with the given context
    html_content = render_to_string(template_name, context)

    # Send the HTML email
    email = EmailMessage(subject=subject, body=html_content, to=recipient_list)
    email.content_subtype = "html"
    email.send()
