import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ─────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_t7zyq0n';   // EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_xc4zraq';  // EmailJS Template ID
const EMAILJS_PUBLIC_KEY  = 'W76cLWgoagHA25HE6'; // EmailJS Public Key
// ───────────────────────────────────────────────────────────────────────────

export type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() contact = PORTFOLIO_DATA.contact;

  formStatus: FormStatus = 'idle';
  errorMessage = '';

  formData = {
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  };

  async onSubmit(form: any): Promise<void> {
    if (form.invalid) return;

    this.formStatus = 'sending';
    this.errorMessage = '';

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:      this.formData.from_name,   // matches {{name}} in template
          email:     this.formData.from_email,  // matches {{email}} in template
          title:     this.formData.subject,     // matches {{title}} in Subject line
          subject:   this.formData.subject,     // matches {{subject}} in body
          message:   this.formData.message,     // matches {{message}} in body
          reply_to:  this.formData.from_email,  // Reply-To header
          to_name:   'Shanto',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      this.formStatus = 'success';
      this.formData = { from_name: '', from_email: '', subject: '', message: '' };
      form.resetForm();

      // Auto-reset after 5 seconds
      setTimeout(() => { this.formStatus = 'idle'; }, 5000);

    } catch (error: any) {
      this.formStatus = 'error';
      this.errorMessage = error?.text || 'Something went wrong. Please try again.';
      setTimeout(() => { this.formStatus = 'idle'; }, 5000);
    }
  }

  get isSending(): boolean { return this.formStatus === 'sending'; }
  get isSuccess(): boolean { return this.formStatus === 'success'; }
  get isError():   boolean { return this.formStatus === 'error'; }
}
