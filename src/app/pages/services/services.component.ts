import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="p-6">
      <h1 class="text-2xl font-bold text-center">Our Services</h1>
      <ul class="mt-4 text-gray-700">
        <li class="mb-2">✔ Visa consultancy: We assess clients' needs and recommend the most suitable visa options.</li>
        <li class="mb-2">✔ DS-160 Application: We assist in accurately filling out and submitting DS-160 forms.</li>
        <li class="mb-2">✔ End-to-End Support: From initial consultation to visa approval, we provide continuous support and guidance.</li>
        <li class="mb-2">✔ Client Communication: We stay connected with our clients throughout the process, clarifying all doubts and ensuring a smooth experience.</li>
      </ul>
    </div>
  `,
  styles: []
})
export class ServicesComponent {}
