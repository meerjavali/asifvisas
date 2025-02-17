import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  template: `
    <div class="p-6 max-w-lg mx-auto text-center">
      <h1 class="text-3xl font-bold">Contact Us</h1>
      <p class="mt-2 text-gray-700">We are here to assist you with all your visa-related queries. Reach out to us, and we will guide you through the process smoothly.</p>
      <form class="mt-4 space-y-4 text-left">
        <input type="text" placeholder="Name" class="w-full p-2 border rounded">
        <input type="tel" placeholder="Phone Number" class="w-full p-2 border rounded">
        <input type="email" placeholder="Email (optional)" class="w-full p-2 border rounded">
        <select class="w-full p-2 border rounded">
          <option value="" disabled selected>Select Visa Type</option>
          <option value="b1/b2">B1/B2 Visa</option>
          <option value="f1/f2">F1/F2 Visa</option>
          <option value="j1/j2">J1/J2 Visa</option>
          <option value="h1/h2">H1/H2 Visa</option>
        </select>
        <textarea placeholder="Describe your query" class="w-full p-2 border rounded"></textarea>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
      <div class="mt-6 text-gray-700 text-center">
        <h2 class="text-lg font-semibold">You can also reach out to us 24x7:</h2>
        <div class="flex flex-col items-center mt-2">
          <p class="flex items-center gap-2"><span class="material-icons">email</span> helpdesk@asifvisas.com</p>
          <p class="flex items-center gap-2"><span class="material-icons">phone</span> 9390317009</p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ContactUsComponent {}
